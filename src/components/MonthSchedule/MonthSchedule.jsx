import React, { useState, useEffect } from 'react';
import { getAppointmentsByMonth } from 'api';
import { Legend } from '../WaiverForm/WaiverForm.styled';
import Appointments from 'components/Appointments/Appointments';
import { MonthPicker } from './MonthSchedule.styled';

const MonthScheduler = () => {
  const [data, setData] = useState(null);
  const currentDate = new Date();
  const currentMonthNumber = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const [selectedMonth, setSelectedMonth] = useState(currentMonthNumber);

  const monthOptions = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  useEffect(() => {
    (async () => {
      const appointments = await getAppointmentsByMonth(selectedMonth);
      setData(
        appointments?.filter(appointment => appointment.name !== 'CLOSED')
      );
    })();
  }, [selectedMonth]);

  const handleMonthChange = e => {
    const selectedValue = e.target.value;
    setSelectedMonth(selectedValue);
  };

  return (
    <>
      <Legend>Pick a month:</Legend>
      <MonthPicker
        name="date"
        onChange={handleMonthChange}
        value={selectedMonth}
      >
        {monthOptions.map(month => {
          return (
            <option value={month.value} key={month.value}>
              {month.label}
            </option>
          );
        })}
      </MonthPicker>
      <Appointments data={data} />
    </>
  );
};

export default MonthScheduler;
