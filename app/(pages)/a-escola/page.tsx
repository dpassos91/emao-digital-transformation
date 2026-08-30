import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import "./a-escola.css"

export const metadata: Metadata = {
  title: "A Escola | EMAO",
  description:
    "Conheçe a história, as raízes e a abordagem pedagógica da Escola de Música dos Antigos Orfeonistas, em Coimbra.",
};

const Arrow = () => <span aria-hidden="true">→</span>;


export default function SchoolPage() {
  return (
    <main>
      <PageHero
        eyebrow="Desde 2002"
        title="Uma escola com raízes na música de Coimbra"
        description="Da preservação do Fado de Coimbra a uma oferta educativa aberta a diferentes instrumentos, idades e objetivos"
        imageUrl="/portfolio-placeholder.svg"
      />

      <section className="school-story">
        <div className="content-shell school-story-grid">
          <div className="school-story-heading">
            <p className="eyebrow">A nossa história</p>
            <h2>Uma história que cresce sem perder as raízes</h2>

            <p className="school-story-intro">
              Uma escola nascida para preservar a música de Coimbra e que
              cresceu para acolher diferentes formas de aprender e viver a
              música
            </p>
          </div>

          <div className="school-story-copy">
            <p>
              A Escola de Música dos Antigos Orfeonistas nasceu em 2002, através
              de um protocolo entre a Câmara Municipal de Coimbra e o Coro dos
              Antigos Orfeonistas da Universidade de Coimbra.
            </p>

            <p>
              O objetivo era assegurar a continuidade da Escola Municipal de
              Fado de Coimbra, anteriormente instalada no Edifício Chiado. Com
              a designação inicial de{" "}
              <strong>
                Escola da Guitarra, da Viola e do Fado de Coimbra
              </strong>
              , o projeto dedicava-se ao ensino da Guitarra de Coimbra, da Viola
              de Acompanhamento e do Canto.
            </p>

            <p>
              Com o passar dos anos, a procura cresceu e a oferta educativa
              foi-se alargando. Às raízes ligadas ao Fado de Coimbra juntaram-se
              novas possibilidades de aprendizagem, como piano, bateria, baixo,
              formação musical, combo e outras disciplinas.
            </p>

            <p>
              Em 2015, procurando refletir de forma mais clara essa evolução, a
              escola passou a adotar a designação atual:{" "}
              <strong>Escola de Música dos Antigos Orfeonistas</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="school-approach">
        <div className="content-shell school-approach-grid">
          <div className="school-approach-heading">
            <p className="eyebrow">A escola hoje</p>
            <h2>Uma forma próxima de aprender música</h2>
          </div>

          <div className="school-approach-copy">
            <p>
              Ao longo da sua história, a EMAO acompanhou alunos com os
              mais diversos percursos: alguns que
              prosseguiram estudos em instituições de ensino artístico e
              musical, mas também muitas pessoas que encontraram na música uma
              forma de expressão, descoberta e realização pessoal.
            </p>

            <p>
              Hoje, mantemos vivas as nossas raízes enquanto procuramos oferecer um
              ensino próximo, personalizado e adaptado à idade, ao ritmo e aos
              objetivos de cada aluno.
            </p>

            <div className="school-values">
              <p>
                <span aria-hidden="true">✓</span>
                Acompanhamento personalizado
              </p>

              <p>
                <span aria-hidden="true">✓</span>
                Respeito pelo ritmo de cada aluno
              </p>

              <p>
                <span aria-hidden="true">✓</span>
                Objetivos artísticos ou pessoais
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