import { Text, Title, Section } from "components/CommonStyles";
import {  Outlet } from "react-router-dom";
import { Suspense } from "react";

import { CatIcon, HollowCatIcon, HelloCat,LogOut, Button, FlexContainer, AdminFlex } from "./Booking.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { refreshUser, logOut } from "api";
import { useEffect } from "react";

export default function Admin () {
    const location = useLocation();
    const currentPathname = location.pathname;
    const navigate = useNavigate();

    useEffect(()=>{
      refreshUser();
    });

    const handleLogOut =()=>{
      logOut();
      navigate('/', {replace: true});
    }

    return (
    <Section>
      <AdminFlex>
      <Title>Hola Gatita <HelloCat/></Title> <Button onClick={handleLogOut}>Logout <LogOut/></Button>
      </AdminFlex>
        
        <Text>Тут ти можеш дивитись свої апойнтменти та редагувати якщо треба. Мяу </Text>
      <FlexContainer>
          <Button onClick={()=>navigate('/gatita/admin/appointmentsbyday')} active={currentPathname === '/gatita/admin/appointmentsbyday'}>By day</Button>
          <CatIcon/>
          <Button onClick={()=>navigate('/gatita/admin/appointmentsbymonth')} active={currentPathname === '/gatita/admin/appointmentsbymonth'}>By month</Button>
          <HollowCatIcon/>
          <Button onClick={()=>navigate('/gatita/admin/appointmentsall')} active={currentPathname === '/gatita/admin/appointmentsall'}>All</Button>
      </FlexContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
    );
}