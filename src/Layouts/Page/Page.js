import styled from "styled-components";

const Page = styled.div`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 374px) {
    width: 100%;
  } ;
`;

export default Page;
