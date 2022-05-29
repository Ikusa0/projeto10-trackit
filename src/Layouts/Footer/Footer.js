import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTodayHabitsContext } from "../../Contexts/TodayHabitsContext";

export default function Footer() {
  const percentConcluded = useTodayHabitsContext().percentConcluded;

  return (
    <Container>
      <Link className="button" to="/habits">
        Hábitos
      </Link>
      <Link className="progressbar-container" to="/today">
        <CircularProgressbar
          value={percentConcluded}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "var(--light-blue-1)",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>
      <Link className="button" to="/history">
        Histórico
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;

  .progressbar-container {
    width: 91px;
    height: 91px;
    transform: translateY(-25%);
  }

  .button {
    width: 100px;
    padding: 10px 0;
    box-sizing: border-box;
    border: none;

    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;

    color: var(--light-blue-1);

    background-color: white;
    border-radius: 8px;
  }

  .button:hover {
    background-color: var(--light-blue-1);
    color: white;
  }
`;
