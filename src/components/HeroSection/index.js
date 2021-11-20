import React, { useState } from "react";
import Video from "../../assets/videos/video2.mp4";
import Video2 from "../../assets/videos/video2.ogv";
import Video3 from "../../assets/videos/video2.webm";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline disablePictureInPicture>
          <source src="${require('./../../assets/videos/video2.mp4')}" type="video/mp4"/>
          <source src="${require('./../../assets/videos/video2.ogv')}" type="video/ogv"/>
          <source src="${require('./../../assets/videos/video2.webm')}" type="video/webm"/>
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>A smarter way to create value</HeroH1>
        <HeroP>
          We are building and supporting the future of blockchain and DeFi.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href="//t.me/imperialcoinOfficial"
            target="_blank"
            aria-label="Telegram"
            // to="community"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            // smooth={true}
            // duration={500}
            // spy={true}
            // exact="true"
            // offset={-80}
          >
            Join Our Telegram {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
