import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import CreateHabit from "../../Components/CreateHabit/CreateHabit";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import Page from "../../Layouts/Page/Page";
import { MdOutlineAdd } from "react-icons/md";
import { useHabitsContext } from "../../Contexts/HabitsContext";
import Habit from "../../Components/Habit/Habit";

export default function Habits() {
  const [showCreate, setShowCreate] = React.useState(false);
  const habits = useHabitsContext().habits;

  return (
    <Container>
      <Page>
        <Header />
        <div className="title">
          <h1>Meus hábitos</h1>
          <ButtonContainer>
            <Button onClick={() => setShowCreate(true)} small icon>
              <MdOutlineAdd />
            </Button>
          </ButtonContainer>
        </div>
        <CreateHabit setShow={setShowCreate} show={showCreate} />
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <Habit key={index} habit={habit}>
              {habit.name}
            </Habit>
          ))
        ) : (
          <span className="no-habits">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </span>
        )}
        <Footer />
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 70px 15px;
  align-items: center;
  background-color: var(--light-gray-3);

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    h1 {
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;
      color: var(--dark-blue);
    }
  }

  .no-habits {
    color: var(--dark-gray-1);
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

const ButtonContainer = styled.div`
  width: 40px;
`;
