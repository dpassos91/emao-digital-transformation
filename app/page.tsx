import TrialLessonForm from "./TrialLessonForm";
import HeroImage from "./components/HeroImage";
import Link from "next/link";

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>

      <section className="hero" id="inicio">
        <div
  className="hero-image"
  role="img"
  aria-label="Aula de música num ambiente próximo e acolhedor"
>
  <HeroImage
    src="/portfolio-placeholder.svg"
    className="hero-home-media"
  />
</div>

        <div className="hero-card">
  <div className="hero-title">
    <h1>Aprender música começa com o primeiro passo</h1>
  </div>

  <div className="hero-support">
    <p className="hero-copy">
      Ensino personalizado para crianças, jovens e adultos, adaptado ao
      ritmo e aos objetivos de cada aluno.
    </p>

    <div className="hero-actions">
      <a className="button primary" href="#aula-experimental">
        Pedir aula experimental gratuita <Arrow />
      </a>

      <Link className="button secondary" href="/oferta-educativa">
        Conhecer a oferta educativa <Arrow />
      </Link>
    </div>
  </div>
</div>
        
      </section>

      

      <section className="paths" id="oferta">
        <div className="section-heading">
          <p className="eyebrow">Um percurso para cada pessoa</p>
          <h2>Onde começa a tua música?</h2>
        </div>

        <div className="path-grid">
          <a href="#aula-experimental" className="path-card">
            
            <h3>Crianças e jovens</h3>
            <p>
              Descobrir a música e desenvolver competências num ambiente
              próximo.
            </p>
          </a>

          <a href="#aula-experimental" className="path-card">
            <h3>Adultos</h3>
            <p>
              Começar ou retomar a aprendizagem, ao teu ritmo e sem pressões.
            </p>
          </a>

          <a href="#aula-experimental" className="path-card">
            <h3>Preparação especializada</h3>
            <p>
              Preparação para conservatório, ensino profissional ou superior.
            </p>
          </a>
        </div>
      </section>

      <section className="trial-section" id="aula-experimental">
        <div className="trial-intro">
          <p className="eyebrow">Primeira aula gratuita</p>
          <h2>Vamos dar o primeiro passo?</h2>

          <p>
            Conta-nos um pouco sobre quem quer aprender música. A nossa equipa
            entrará em contacto para encontrar o professor e o horário mais
            adequados.
          </p>

          <div className="trial-benefits">
            <p>
              <span aria-hidden="true">✓</span>
              Gratuita e sem compromisso
            </p>

            <p>
              <span aria-hidden="true">✓</span>
              Adaptada à idade e aos objetivos
            </p>

            <p>
              <span aria-hidden="true">✓</span>
              Contacto pessoal da nossa equipa
            </p>
          </div>
        </div>

        <div className="form-card">
          <TrialLessonForm />
        </div>
      </section>

      
    </main>
  );
}
