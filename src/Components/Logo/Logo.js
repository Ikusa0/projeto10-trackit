import styled from "styled-components";
import logo from "../../Assets/Images/logo.svg";

export const Logo = styled.img.attrs(() => ({ src: logo, alt: "Logo TrackIt" }))`
  width: 180px;
  height: 180px;
  margin-bottom: 36px;
`;
