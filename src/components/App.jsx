import { useEffect, lazy } from "react";
import Layout  from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyles";

const AboutPage = lazy(() => import('../pages/About'));
const AftercarePage = lazy(() => import('../pages/Aftercare'));
const HomePage = lazy(() => import('../pages/Home'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const ServicesPage = lazy(() => import('../pages/Services'));
const WaiverformPage = lazy(() => import('../pages/Waiverform'));
const BookingPage = lazy(() => import('../pages/Booking'));
const FAQPage = lazy(() => import('../pages/FAQ'));
const ContactPage = lazy(() => import('../pages/Contact'));

export const App = () => {
  return (
    <>
    <GlobalStyle/>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about'  element={<AboutPage/>}/>
        <Route path='/aftercare'  element={<AftercarePage/>}/>
        <Route path='/portfolio'  element={<PortfolioPage/>}/>
        <Route path='/services'   element={<ServicesPage/>}/>
        <Route path='/waiverform'   element={<WaiverformPage/>}/>
        <Route path='/booking'   element={<BookingPage/>}/>
        <Route path='/faq'   element={<FAQPage/>}/>
        <Route path='/contact'   element={<ContactPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>

    </>
   
  );
};
