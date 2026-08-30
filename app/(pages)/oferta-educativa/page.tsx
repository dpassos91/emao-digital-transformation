import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import "./oferta-educativa.css";

export const metadata: Metadata = {
  title: "Oferta Educativa | EMAO",
  description:
    "Conheça a oferta educativa da Escola de Música dos Antigos Orfeonistas: instrumentos, canto, Formação Musical, música em conjunto e preparação especializada.",
};

const Arrow = () => <span aria-hidden="true">→</span>;

export default function EducationalOfferPage() {
  return (
    <main>
      <PageHero
        eyebrow="Oferta Educativa"
        title="Uma forma de aprender música para cada percurso"
        description="Crianças, jovens e adultos encontram na EMAO um ensino próximo e adaptado à experiência, ao ritmo e aos objetivos de cada aluno"
        imageUrl="/portfolio-placeholder.svg"
      />

      <section className="offer-learning">
        <div className="content-shell offer-learning-layout">
          <div className="offer-learning-heading">
            <p className="eyebrow">O que podes aprender</p>

            <h2>Mais do que escolher uma disciplina</h2>

            <p>
              A experiência musical pode passar pela aprendizagem individual,
              pela formação, pela prática em conjunto ou pelas raízes musicais
              de Coimbra
            </p>
          </div>

          <div className="offer-learning-grid">
            <article className="offer-learning-card">
              <p className="offer-learning-label">Instrumentos</p>

              <h3>Encontrar a tua própria voz</h3>

<p className="offer-learning-items">
  <span>Baixo</span>
  <span>Bateria</span>

  <span>Canto</span>
  <span>Guitarra Clássica</span>

  <span>Guitarra Elétrica</span>
  <span>Piano</span>
</p>
            </article>

            <article className="offer-learning-card">
              <p className="offer-learning-label">Fado e Canção de Coimbra</p>

              <h3>Aprender uma tradição viva</h3>

<p className="offer-learning-items offer-learning-items-coimbra">
  <span>Guitarra Portuguesa</span>
  <span>Viola de Acompanhamento</span>
  <span>Voz de Coimbra</span>
</p>
            </article>

            <article className="offer-learning-card">
              <p className="offer-learning-label">Formação Musical</p>

              <h3>Compreender melhor a música</h3>

              <p>
                Desenvolver leitura, compreensão e conhecimentos musicais que
                complementam a aprendizagem do instrumento.
              </p>
            </article>

            <article className="offer-learning-card offer-learning-card-dark">
              <p className="offer-learning-label">Música em conjunto</p>

              <h3>Aprender também com os outros</h3>

              <p>
                A Banda/Classe de Conjunto permite desenvolver competências musicais
                através da experiência de tocar em grupo.
              </p>
            </article>

            <article className="offer-learning-card offer-learning-card-wide">
              <p className="offer-learning-label">Atividades de grupo</p>

              <h3>Outras formas de viver a música</h3>

              <p>
                Ao longo do ano, a escola promove sessões e atividades de grupo,
                como Expressão Musical, através de iniciativas com inscrição
                própria.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="offer-modalities">
        <div className="content-shell">
          <div className="offer-section-heading">
            <p className="eyebrow">Modalidades de frequência</p>

            <h2>Escolhe a opção que melhor se adapta a ti</h2>

            <p>
              Podes combinar diferentes componentes da aprendizagem ou
              concentrar-te apenas no instrumento.
            </p>
          </div>

          <div className="offer-modalities-list">
            <article>
              <div>
                <h3>Só instrumento</h3>
                <p>Aula individual centrada nos objetivos de cada aluno</p>
              </div>

              <strong>1 vez por semana</strong>
            </article>


            <article>
              <div>
                <h3>Meio curso</h3>
                <p>
                  Instrumento + Formação Musical ou Banda/Classe de Conjunto
                </p>
              </div>

              <strong>2 vezes por semana</strong>
            </article>

                        <article>
              <div>
                <h3>Curso completo</h3>
                <p>Instrumento + Formação Musical + Banda/Classe de Conjunto</p>
              </div>

              <strong>3 vezes por semana</strong>
            </article>

            <article>
              <div>
                <h3>Packs de aulas</h3>
                <p>
                  Uma opção flexível para quem prefere um número definido de
                  aulas.
                </p>
              </div>

              <Link href="/precos-e-condicoes">
                Ver preços e condições <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="offer-preparation">
        <div className="content-shell offer-preparation-grid">
          <div>
            <p className="eyebrow">Preparação especializada</p>

            <h2>Preparar o próximo passo</h2>
          </div>

          <div className="offer-preparation-copy">
            <p>
              Acompanhamos alunos que pretendem prosseguir estudos musicais,
              adaptando o trabalho às exigências do percurso que pretendem
              seguir.
            </p>

            <div className="offer-preparation-list">
              <p>
                <span aria-hidden="true">✓</span>
                Conservatório
              </p>

              <p>
                <span aria-hidden="true">✓</span>
                Ensino profissional
              </p>

              <p>
                <span aria-hidden="true">✓</span>
                Ensino superior
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="content-shell page-final-cta-content">
          <div>
            <p className="eyebrow">Começar a aprender</p>

            <h2>Não sabes qual é a opção mais indicada?</h2>

            <p>
              Experimenta uma primeira aula gratuitamente e fala connosco sobre
              os teus interesses e objetivos.
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