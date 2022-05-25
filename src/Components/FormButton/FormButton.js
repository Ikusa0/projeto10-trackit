import styled from "styled-components";
import loadingButton from "../../Assets/Images/loading_button.svg";

export default function FormButton({ disabled, children }) {
  return (
    <>
      {disabled ? (
        <Button disabled={disabled}>
          <img src={loadingButton} alt="loading" />
        </Button>
      ) : (
        <Button>{children}</Button>
      )}
    </>
  );
}

const Button = styled.button.attrs(({ disabled }) => ({ type: "submit", disabled }))`
  width: 100%;
  height: 45px;
  background-color: var(--light-blue-1);
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  color: white;
  border: none;
  border-radius: 5px;

  &:focus-visible,
  &:hover {
    outline: none;
    background-color: var(--light-blue-2);
  }

  &:disabled {
    opacity: 70%;
    cursor: initial;
    background-color: var(--light-blue-1);
  }

  img {
    object-fit: cover;
    height: 100%;
  }
`;
