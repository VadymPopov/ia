import { DevLink, FooterContainer, Link, LinksContainer, FlexContainer, GitIcon, GitIconTwo } from './Footer.styled';
import {SiInstagram, SiTiktok} from 'react-icons/si';


const Footer = () => {

  return (
    <FooterContainer>
    <FlexContainer>
    <p>&copy; 2023 Developed by</p>
    <DevLink href="https://github.com/VadymPopov" target='_blank' rel="noopener noreferrer">
      <GitIcon/>
    </DevLink> <span>&</span>
    <DevLink href="https://github.com/AnastasiiaKor" target='_blank' rel="noopener noreferrer">
      <GitIconTwo/>
    </DevLink>
    </FlexContainer>
     
  
     

      <LinksContainer>
        <Link href="https://www.tiktok.com/@ivenko.alinaaa" target='_blank' rel="noopener noreferrer"><SiTiktok></SiTiktok></Link>
        <Link href="https://www.instagram.com/ivenko.alinaaa/" target='_blank' rel="noopener noreferrer"><SiInstagram></SiInstagram></Link>
      </LinksContainer>
      
    </FooterContainer>
  );
};

export default Footer;