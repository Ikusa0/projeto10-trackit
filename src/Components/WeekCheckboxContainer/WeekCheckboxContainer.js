import React from "react";
import styled from "styled-components";
import WeekCheckbox from "./WeekCheckbox";

// WeekCheckbox
// {weekdays: [{
//   text,
//   onClick,
//   isSelected,
//  }]
// }

export default function WeekCheckboxContainer({ weekdays, disabled }) {
  return (
    <Container>
      {weekdays.map((weekday, index) => (
        <WeekCheckbox
          key={index}
          disabled={disabled}
          onClick={() => weekday.onClick(index)}
          isSelected={weekday.isSelected}
        >
          {weekday.text}
        </WeekCheckbox>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`;
