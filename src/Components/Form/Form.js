import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

// Object data is expected to be like this:
//
// {
//   form: { onSubmit },
//   inputs: [{
//       label
//       onChange
//       value
//       placeholder
//       type
//       required
//       disabled
//       autoComplete
//   }],
//   button: { text, disabled }
// }

export default function Form({ data }) {
  return (
    <Container autoComplete="on" onSubmit={data.form.onSubmit}>
      {data.inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          onChange={input.onChange}
          value={input.value}
          placeholder={input.placeholder}
          type={input.type}
          required={input.required}
          disabled={input.disabled}
          autoComplete={input.autoComplete}
        ></Input>
      ))}
      <Button type="submit" disabled={data.button.disabled}>
        {data.button.text}
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 25px;
`;
