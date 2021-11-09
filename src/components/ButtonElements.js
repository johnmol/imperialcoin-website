import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "none" : "transparent")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "hsl(204 100% 54%)" : "hsl(204 100% 54%)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: hsl(204 100% 54%) 4px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.25em hsl(204 100% 54%);
  box-shadow: inset 0 0 0.5em 0 hsl(204 100% 54%), 0 0 0.5em 0 hsl(204 100% 54%);

  &:hover,
  &:focus {
    transition: all 0.2s ease-in-out;
    color: hsl(204 100% 16%);
    background: ${({ primary }) =>
      primary ? "hsl(204 100% 54%)" : "hsl(204 100% 54%)"};
    text-shadow: none;
  }
`;
