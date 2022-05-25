import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 45px;

  background: white;
  border: 1px solid var(--light-gray-2);
  border-radius: 5px;
  box-sizing: border-box;

  font-family: inherit;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: var(--dark-gray-1);

  padding: 11px;

  &::placeholder {
    color: var(--light-gray-1);
  }

  &:focus-visible {
    outline: none;
    border: 2px solid var(--dark-gray-1);
  }

  &:disabled {
    background: var(--light-gray-3);
  }

  &:disabled::placeholder {
    color: var(--dark-gray-2);
  }
`;
