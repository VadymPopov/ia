import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { format } from 'date-fns';
import { getAppointmentsByDate } from 'api';
import { validationSchemaTime, FormError } from 'utils/formik';

import { FormWrapper, CustomDatePicker, FieldSet } from './DaySchedule.styled';
import { Input, Legend } from '../WaiverForm/WaiverForm.styled';
import Appointments from 'components/Appointments/Appointments';

const DaySchedule = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      const formattedDate = format(new Date(), 'MM.dd.yyyy');
      const appointments = await getAppointmentsByDate(formattedDate);
      setData(appointments);
    };
    func();
  }, []);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const initialValues = {
    date: new Date(),
  };

  const handleDataChange = async date => {
    const formattedDate = format(date, 'MM.dd.yyyy');
    const appointments = await getAppointmentsByDate(formattedDate);
    if (appointments) {
      setData(appointments);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaTime}
      >
        {({ handleChange, values }) => (
          <FormWrapper autoComplete="off" className="schedule">
            <FieldSet>
              <Legend>Choose a time:</Legend>
              <Input name="date">
                {({ field, form }) => (
                  <CustomDatePicker
                    {...field}
                    selected={field.value}
                    onChange={date => handleDataChange(date)}
                    showPopperArrow={false}
                    minDate={new Date()}
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    inline
                  />
                )}
              </Input>
              <FormError name="date" component="span" />
            </FieldSet>
          </FormWrapper>
        )}
      </Formik>
      <Appointments data={data} />
    </>
  );
};

export default DaySchedule;
