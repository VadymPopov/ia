import { FooterContainer, Link } from './Footer.styled';

const Footer = () => {

  return (
    <FooterContainer>
      <p> &copy; 2023 Developed by <Link href="https://github.com/VadymPopov" target='_blank' rel="noopener noreferrer">Vadym Popov</Link></p>
      <div>
        <Link href="https://www.tiktok.com/@ivenko.alinaaa" target='_blank' rel="noopener noreferrer">Tik Tok</Link>
        <Link href="https://www.instagram.com/ivenko.alinaaa/" target='_blank' rel="noopener noreferrer">Instagram</Link>
      </div>
      
    </FooterContainer>
  );
};

export default Footer;