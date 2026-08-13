import type { ReactNode } from "react";
import styled from "styled-components";

const RED = "#ef1b14";
const BLACK = "#080808";

type TextButtonProps = {
  href: string;
  children: ReactNode;
};

export function TextButton({ href, children }: TextButtonProps) {
  return <Button href={href}>{children}</Button>;
}

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  background: ${RED};
  color: #fff;
  border: 2px solid ${BLACK};
  border-radius: 999px;
  padding: 13px 22px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.08em;
  box-shadow: 4px 5px 0 ${BLACK};
  transition: 0.2s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 8px 0 ${BLACK};
  }

  span {
    font-size: 16px;
  }
`;
