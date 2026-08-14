import styled from "styled-components";

export const TextButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  padding: 13px 20px;
  background: var(--color-red);
  color: var(--color-white);
  border: 2px solid var(--color-black);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 4px 5px 0 var(--color-black);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 8px 0 var(--color-black);
  }

  &:focus-visible {
    outline: 3px solid var(--color-black);
    outline-offset: 5px;
  }
`;
