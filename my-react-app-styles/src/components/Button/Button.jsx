import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.blue ? "blue" : "gray"};
`;

const Button = ({ children, blue }) => {
  return <StyledButton blue={blue}>{children}</StyledButton>
}

export default Button;