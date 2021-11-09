import styled from "styled-components";

export const MissionContainer = styled.div`
  color: #010606;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const MissionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

/* prettier-ignore */
export const MissionCard = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const MissionH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MissionH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const MissionP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
