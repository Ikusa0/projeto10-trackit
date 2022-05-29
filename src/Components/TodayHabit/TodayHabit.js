import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../Contexts/UserContext";
import { useTodayHabitsContext } from "../../Contexts/TodayHabitsContext";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

export default function TodayHabit({ habit, updatePercentConcluded }) {
  const user = useUserContext().user;
  const TodayHabitsContext = useTodayHabitsContext();
  const [isWaiting, setIsWaiting] = React.useState(false);
  const [concluded, setConcluded] = [TodayHabitsContext.concluded, TodayHabitsContext.setConcluded];
  const highestSequence = React.useState(habit.highestSequence)[0] - Number(habit.done);

  function toggleConcluded() {
    if (isWaiting) return;
    setIsWaiting(true);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${
      habit.done ? "uncheck" : "check"
    }`;
    const authorization = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.post(`${URL}`, {}, authorization);
    promise.then(() => {
      habit.done = !habit.done;
      if (habit.done) {
        habit.highestSequence += habit.highestSequence === habit.currentSequence ? 1 : 0;
        habit.currentSequence += 1;
        setConcluded(concluded + 1);
        return;
      }
      habit.highestSequence -= habit.highestSequence === habit.currentSequence ? 1 : 0;
      habit.currentSequence -= 1;
      if (habit.highestSequence < highestSequence) {
        habit.highestSequence = highestSequence;
      }
      setConcluded(concluded - 1);
    });
    promise.finally(() => {
      setIsWaiting(false);
    });
  }

  return (
    <Container>
      <div>
        <h3 className="habit-name">{habit.name}</h3>
        <span className="streak">
          Sequência atual: <span className={habit.done ? "done" : ""}>{habit.currentSequence}</span>
        </span>
        <span className="streak">
          Seu recorde:{" "}
          <span className={habit.highestSequence === habit.currentSequence ? "done" : ""}>{habit.highestSequence}</span>
        </span>
      </div>
      <button onClick={toggleConcluded} className={habit.done ? "done" : ""}>
        <BsCheckLg className="icon" />
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;

  div {
    width: 100%;
  }

  .habit-name {
    width: 90%;
    margin-bottom: 7px;
    word-break: break-word;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }

  .streak {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }

  .streak .done {
    color: var(--lime-green);
  }

  button {
    min-width: 69px;
    height: 69px;
    padding: 0;
    background-color: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
  }

  button.done {
    background-color: var(--lime-green);
  }

  .icon {
    font-size: 30px;
    color: white;
  }
`;
