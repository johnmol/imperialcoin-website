import styled from "styled-components";

export const CommunityContainer = styled.div`
  color: #010606;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;
`;

export const CommunityWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* prettier-ignore */
export const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  } */
`;

export const CommunityH1 = styled.h1`
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CommunityH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CommunityP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CommunityBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;