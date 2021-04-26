import styles, { css } from "styled-components";

export const Button = styles.button`
background: transparent;
padding: 0.5rem 0;
color: black;
border: 2px solid black;
width: 11rem;
font-size: 16px;
display:grid;
flex-direction:row;
border-radius: 3px;
margin-bottom:10px;
align-items:center;

${(props) =>
  props.primary &&
  css`
    background: palevioletred;
  `}

${(props) =>
  props.theme.fontSm &&
  css`
    font-size: ${props.theme.fontSm};
  `}
`;
