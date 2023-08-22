import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import { LayoutContainer, Main} from './Layout.styled';

const Layout = () => {
    return (
        <LayoutContainer>
            <Navigation/>
            <Main>
                <Suspense fallback={null}>
                  <Outlet />
                </Suspense>
            </Main>
            <Footer/>
        </LayoutContainer>
     
    );
  };

  export default Layout;