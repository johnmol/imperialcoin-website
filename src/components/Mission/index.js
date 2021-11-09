import React from "react";
import Icon1 from "../../assets/svg-1.svg";
import {
  MissionContainer,
  MissionH1,
  MissionWrapper,
  MissionCard,
  MissionH2,
  MissionP,
} from "./MissionElements";

const Mission = () => {
  return (
    <MissionContainer id="mission">
      
      <MissionWrapper>
        <MissionH1>Our Mission</MissionH1>
        <MissionCard>
          <MissionH2>Reduce Expenses</MissionH2>
          <MissionP>
            We help reduces your fees and increase your overall revenue
          </MissionP>
        </MissionCard>
      </MissionWrapper>
    </MissionContainer>
  );
};

export default Mission;
