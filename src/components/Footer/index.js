import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaMediumM,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              <FooterLink
                href="//t.me/imperialcoinOfficial"
                target="_blank"
                aria-label="Telegram"
              >
                Learn More
              </FooterLink>
              <FooterLink
                href="//t.me/imperialcoinOfficial"
                target="_blank"
                aria-label="Telegram"
              >
                Support
              </FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                href="//t.me/imperialcoinOfficial"
                target="_blank"
                aria-label="Telegram"
              >
                Telegram
              </FooterLink>
              <FooterLink
                href="//www.instagram.com/imperialcoin_"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram
              </FooterLink>
              <FooterLink
                href="//www.twitter.com/ImperialCoin_"
                target="_blank"
                aria-label="Twitter"
              >
                Twitter
              </FooterLink>
              <FooterLink
                href="//discord.gg/zBvfDEwHAB"
                target="_blank"
                aria-label="Discord"
              >
                Discord
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Imperial Coin
            </SocialLogo>
            <WebsiteRights>
              Imperial Coin &copy; {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//t.me/imperialcoinOfficial"
                target="_blank"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/imperialcoin_"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.medium.com/@imperialcoin"
                target="_blank"
                aria-label="Medium"
              >
                <FaMediumM />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/ImperialCoin_"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//discord.gg/zBvfDEwHAB"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
