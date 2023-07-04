import styled from "styled-components";

import CursiveStyled from "./CursiveStyled";

const StyleLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const LabelStyle = ({ text }) => {
  return (
    <StyleLabel>
      <CursiveStyled $fontSize={"coment"}>{text}</CursiveStyled>
    </StyleLabel>
  );
};

export default LabelStyle;
