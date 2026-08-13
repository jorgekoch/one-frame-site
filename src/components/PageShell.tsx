import type { ReactNode } from "react";
import styled from "styled-components";

const PAPER = "#f7f5ef";
const BLACK = "#080808";

export function PageShell({ children }: { children: ReactNode }) {
  return <Page id="top">{children}</Page>;
}

const Page = styled.div`
  background: ${PAPER};
  color: ${BLACK};
  overflow-x: hidden;
  overflow-y: visible;

  main > section {
    scroll-margin-top: 110px;
  }
`;
