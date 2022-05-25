import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <span>TrackIt</span>
      <img src="http://pm1.narvii.com/6815/d7940b1f32c9e88fe44aaf6917e8d3c6062bf487v2_00.jpg" alt="user" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--dark-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;

  span {
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

  img {
    width: 51px;
    height: 51px;
    object-fit: cover;

    border-radius: 98.5px;
  }
`;
