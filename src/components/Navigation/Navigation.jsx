import { Link, List, Nav,LogoLink, Logo } from './Navigation.styled';
import logo from '../../images/logo.png';
import logoCopy from '../../images/logo-copy.png';

const Navigation = () => {

  return (
    <Nav>
      <LogoLink to="/">
        {/* <Logo src={logo} alt="logo" />
         */}
         <Logo src={logoCopy} alt="logo" />
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