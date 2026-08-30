import Link from "next/link";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle className="social-dot" cx="17.4" cy="6.7" r="1" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.4 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H8.2v3H11v8h3.4Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.5a8.3 8.3 0 0 0-7.1 12.6L4 20.5l4.5-1.2A8.3 8.3 0 1 0 12 3.5Zm0 1.8a6.5 6.5 0 1 1-3.3 12.1l-.4-.2-2 .5.5-1.9-.2-.4A6.5 6.5 0 0 1 12 5.3Zm-3 3.2c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.6 4 3.5 2 .8 2.4.7 2.8.7.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .2-1.1-.1-.1-.2-.2-.5-.3l-1.5-.7c-.2-.1-.4-.1-.6.2l-.7.9c-.1.2-.3.2-.5.1a5.4 5.4 0 0 1-1.6-1 6.2 6.2 0 0 1-1.1-1.4c-.1-.2 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4Z" />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contactos">
      <div className="footer-main">
        <div className="footer-intro">
          <img
            src="/portfolio-logo.svg"
            alt="Escola de Música dos Antigos Orfeonistas"
            width={350}
            height={180}
            loading="lazy"
          />

          <p>
            Um espaço próximo e acolhedor para descobrir, aprender e viver a
            música.
          </p>

          <div className="social-links" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/escolademusica.antigoscoimbra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da EMAO (abre num novo separador)"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.facebook.com/escolamusicaantigosorfeonistas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da EMAO (abre num novo separador)"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://wa.me/351936440482"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da EMAO (abre num novo separador)"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Contactos</h2>

          <address>
            <a href="tel:+351936440482">93 644 04 82</a>

            <a href="mailto:geral@emao.pt">
              geral@emao.pt
            </a>

            <span>
              Rua Bernardim Ribeiro, 36
              <br />
              Coimbra, Portugal
            </span>

            <div className="footer-directions">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Bernardim+Ribeiro%2C+36%2C+Coimbra%2C+Portugal"
    target="_blank"
    rel="noopener noreferrer"
  >
    Google Maps ↗
  </a>

  <a
    href="https://waze.com/ul?q=Rua%20Bernardim%20Ribeiro%2C%2036%2C%20Coimbra%2C%20Portugal&navigate=yes"
    target="_blank"
    rel="noopener noreferrer"
  >
     Waze ↗
  </a>
</div>
          </address>
        </div>

        <div className="footer-column">
          <h2>Explorar</h2>

          <nav aria-label="Navegação do rodapé">
            <Link href="/a-escola">A Escola</Link>
            <Link href="/oferta-educativa">Oferta Educativa</Link>
            <Link href="/precos-e-condicoes">Preços e Condições</Link>
            <Link href="/#aula-experimental">Aula experimental</Link>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Escola de Música dos Antigos Orfeonistas</p>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
      </div>
    </footer>
  );
}