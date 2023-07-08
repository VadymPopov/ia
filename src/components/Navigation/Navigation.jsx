import { Link, List, Nav,LogoLink } from './Navigation.styled';

const Navigation = () => {

  return (
    <Nav>
      <LogoLink to="/">
        Home IA Logo
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
        Online-Booking
      </Link></li>
      </List>
    </Nav>
  );
};

export default Navigation;