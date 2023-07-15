import { Link, List, Nav,LogoLink, Logo } from './Navigation.styled';

import logo from '../../images/logo-circle.svg';

const Navigation = () => {

  return (
    <Nav>
      <LogoLink to="/">
        <Logo src={logo} alt="logo" />
      </LogoLink>

      <List>
      <li><Link to="/about">
        About
      </Link></li>
      <li><Link to="/portfolio">
        Portfolio
      </Link></li>
      <li><Link to="/services">
        Services and Prices
      </Link></li>
      <li><Link to="/aftercare">
        Aftercare
      </Link></li>
      <li><Link to="/waiverform">
        Waiverform
      </Link></li>
      <li><Link to="/booking">
        Booking
      </Link></li>
      <li><Link to="/booking">
        FAQ
      </Link></li>
      <li><Link to="/booking">
        Contact
      </Link></li>
      </List>
    </Nav>
  );
};

export default Navigation;