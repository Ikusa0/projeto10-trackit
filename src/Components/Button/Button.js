import styled from "styled-components";
import loadingButton from "../../Assets/Images/loading_button.svg";

export default function Button({ icon, onClick, invert, small, type, disabled, children }) {
  return (
    <>
      {disabled && !invert ? (
        <Container onClick={onClick} type={type} small={small} invert={invert} icon={icon} disabled>
          <img src={loadingButton} alt="loading" />
        </Container>
      ) : (
        <Container onClick={onClick} type={type} small={small} invert={invert} icon={icon}>
          {children}
        </Container>
      )}
    </>
  );
}

const Container = styled.button`
  width: 100%;
  height: ${(props) => (props.small ? "35px" : "45px")};
  background-color: ${(props) => (props.invert ? "white" : "var(--light-blue-1)")};
  font-family: inherit;
  font-weight: 400;
  font-size: ${(props) => (props.icon ? "22px" : props.small ? "16px" : "21px")};
  line-height: ${(props) => (props.small ? "20px" : "26px")};
  color: ${(props) => (props.invert ? "var(--light-blue-1)" : "white")};
  border: none;
  border-radius: 5px;

  &:focus-visible,
  &:hover {
    outline: none;
    background-color: ${(props) => (props.invert ? "white" : "var(--light-blue-2)")};
  }

  &:disabled {
    opacity: 70%;
    cursor: initial;
  }

  img {
    object-fit: cover;
    height: 100%;
  }
`;
