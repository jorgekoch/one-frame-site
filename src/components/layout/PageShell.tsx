import styled from "styled-components";

export function PageShell({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}

const Shell = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;
