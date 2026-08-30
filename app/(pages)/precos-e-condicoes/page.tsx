import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import "./precos-e-condicoes.css";

export const metadata: Metadata = {
  title: "Preços e Condições | EMAO",
  description:
    "Conheça os preços, modalidades de frequência e condições da Escola de Música dos Antigos Orfeonistas para o ano letivo 2026/2027.",
};

const Arrow = () => <span aria-hidden="true">→</span>;

export default function PricesAndConditionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Preços e Condições"
        title="Escolher como aprender deve ser simples"
        description="Conhece as modalidades de frequência da EMAO e encontra a opção que melhor se adapta ao teu ritmo e aos teus objetivos."
        imageUrl="/portfolio-placeholder.svg"
      />

      <section className="prices-regular">
        <div className="content-shell">
          <div className="prices-section-heading">
            <p className="eyebrow">Ensino regular</p>

            <h2>Três formas de frequentar a escola</h2>

            <p>
              Escolhe entre um percurso mais completo ou uma aprendizagem
              centrada exclusivamente no instrumento.
            </p>
          </div>

          <div className="prices-regular-grid">
            
            <article className="price-card price-card-featured">
              <div>
                <p className="price-card-label">Só instrumento</p>
                <h3>
                  65€<span>/mês</span>
                </h3>
              </div>

              <p>Aula individual centrada nos objetivos de cada aluno.</p>

              <strong>1 vez por semana</strong>
            </article>

            <article className="price-card price-card-middle">
              <div>
                <p className="price-card-label">Meio curso</p>
                <h3>
                  85€<span>/mês</span>
                </h3>
              </div>

              <p>
                Instrumento + Formação Musical ou Banda/Classe de Conjunto
              </p>

              <strong>2 vezes por semana</strong>

               <span className="price-card-access-note">
  <strong>Preparação especializada</strong>
  Ideal para acesso ao conservatório, ensino profissional ou superior
</span>
            </article>

            
            <article className="price-card">
              <div>
                <p className="price-card-label">Curso completo</p>
                <h3>
                  100€<span>/mês</span>
                </h3>
              </div>

              <p>
                Instrumento + Formação Musical + Banda/Classe de Conjunto
              </p>

              <strong>3 vezes por semana</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="prices-flexible">
        <div className="content-shell prices-flexible-grid">
          <div className="prices-packs">
            <p className="eyebrow">Maior flexibilidade</p>

            <h2>Packs de aulas</h2>

            <p className="prices-packs-intro">
              Para quem prefere aprender sem um horário semanal fixo, os packs
              permitem escolher um número definido de aulas.
            </p>

            <div className="prices-pack-list">
              <article>
                <span>1 aula</span>
                <strong>40€</strong>
              </article>

              <article>
                <span>4 aulas</span>
                <strong>130€</strong>
              </article>

              <article className="prices-pack-featured">
                <div>
                  <span>8 aulas</span>
                  <small>Opção mais vantajosa</small>
                </div>

                <strong>175€</strong>
              </article>
            </div>
          </div>

          <div className="prices-enrolment">
            <p className="eyebrow">Inscrição</p>

            <h2>Começar ou continuar</h2>

            <div className="prices-enrolment-list">
              <article>
                <span>Primeira inscrição</span>
                <strong>40€</strong>
              </article>

              <article>
                <span>Renovação</span>
                <strong>30€</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="prices-conditions">
        <div className="content-shell prices-conditions-grid">
          <div>
            <p className="eyebrow">Condições de frequência</p>
            <h2>Algumas informações importantes</h2>
          </div>

        <div className="prices-conditions-list">
  <p>
    Todas as aulas têm a duração de 45 minutos.
  </p>

  <p>
    Horários definidos em articulação com aluno e professor.
  </p>

  <p>
  Condições especiais disponíveis para Antigos Orfeonistas, familiares e entidades parceiras.{" "}
  <Link className="prices-regulation-inline" href="#contactos">
    <strong>Contacta-nos para saber mais</strong>
  </Link>
  .
</p>

  <p>
    Possibilidade de consultar o{" "}
    <Link
      className="prices-regulation-inline"
      href="https://emao.pt/regulamento-interno-2026-2027.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>Regulamento Interno</strong>
    </Link>{" "}
    para conhecer as restantes condições.
  </p>
</div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="content-shell page-final-cta-content">
          <div>
            <p className="eyebrow">Começar a aprender</p>

            <h2>Ainda tens dúvidas sobre a modalidade mais indicada?</h2>

            <p>
              Experimenta uma primeira aula gratuitamente e fala connosco sobre
              o percurso que melhor se adapta a ti.
            </p>
          </div>

          <Link className="button primary" href="/#aula-experimental">
            Pedir aula experimental gratuita <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}