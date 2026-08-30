import { getDb } from "../../../db";
import { trialLessonRequests } from "../../../db/schema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_LENGTHS = { contactName: 100, phone: 30, email: 120, studentProfile: 40, studentAge: 3, interest: 100, availability: 160, message: 1000 } as const;

const VALID_STUDENT_PROFILES = new Set([
  "crianca-jovem",
  "adulto",
  "preparacao",
]);

const VALID_INTERESTS = new Set([
  "baixo",
  "bateria",
  "canto",
  "formacao-musical",
  "guitarra-classica",
  "guitarra-eletrica",
  "piano",
  "guitarra-portuguesa",
  "viola-acompanhamento",
  "voz-coimbra",
  "aconselhamento",
]);

function readField(formData: FormData, name: keyof typeof MAX_LENGTHS) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTHS[name]) : "";
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};

function escapeHtml(value: string | number) {
  return String(value).replace(
    /[&<>"']/g,
    (character) => HTML_ESCAPES[character]
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPortuguesePhone(phone: string) {
  const normalized = phone
    .replace(/[\s()-]/g, "")
    .replace(/^00351/, "")
    .replace(/^\+351/, "");

  return /^\d{9}$/.test(normalized);
}

type TurnstileVerification = {
  success: boolean;
  "error-codes"?: string[];
};

async function checkSubmissionRateLimit(request: Request) {
  const { env } = await import("cloudflare:workers");
  const clientIp = request.headers.get("CF-Connecting-IP") ?? "unknown";

  return env.FORM_RATE_LIMITER.limit({
    key: `trial-lesson:${clientIp}`,
  });
}

async function verifyTurnstileToken(request: Request, token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY não configurada.");
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const remoteIp = request.headers.get("CF-Connecting-IP");

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
      }
    );

    if (!response.ok) {
      console.error("Falha ao contactar o serviço Turnstile.");
      return false;
    }

    const result = (await response.json()) as TurnstileVerification;

    if (!result.success) {
      console.warn(
        "Validação Turnstile rejeitada:",
        result["error-codes"] ?? []
      );
    }

    return result.success;
  } catch (error) {
    console.error("Erro na validação Turnstile:", error);
    return false;
  }
}

function buildConfirmationEmailHtml({
  contactName,
  studentProfile,
  studentAge,
  interest,
  availability,
  message,
}: {
  contactName: string;
  studentProfile: string;
  studentAge: number;
  interest: string;
  availability: string;
  message: string;
}) {
  const safeContactName = escapeHtml(contactName);
  return `
    <div style="margin:0;padding:0;background:#fbf8f1;">
      <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
        <div style="
          background:#fffdf9;
          border:1px solid #e7e0d5;
          border-radius:20px;
          padding:32px 28px;
          font-family:Arial,Helvetica,sans-serif;
          color:#092653;
        ">

          <p style="
            margin:0 0 16px;
            font-size:12px;
            line-height:1.4;
            font-weight:700;
            letter-spacing:.12em;
            text-transform:uppercase;
            color:#0878e8;
          ">
            Pedido de aula experimental
          </p>

          <h1 style="
            margin:0 0 18px;
            font-family:Georgia,'Times New Roman',serif;
            font-size:38px;
            line-height:1.05;
            color:#092653;
          ">
            Pedido recebido!
          </h1>

          <p style="
            margin:0 0 16px;
            font-size:16px;
            line-height:1.7;
            color:#5c6572;
          ">
            Olá ${safeContactName},
          </p>

          <p style="
            margin:0 0 24px;
            font-size:16px;
            line-height:1.7;
            color:#5c6572;
          ">
            Obrigado pelo interesse na Escola de Música dos Antigos Orfeonistas.
            Recebemos o teu pedido e entraremos em contacto em breve para combinar
            uma aula experimental gratuita.
          </p>

        <div style="
  margin-top:18px;
  background:#092653;
  border-radius:18px;
  padding:14px 18px;
  font-family:Arial,Helvetica,sans-serif;
">

  <table
  role="presentation"
  align="center"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="margin:0 auto;"
>
  <tr>
    <td style="vertical-align:middle;padding-right:22px;">
  <a
    href="https://emao.pt"
    style="display:block;text-decoration:none;"
  >
    <img
      src="https://assets.emao.pt/portfolio-logo.svg"
      alt="Visitar o website da Escola de Música dos Antigos Orfeonistas"
      width="135"
      style="display:block;width:135px;max-width:100%;height:auto;border:0;"
    />
  </a>
</td>

    <td style="vertical-align:middle;padding-right:10px;">
      <a
        href="https://www.instagram.com/escolademusica.antigoscoimbra/"
        style="display:block;text-decoration:none;"
      >
        <img
          src="https://assets.emao.pt/email-instagram-white.png"
          alt="Instagram"
          width="22"
          height="22"
          style="display:block;border:0;width:22px;height:22px;"
        />
      </a>
    </td>

    <td style="vertical-align:middle;padding-right:10px;">
      <a
        href="https://www.facebook.com/escolamusicaantigosorfeonistas"
        style="display:block;text-decoration:none;"
      >
        <img
          src="https://assets.emao.pt/email-facebook-white.png"
          alt="Facebook"
          width="22"
          height="22"
          style="display:block;border:0;width:22px;height:22px;"
        />
      </a>
    </td>

    <td style="vertical-align:middle;">
      <a
        href="https://wa.me/351936440482"
        style="display:block;text-decoration:none;"
      >
        <img
          src="https://assets.emao.pt/email-whatsapp-white.png"
          alt="WhatsApp"
          width="22"
          height="22"
          style="display:block;border:0;width:22px;height:22px;"
        />
      </a>
    </td>
  </tr>
</table>

</div>

        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

if (formData.get("website")) {
  return NextResponse.json({ ok: true });
}

const rateLimit = await checkSubmissionRateLimit(request);

if (!rateLimit.success) {
  return NextResponse.json(
    {
      error:
        "Foram efetuadas demasiadas tentativas. Aguarda um minuto e tente novamente.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": "60",
      },
    }
  );
}

    const turnstileToken = formData.get("cf-turnstile-response");

if (typeof turnstileToken !== "string" || !turnstileToken) {
  return NextResponse.json(
    { error: "Confirmação de segurança em falta." },
    { status: 400 }
  );
}

const isHuman = await verifyTurnstileToken(request, turnstileToken);

if (!isHuman) {
  return NextResponse.json(
    {
      error:
        "Não foi possível validar a confirmação de segurança. Atualiza a página e tenta novamente.",
    },
    { status: 400 }
  );
}

    const contactName = readField(formData, "contactName");
    const phone = readField(formData, "phone");
    const email = readField(formData, "email");
    const studentProfile = readField(formData, "studentProfile");
    const studentAge = readField(formData, "studentAge");
    const interest = readField(formData, "interest");
    const availability = readField(formData, "availability");
    const message = readField(formData, "message");
    

    if (
  !contactName ||
  !phone ||
  !email ||
  !studentProfile ||
  !studentAge ||
  !interest
) {
  return NextResponse.json(
    { error: "Campos obrigatórios em falta." },
    { status: 400 }
  );
}

if (!VALID_STUDENT_PROFILES.has(studentProfile)) {
  return NextResponse.json(
    { error: "Perfil do aluno inválido." },
    { status: 400 }
  );
}

if (!VALID_INTERESTS.has(interest)) {
  return NextResponse.json(
    { error: "Área de interesse inválida." },
    { status: 400 }
  );
}

if (contactName.length < 2) {
  return NextResponse.json(
    { error: "Nome inválido." },
    { status: 400 }
  );
}

if (!isValidPortuguesePhone(phone)) {
  return NextResponse.json(
    { error: "Número de telefone inválido." },
    { status: 400 }
  );
}

if (!isValidEmail(email)) {
  return NextResponse.json(
    { error: "Endereço de email inválido." },
    { status: 400 }
  );
}

    const parsedAge = Number(studentAge);

if (!Number.isInteger(parsedAge) || parsedAge < 5 || parsedAge > 80) {
  return NextResponse.json(
    { error: "Idade inválida." },
    { status: 400 }
  );
}

    const db = await getDb();
    await db.insert(trialLessonRequests).values({
      contactName,
      phone,
      email,
      studentProfile,
      studentAge: parsedAge,
      interest,
      availability: availability || null,
      message: message || null,
    });

    const resendApiKey = process.env.RESEND_API_KEY;

if (resendApiKey) {
  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
  from: process.env.FROM_EMAIL ?? "EMAO <noreply@example.com>",
  to: email,
  subject: "Recebemos o teu pedido de aula experimental",
  html: buildConfirmationEmailHtml({
    contactName,
    studentProfile,
    studentAge: parsedAge,
    interest,
    availability,
    message,
  }),
});

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "EMAO <noreply@example.com>",
      to: process.env.NOTIFICATION_EMAIL ?? "operations@example.com",
      subject: `Novo pedido de aula experimental — ${interest}`,
      html: `
  <p><strong>Nome:</strong> ${escapeHtml(contactName)}</p>
  <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p><strong>Perfil:</strong> ${escapeHtml(studentProfile)}</p>
  <p><strong>Idade:</strong> ${escapeHtml(parsedAge)}</p>
  <p><strong>Área de interesse:</strong> ${escapeHtml(interest)}</p>
  <p><strong>Disponibilidade:</strong> ${escapeHtml(
    availability || "Não indicada"
  )}</p>
  <p><strong>Mensagem:</strong> ${escapeHtml(
    message || "Sem mensagem adicional"
  )}</p>
`,
    });
  } catch (error) {
    console.error(
      "Pedido guardado, mas houve erro no envio de email:",
      error
    );
  }
} else {
  console.warn(
    "RESEND_API_KEY não configurada. Pedido guardado sem envio de email."
  );
}
 
    return NextResponse.json({ ok: true }, { status: 201 });
} catch (error) {
  console.error("Erro ao processar pedido de aula experimental:", error);

  return NextResponse.json(
    { error: "Não foi possível guardar o pedido." },
    { status: 500 }
  );
}
}
