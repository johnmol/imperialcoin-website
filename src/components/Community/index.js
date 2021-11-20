import React from "react";
import Icon1 from "../../assets/svg-1.svg";
import {
  CommunityContainer,
  CommunityH1,
  CommunityWrapper,
  CommunityCard,
  CommunityH2,
  CommunityP,
  CommunityBtnWrapper,
} from "./CommunityElements";
import { Button } from "../ButtonElements";

const Community = () => {
  return (
    <CommunityContainer id="community">
      <CommunityWrapper>
        <CommunityH1>Our Community</CommunityH1>
        <CommunityCard>
          {/* <CommunityH2>Reduce Expenses</CommunityH2> */}
          <CommunityP>
            Join our community on telegram to be part of the journey and stay updated on Imperial Coin.
          </CommunityP>
          <CommunityBtnWrapper>
            <Button
              href="//t.me/imperialcoinOfficial"
              target="_blank"
              aria-label="Telegram"
            >
              Join Our Telegram
            </Button>
          </CommunityBtnWrapper>
        </CommunityCard>
      </CommunityWrapper>
    </CommunityContainer>
  );
};

export default Community;
