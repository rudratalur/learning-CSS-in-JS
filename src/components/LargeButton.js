import styled, { css } from "styled-components";
import { Button } from "./Button";

export const LargeButton = styled(Button)`
  background: #28a745;
  color: white;

  ${(props) =>
    props.theme.fontLg &&
    css`
      font-size: ${props.theme.fontLg};
    `}
`;
