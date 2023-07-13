import { DevLink, FooterContainer, Link, LinksContainer } from './Footer.styled';
import {SiInstagram, SiTiktok} from 'react-icons/si'

const Footer = () => {

  return (
    <FooterContainer>
      <p> &copy; 2023 Developed by <DevLink href="https://github.com/VadymPopov" target='_blank' rel="noopener noreferrer">Vadym Popov</DevLink></p>
      <LinksContainer>
        <Link href="https://www.tiktok.com/@ivenko.alinaaa" target='_blank' rel="noopener noreferrer"><SiTiktok></SiTiktok></Link>
        <Link href="https://www.instagram.com/ivenko.alinaaa/" target='_blank' rel="noopener noreferrer"><SiInstagram></SiInstagram></Link>
      </LinksContainer>
      
    </FooterContainer>
  );
};

export default Footer;