import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pathNames = [
  '/booking/service',
  '/booking/client-info',
  '/booking/schedule',
  '/booking/payment',
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathNames.includes(pathname)) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling behavior
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
