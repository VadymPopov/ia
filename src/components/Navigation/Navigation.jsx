import { useState } from 'react';
import { Header, Link, List, Nav, LogoLink, Logo, Item,MobileBtn, BurgerIcon, CrossIcon, MobileContainer } from './Navigation.styled';
import { useMedia } from 'react-use';

import logo from '../../images/logo-circle.svg';

const Navigation = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Header mobile={isMobile}>
    <Nav>
      <LogoLink to="/" onClick={isMobile ? onClose : null}>
        <Logo src={logo} alt="logo" />
      </LogoLink>

      {isMobile ? <MobileBtn onClick={toggleMenu}>{isOpen ? <CrossIcon/> : <BurgerIcon/>}</MobileBtn> : 
      <List>
      <Item ><Link to="/portfolio">
        Portfolio
      </Link></Item>
      <Item><Link to="/services" >
        Services and Prices
      </Link></Item>
      <Item><Link to="/aftercare">
        Aftercare
      </Link></Item>
      <Item><Link to="/waiverform">
        Waiver
      </Link></Item>
      <Item><Link to="/booking/service">
        Booking
      </Link></Item>
      <Item><Link to="/faq">
        FAQ
      </Link></Item>
      <Item><Link to="/contact">
        Contact
      </Link></Item>
      </List>}
    </Nav>

    <MobileContainer isOpen={isOpen}>
      <List>
      <Item><Link onClick={toggleMenu} to="/portfolio">
        Portfolio
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/services">
        Services and Prices
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/aftercare">
        Aftercare
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/waiverform">
        Waiver
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/booking/service">
        Booking
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/faq">
        FAQ
      </Link></Item>
      <Item><Link onClick={toggleMenu} to="/contact">
        Contact
      </Link></Item>
      </List>
      </MobileContainer>
    </Header>
  );
};

export default Navigation;