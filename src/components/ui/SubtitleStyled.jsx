import styled from "styled-components";

const Styleh2 = styled.h2`
  color: black;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const SubTitle = ({ children }) => {
  return <Styleh2>{children}</Styleh2>;
};

export default SubTitle;
