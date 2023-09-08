import { lazy } from "react";
import React, {useState, useEffect} from "react";
import Layout  from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyles";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import { useAuth } from 'hooks/useAuth';
// import { refreshUser } from "api";
import { RequireAuth } from "./RequireAuth";
import { Toaster } from 'react-hot-toast';

const AftercarePage = lazy(() => import('../pages/Aftercare'));
const HomePage = lazy(() => import('../pages/Home'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const ServicesPage = lazy(() => import('../pages/ServicesPrices'));
const WaiverformPage = lazy(() => import('../pages/Waiverform'));
const BookingPage = lazy(() => import('../pages/Booking'));
const FAQPage = lazy(() => import('../pages/FAQ'));
const ContactPage = lazy(() => import('../pages/Contact'));
const CompletionPage = lazy(() => import('../pages/Completion'));
const Service = lazy(() => import('../pages/Service'));
const Client = lazy(() => import('../components/ClientForm'));
const Schedule = lazy(() => import('../components/Schedule'));
const Payment = lazy(() => import('../components/Payment'));
const Login = lazy(() => import('../components/LoginForm'));
const Admin = lazy(() => import('../pages/Admin'));
const DaySchedule = lazy(() => import('./DaySchedule'));
const MonthSchedule = lazy(() => import('../components/MonthSchedule'));
const AllSchedule = lazy(() => import('../components/AllSchedule'));

export const App = () => {
  const [service, setService] = useState(null);
  const [appointmentInfo, setAppointmentInfo] = useState(null);

  return (
    <>
    <GlobalStyle/>
    <ScrollToTop></ScrollToTop>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/aftercare'  element={<AftercarePage/>}/>
        <Route path='/portfolio'  element={<PortfolioPage/>}/>
        <Route path='/services'   element={<ServicesPage/>}/>
        <Route path='/waiverform'   element={<WaiverformPage/>}/>

        <Route path='/booking'   element={<BookingPage appointmentInfo={appointmentInfo} service={service}/>}>
          <Route path="service" element={<Service setService={setService}/>} />
          <Route path="client-info" element={<Client service={service} setAppointmentInfo={setAppointmentInfo}/>} />
          <Route path="schedule" element={<Schedule appointmentInfo={appointmentInfo} setAppointmentInfo={setAppointmentInfo}/>} />
          <Route path="payment" element={<Payment  appointmentInfo={appointmentInfo} />} />
        </Route>

        <Route path='/faq'   element={<FAQPage/>}/>
        <Route path='/contact'   element={<ContactPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/booking-succeeded" element={<CompletionPage/>}></Route>

      <Route path="/admin" element={<Admin/>}>
          <Route path="appointmentsbyday" element={<DaySchedule/>}/>
          <Route path="appointmentsbymonth" element={<MonthSchedule/>}/>
          <Route path="appointmentsall" element={<AllSchedule/>}/>
      </Route>
      {/* <Route element={<RequireAuth/>}>
          <Route path="/admin" element={<Admin/>}></Route>
      </Route> */}
      <Route path="/login" element={<RestrictedRoute component={<Login/>} redirectTo="/admin/appointmentsbyday"/>}/>
    </Routes>

    </>
   
  );
};
