import styled from "styled-components";

export function Band() {
  return (
    <BandBar>
      <span>01</span>
      <b>ONE FRAME</b>
      <span>STUDIO MOBILE</span>
      <span>CURITIBA / BR</span>
    </BandBar>
  );
}

export function Torn({ tone }: { tone: "paper" | "black" }) {
  return <TornEdge $tone={tone} />;
}

export function SiteFooter() {
  return (
    <Footer>
      <div>
        <b>
          ONE
          <br />
          FRAME
        </b>
        <span>
          Studio Mobile onde criamos vídeos
          <br />
          que geram presença real.
        </span>
      </div>

      <nav>
        <a href="#sobre">sobre</a>
        <a href="#servicos">serviços</a>
        <a href="#projetos">trabalhos</a>
        <a href="#contato">contato</a>
      </nav>

      <small>
        © {new Date().getFullYear()} ONE FRAME
        <br />
        Curitiba — Brasil
      </small>
    </Footer>
  );
}

const BandBar = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 5vw;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  span:nth-child(2) {
    color: var(--color-red);
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const TornEdge = styled.div<{ $tone: "paper" | "black" }>`
  height: 62px;
  background: ${(props) =>
    props.$tone === "paper"
      ? "var(--color-paper)"
      : "var(--color-black)"};
  position: relative;
  z-index: 8;
  margin-top: -1px;
  margin-bottom: -1px;
  clip-path: polygon(
    0 18%,
    2% 55%,
    4% 24%,
    6% 66%,
    8% 31%,
    10% 58%,
    12% 20%,
    14% 62%,
    16% 28%,
    18% 69%,
    20% 24%,
    22% 58%,
    24% 18%,
    26% 65%,
    28% 29%,
    30% 62%,
    32% 20%,
    34% 56%,
    36% 29%,
    38% 68%,
    40% 22%,
    42% 59%,
    44% 18%,
    46% 65%,
    48% 27%,
    50% 57%,
    52% 20%,
    54% 66%,
    56% 26%,
    58% 60%,
    60% 18%,
    62% 63%,
    64% 26%,
    66% 58%,
    68% 20%,
    70% 66%,
    72% 25%,
    74% 58%,
    76% 18%,
    78% 64%,
    80% 25%,
    82% 58%,
    84% 18%,
    86% 64%,
    88% 24%,
    90% 58%,
    92% 18%,
    94% 63%,
    96% 25%,
    98% 57%,
    100% 18%,
    100% 100%,
    0 100%
  );
`;

const Footer = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: 55px 5vw 25px;
  display: grid;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 40px;

  b {
    font: 38px/0.7 var(--font-display);
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
    line-height: 1.3;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
  }

  nav a {
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: var(--color-red);
  }

  nav a:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }

  small {
    font-size: 9px;
    line-height: 1.5;
    text-align: right;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    small {
      text-align: left;
    }
  }
`;
