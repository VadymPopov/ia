import React, { useState, useEffect } from 'react';
import { getAppointments } from 'api';
import Appointments from 'components/Appointments/Appointments';

const AllSchedule = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const appointments = await getAppointments();
      setData(
        appointments?.filter(appointment => appointment.name !== 'CLOSED')
      );
    })();
  }, []);

  return <>{data && <Appointments data={data} />}</>;
};

export default AllSchedule;
