import styled from "styled-components";

export const Page = styled.div`
  max-width: 375px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 374px) {
    width: 100%;
  } ;
`;
