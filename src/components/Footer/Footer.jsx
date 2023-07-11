import { FooterContainer, Link } from './Footer.styled';
import {SiInstagram, SiTiktok} from 'react-icons/si'

const Footer = () => {

  return (
    <FooterContainer>
      <p> &copy; 2023 Developed by <Link href="https://github.com/VadymPopov" target='_blank' rel="noopener noreferrer">Vadym Popov</Link></p>
      <div style={{display: 'flex'}}>
        <Link href="https://www.tiktok.com/@ivenko.alinaaa" target='_blank' rel="noopener noreferrer"><SiTiktok></SiTiktok></Link>
        <Link href="https://www.instagram.com/ivenko.alinaaa/" target='_blank' rel="noopener noreferrer"><SiInstagram></SiInstagram></Link>
      </div>
      
    </FooterContainer>
  );
};

export default Footer;