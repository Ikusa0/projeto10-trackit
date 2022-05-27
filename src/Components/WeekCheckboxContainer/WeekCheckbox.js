import styled from "styled-components";

export default function WeekCheckbox({ children, onClick, isSelected, disabled }) {
  return (
    <Container disabled={disabled} onClick={disabled ? () => {} : onClick} selected={isSelected}>
      <span>{children}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background-color: ${({ selected }) => (selected ? "var(--dark-gray-3)" : "white")};
  border: 1px solid var(--light-gray-2);
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};

  span {
    font-family: inherit;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: ${({ selected }) => (selected ? "white" : "var(--light-gray-1)")};

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Edge, Opera and Firefox */
  }
`;
