import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  AppBar  from '../AppBar';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import { LayoutContainer} from './Layout.styled';

const Layout = () => {
    return (
        <LayoutContainer>
            <AppBar/>
            <main>
                <Suspense fallback={null}>
                  <Outlet />
                </Suspense>
            </main>
            <Footer/>
            
            <Toaster position="top-right" reverseOrder={false} />
        </LayoutContainer>
     
    );
  };

  export default Layout;