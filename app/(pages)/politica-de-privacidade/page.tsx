import type { Metadata } from "next";
import "./politica-de-privacidade.css";

export const metadata: Metadata = {
  title: "Política de Privacidade | EMAO",
  description:
    "Informação sobre o tratamento de dados pessoais no website da Escola de Música dos Antigos Orfeonistas.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <div className="privacy-container">
          <p className="eyebrow">Privacidade e dados pessoais</p>

          <h1>Política de Privacidade</h1>

          <p className="privacy-lead">
            Informação sobre a forma como são tratados os dados pessoais
            enviados através do website da Escola de Música dos Antigos
            Orfeonistas.
          </p>
        </div>
      </header>

      <section className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-intro">
            <p>
              A Escola de Música dos Antigos Orfeonistas (EMAO) respeita a
              privacidade dos seus utilizadores e compromete-se a tratar os
              dados pessoais de forma responsável, transparente e segura.
            </p>
          </div>

          <article className="privacy-section">
            
            <div>
              <h2>Responsável pelo tratamento</h2>

              <p>
                A Escola de Música dos Antigos Orfeonistas desenvolve a sua
                atividade no âmbito do Coro dos Antigos Orfeonistas da
                Universidade de Coimbra, entidade responsável pelo tratamento
                dos dados pessoais recolhidos através deste website.
              </p>

              <div className="privacy-contact-card">
                <strong>
                  Coro dos Antigos Orfeonistas da Universidade de Coimbra
                </strong>

                <dl>
                  <div>
                    <dt>NIF</dt>
                    <dd>501324208</dd>
                  </div>

                  <div>
                    <dt>Morada</dt>
                    <dd>Rua Bernardim Ribeiro, 36, Coimbra, Portugal</dd>
                  </div>

                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href="mailto:antorf@ci.uc.pt">
                        antorf@ci.uc.pt
                      </a>
                    </dd>
                  </div>

                </dl>
              </div>

              <p>
                A gestão operacional dos pedidos de aula experimental é
                assegurada no âmbito da EMAO, exclusivamente para as finalidades
                descritas nesta política.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            

            <div>
              <h2>Dados recolhidos</h2>

              <p>
                Através do formulário de pedido de aula experimental podem ser
                recolhidos:
              </p>

              <ul>
                <li>nome da pessoa a contactar;</li>
                <li>número de telefone e endereço de email;</li>
                <li>perfil e idade do aluno;</li>
                <li>instrumento ou área de interesse;</li>
                <li>disponibilidade preferencial;</li>
                <li>
                  informação adicional facultada voluntariamente no campo de
                  mensagem.
                </li>
              </ul>
            </div>
          </article>

          <article className="privacy-section">

            <div>
              <h2>Para que utilizamos os dados</h2>

              <p>
                Os dados são utilizados exclusivamente para receber, analisar e
                responder ao pedido de aula experimental, incluindo o contacto
                necessário para combinar professor, horário ou outros aspetos
                relacionados com o pedido.
              </p>

              <p>
                O tratamento é efetuado para dar resposta a uma solicitação
                realizada pelo próprio utilizador.
              </p>

              <p>
                Estes dados não são utilizados para envio de publicidade ou
                comunicações de marketing sem fundamento adequado para esse
                efeito.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            

            <div>
              <h2>Quem pode aceder aos dados</h2>

              <p>
                O acesso aos dados recolhidos através do formulário é limitado
                às pessoas que necessitem dessa informação para gerir e
                responder aos pedidos de aula experimental no âmbito da EMAO.
              </p>

              <p>
                Os dados podem também ser processados através dos prestadores
                tecnológicos necessários ao funcionamento do website,
                armazenamento dos pedidos e envio das respetivas comunicações
                por email.
              </p>

              <p>
                Estes prestadores tratam os dados apenas na medida necessária à
                prestação dos respetivos serviços. Os dados não são vendidos
                nem disponibilizados a terceiros para fins comerciais.
              </p>
            </div>
          </article>

          <article className="privacy-section">
            

            <div>
              <h2>Durante quanto tempo conservamos os dados</h2>

              <p>
                Os dados associados a pedidos de aula experimental são
                conservados apenas durante o período necessário à gestão e
                acompanhamento do pedido, até ao máximo de 12 meses após a sua
                submissão.
              </p>

              <p>
                Caso se estabeleça posteriormente uma relação com a EMAO,
                determinados dados poderão ser conservados por outro fundamento
                aplicável a essa relação.
              </p>
            </div>
          </article>

          <article className="privacy-section">

            <div>
              <h2>Direitos sobre os dados pessoais</h2>

              <p>
                Nos termos da legislação aplicável, é possível solicitar, consoante o
                caso:
              </p>

              <ul>
                <li>acesso a dados pessoais;</li>
                <li>correção de dados inexatos ou incompletos;</li>
                <li>apagamento de dados pessoais;</li>
                <li>limitação ou oposição ao tratamento;</li>
                <li>portabilidade dos dados, quando aplicável.</li>
              </ul>

              <p>
                Para exercer estes direitos ou esclarecer qualquer questão
                relacionada com dados pessoais, o contacto pode ser feito através de{" "}
                <a href="mailto:egvfcoimbra@gmail.com">
                  egvfcoimbra@gmail.com
                </a>
                .
              </p>

              <p>
                Também é possível apresentar uma reclamação junto da Comissão Nacional
                de Proteção de Dados (CNPD).
              </p>
            </div>
          </article>

          <article className="privacy-section">

            <div>
              <h2>Alterações a esta política</h2>

              <p>
                Esta Política de Privacidade pode ser atualizada sempre que
                necessário, nomeadamente em resultado de alterações ao
                funcionamento do website ou à forma como são tratados os dados
                pessoais.
              </p>
            </div>
          </article>

          <footer className="privacy-updated">
            Última atualização: agosto de 2026
          </footer>
        </div>
      </section>
    </main>
  );
}