import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const navigate = useNavigate();
  const UserContext = useUserContext();
  const [user, setUser] = [UserContext.user, UserContext.setUser];

  function logoff() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <Container>
      <span className="title">TrackIt</span>
      <div className="image-container">
        <img onClick={() => setShowPopUp(!showPopUp)} src={user.image} alt="user" />
        <PopUp show={showPopUp}>
          <span onClick={logoff} className="menu-item">
            Sair
          </span>
          <div className="arrow-up"></div>
        </PopUp>
      </div>
    </Container>
  );
}

const PopUp = styled.div`
  width: 100px;
  height: 50px;

  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: absolute;
  top: 61px;
  right: 5%;

  .arrow-up {
    position: absolute;
    top: -5px;
    right: 20%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }

  .menu-item {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: var(--dark-blue);
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--dark-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;

  .title {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;

    color: white;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Edge, Opera and Firefox */
  }

  .image-container {
    position: relative;
  }

  img {
    width: 51px;
    height: 51px;
    object-fit: cover;
    cursor: pointer;

    border-radius: 98.5px;
  }
`;
