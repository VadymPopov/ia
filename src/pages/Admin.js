import { Text, Title, Section } from 'components/CommonStyles';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  CatIcon,
  HollowCatIcon,
  HelloCat,
  BallCat,
  LogOut,
  Button,
  FlexContainer,
  AdminFlex,
} from './Booking.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { refreshAdmin, logOut } from 'api';
import { useEffect } from 'react';
import Spinner from 'components/Spinner';

export default function Admin() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    async function refresh() {
      const resp = await refreshAdmin();
      if (resp.status === 401) {
        navigate('/gatita/login');
      }
    }

    refresh();
  });

  const handleLogOut = () => {
    logOut();
    navigate('/', { replace: true });
  };

  return (
    <Section>
      <AdminFlex>
        <Title>
          Hola Gatita <HelloCat />
        </Title>{' '}
        <Button onClick={handleLogOut}>
          Logout <LogOut />
        </Button>
      </AdminFlex>

      <Text>
        Тут ти можеш дивитись свої апойнтменти та редагувати якщо треба. Мяу{' '}
      </Text>
      <FlexContainer>
        <Button
          onClick={() => navigate('/gatita/admin/appointmentsbyday')}
          active={currentPathname === '/gatita/admin/appointmentsbyday'}
        >
          By day
        </Button>
        <CatIcon />
        <Button
          onClick={() => navigate('/gatita/admin/appointmentsbymonth')}
          active={currentPathname === '/gatita/admin/appointmentsbymonth'}
        >
          By month
        </Button>
        <HollowCatIcon />
        <Button
          onClick={() => navigate('/gatita/admin/appointmentsall')}
          active={currentPathname === '/gatita/admin/appointmentsall'}
        >
          All
        </Button>
        <BallCat />
        <Button
          onClick={() => navigate('/gatita/admin/addappointment')}
          active={currentPathname === '/gatita/admin/addappointment'}
        >
          Add appointment
        </Button>
      </FlexContainer>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Section>
  );
}
