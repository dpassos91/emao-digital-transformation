"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import TurnstileWidget from "./components/TurnstileWidget";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  contactName?: string;
  phone?: string;
  email?: string;
  studentProfile?: string;
  studentAge?: string;
  interest?: string;
};

export default function TrialLessonForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (status !== "success") return;

  requestAnimationFrame(() => {
    successRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}, [status]);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

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

function validateForm(formData: FormData) {
  const errors: FieldErrors = {};

  const contactName = String(formData.get("contactName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const studentProfile = String(formData.get("studentProfile") || "");
  const studentAge = String(formData.get("studentAge") || "");
  const interest = String(formData.get("interest") || "");

  if (contactName.length < 2) {
    errors.contactName = "Indica o nome da pessoa que devemos contactar.";
  }

  if (!phone) {
    errors.phone = "Indica um número de telefone.";
  } else if (!isValidPortuguesePhone(phone)) {
    errors.phone =
      "Introduz um número português válido com 9 dígitos, com ou sem indicativo.";
  }

  if (!email) {
    errors.email = "Indica um endereço de email.";
  } else if (!isValidEmail(email)) {
    errors.email = "Introduz um endereço de email válido.";
  }

  if (!studentProfile) {
    errors.studentProfile = "Indica para quem se destina a aula.";
  }

  const parsedAge = Number(studentAge);

  if (
    !studentAge ||
    !Number.isInteger(parsedAge) ||
    parsedAge < 5 ||
    parsedAge > 80
  ) {
    errors.studentAge = "Introduz uma idade entre 5 e 80 anos.";
  }

  if (!interest) {
    errors.interest = "Seleciona um instrumento ou área de interesse.";
  }

  return errors;
}

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  setFieldErrors(errors);

  if (Object.keys(errors).length > 0) {
  const firstErrorField = Object.keys(errors)[0];

  requestAnimationFrame(() => {
    const field = form.elements.namedItem(firstErrorField);

    if (field instanceof HTMLElement) {
      field.focus();
      field.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  return;
}

  if (!turnstileToken) {
  setStatus("error");
  return;
}

formData.set("cf-turnstile-response", turnstileToken);

  setStatus("submitting");


  try {
    const response = await fetch("/api/aula-experimental", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("submission failed");
    }

    form.reset();
    setFieldErrors({});
    setTurnstileToken("");
    setStatus("success");
  } catch {
    setTurnstileToken("");
    setTurnstileKey((current) => current + 1);
    setStatus("error");
  }
}

if (status === "success") {
  return (
    <div ref={successRef} className="form-success" role="status">
      <span aria-hidden="true">✓</span>

      <h3>Pedido recebido!</h3>

      <p>
        Obrigado pelo interesse na EMAO. Enviámos uma confirmação para o email
        indicado e entraremos em contacto para combinar a aula experimental.
      </p>

      <button type="button" onClick={() => setStatus("idle")}>
        Fazer outro pedido
      </button>
    </div>
  );
}

  return (
    <form className="trial-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="field field-full">
  <span>Nome de quem devemos contactar *</span>

  <input
    name="contactName"
    type="text"
    autoComplete="name"
    required
    minLength={2}
    maxLength={100}
    placeholder="O teu nome"
    aria-invalid={Boolean(fieldErrors.contactName)}
    aria-describedby={
      fieldErrors.contactName ? "contactName-error" : undefined
    }
  />

  {fieldErrors.contactName && (
    <span className="field-error" id="contactName-error">
      {fieldErrors.contactName}
    </span>
  )}
</label>
<label className="field">
  <span>Telefone *</span>

  <input
    name="phone"
    type="tel"
    autoComplete="tel"
    required
    maxLength={30}
    placeholder="Ex.: 912 345 678"
    aria-invalid={Boolean(fieldErrors.phone)}
    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
  />

  {fieldErrors.phone && (
    <span className="field-error" id="phone-error">
      {fieldErrors.phone}
    </span>
  )}
</label>
<label className="field">
  <span>Email *</span>

  <input
    name="email"
    type="email"
    autoComplete="email"
    required
    maxLength={120}
    placeholder="nome@email.pt"
    aria-invalid={Boolean(fieldErrors.email)}
    aria-describedby={fieldErrors.email ? "email-error" : undefined}
  />

  {fieldErrors.email && (
    <span className="field-error" id="email-error">
      {fieldErrors.email}
    </span>
  )}
</label>
<label className="field">
  <span>A aula é para… *</span>

  <select
    name="studentProfile"
    required
    defaultValue=""
    aria-invalid={Boolean(fieldErrors.studentProfile)}
    aria-describedby={
      fieldErrors.studentProfile ? "studentProfile-error" : undefined
    }
  >
    <option value="" disabled>
      Selecionar
    </option>
    <option value="crianca-jovem">Uma criança ou jovem</option>
    <option value="adulto">Um adulto</option>
    <option value="preparacao">Preparação especializada</option>
  </select>

  {fieldErrors.studentProfile && (
    <span className="field-error" id="studentProfile-error">
      {fieldErrors.studentProfile}
    </span>
  )}
</label>
<label className="field">
  <span>Idade *</span>

  <input
    name="studentAge"
    required
    type="number"
    min="5"
    max="80"
    inputMode="numeric"
    placeholder="Ex.: 10"
    aria-invalid={Boolean(fieldErrors.studentAge)}
    aria-describedby={
      fieldErrors.studentAge ? "studentAge-error" : undefined
    }
  />

  {fieldErrors.studentAge && (
    <span className="field-error" id="studentAge-error">
      {fieldErrors.studentAge}
    </span>
  )}
</label>
<label className="field field-full">
  <span>Instrumento ou área de interesse *</span>

  <select
    name="interest"
    required
    defaultValue=""
    aria-invalid={Boolean(fieldErrors.interest)}
    aria-describedby={fieldErrors.interest ? "interest-error" : undefined}
  >
    <option value="" disabled>
      Selecionar
    </option>

    <optgroup label="Instrumentos">
      <option value="baixo">Baixo</option>
      <option value="bateria">Bateria</option>
      <option value="canto">Canto</option>
      <option value="formacao-musical">Formação Musical</option>
      <option value="guitarra-classica">Guitarra Clássica</option>
      <option value="guitarra-eletrica">Guitarra Elétrica</option>
      <option value="piano">Piano</option>
    </optgroup>

    <optgroup label="Fado e Canção de Coimbra">
      <option value="guitarra-portuguesa">Guitarra Portuguesa</option>
      <option value="viola-acompanhamento">Viola de Acompanhamento</option>
      <option value="voz-coimbra">Voz de Coimbra</option>
    </optgroup>

    <optgroup label="Apoio na escolha">
      <option value="aconselhamento">
        Ainda não sei / gostaria de aconselhamento
      </option>
    </optgroup>
  </select>

  {fieldErrors.interest && (
    <span className="field-error" id="interest-error">
      {fieldErrors.interest}
    </span>
  )}
</label>
        <label className="field field-full"><span>Disponibilidade preferencial</span><input name="availability" type="text" maxLength={160} placeholder="Ex.: dias úteis depois das 17h" /></label>
        <label className="field field-full"><span>Há mais alguma coisa que devamos saber?</span><textarea name="message" rows={4} maxLength={1000} placeholder="Experiência anterior, objetivos ou dúvidas (opcional)" /></label>
        <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="privacy-note">Os teus dados serão utilizados apenas para gerir este pedido de aula experimental. Consulta a <Link className="privacy-note-link" href="/politica-de-privacidade">Política de Privacidade</Link>.</p>
      <div className="turnstile-wrapper">
  <TurnstileWidget
    key={turnstileKey}
    siteKey="0x4AAAAAAEdmdPPlWf0rIb6w"
    onVerify={setTurnstileToken}
  />
</div>
      {status === "error" && <p className="form-error" role="alert">Não foi possível enviar o pedido. Por favor, tenta novamente.</p>}
      <button className="form-submit" type="submit" disabled={status === "submitting" || !turnstileToken}>
        {status === "submitting" ? "A enviar…" : "Pedir aula experimental gratuita"}
        {status !== "submitting" && <span aria-hidden="true">→</span>}
      </button>
      <p className="form-note">Sem compromisso. Entraremos em contacto para combinar o melhor horário.</p>
    </form>
  );
}

