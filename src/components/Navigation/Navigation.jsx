import { Link, List, Nav, LogoLink, Logo, Item } from './Navigation.styled';

import logo from '../../images/logo-circle.svg';

const Navigation = () => {

  return (
    <Nav>
      <LogoLink to="/">
        <Logo src={logo} alt="logo" />
      </LogoLink>

      <List>
      <Item><Link to="/about">
        About
      </Link></Item>
      <Item><Link to="/portfolio">
        Portfolio
      </Link></Item>
      <Item><Link to="/services">
        Services and Prices
      </Link></Item>
      <Item><Link to="/aftercare">
        Aftercare
      </Link></Item>
      <Item><Link to="/waiverform">
        Waiverform
      </Link></Item>
      <Item><Link to="/booking">
        Booking
      </Link></Item>
      <Item><Link to="/faq">
        FAQ
      </Link></Item>
      <Item><Link to="/contact">
        Contact
      </Link></Item>
      </List>
    </Nav>
  );
};

export default Navigation;