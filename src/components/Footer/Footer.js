import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBootstrap,
  
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';


function Footer() {
  return (
    <FooterContainer >
    
      
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
            SubaruGangsrer`s
          </SocialLogo>
          <WebsiteRights>SubaruGangsrer`s © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/SubaruRussia/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/subaru_gangster/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UCb4VXkmG5bahDSyobd8IH3w'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://vk.com/subaru_gangsters' target='_blank' aria-label='Vk'>
              <FaBootstrap />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
