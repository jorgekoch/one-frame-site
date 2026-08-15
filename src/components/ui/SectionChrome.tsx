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

export function Torn() {
  return <TornEdge aria-hidden="true" />;
}

const BandBar = styled.div`
  background: var(--color-red);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 5vw;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  b {
    color: var(--color-black);
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const TornEdge = styled.div`
  position: relative;
  z-index: 8;
  height: 40px;
  margin: -1px 0;
  background: #b8b8b8;
  clip-path: polygon(
    0 12%,
    4% 8%,
    8% 13%,
    13% 7%,
    18% 11%,
    23% 6%,
    29% 12%,
    35% 8%,
    41% 13%,
    47% 7%,
    53% 12%,
    59% 8%,
    65% 13%,
    71% 7%,
    77% 11%,
    83% 6%,
    89% 12%,
    94% 8%,
    100% 12%,
    100% 88%,
    95% 93%,
    90% 87%,
    84% 94%,
    78% 88%,
    72% 93%,
    66% 87%,
    60% 94%,
    54% 88%,
    48% 93%,
    42% 87%,
    36% 94%,
    30% 88%,
    24% 93%,
    18% 87%,
    12% 94%,
    6% 88%,
    0 92%
  );

  @media (max-width: 600px) {
    height: 28px;
  }
`;
