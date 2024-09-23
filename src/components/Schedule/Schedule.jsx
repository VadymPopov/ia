import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { getAvailableSlots } from 'api';
import { isTimeWithinLastHour } from 'utils/timeComparison';
import { validationSchemaTime, FormError } from 'utils/formik';
import { pickDuration } from 'utils/helpers';
import { isNotMonTueWed } from 'utils/isNotMonTueWed';
import { findNextAvailableDate } from 'utils/findNextAvailableDate';
import useGlobalState from 'hooks/useGlobalState';
import Button from 'components/Button';
import {
  FormWrapper,
  SlotBtn,
  GridContainer,
  FlexCentered,
  CustomDatePicker,
  ServiceTitle,
  FieldSet,
} from './Schedule.styled';
import { Input, Legend } from '../WaiverForm/WaiverForm.styled';
import toast from 'react-hot-toast';

const ScheduleForm = () => {
  const minDate = findNextAvailableDate();
  const maxDate = new Date(2024, 9, 31);
  const [, setSelectedSlot] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(minDate);
  const [slots, setSlots] = useState([]);
  const { appointmentInfo, setAppointmentInfo } = useGlobalState();
  const navigate = useNavigate();
  const selectedService = appointmentInfo?.service;

  useEffect(() => {
    if (!appointmentInfo) {
      navigate('/booking/service');
    }
  });

  const duration = pickDuration(selectedService);

  const handleButtonClick = (slot, form, index, field) => {
    if (activeButtonIndex === index) {
      setActiveButtonIndex(null);
      setSelectedSlot(null);
    } else {
      setActiveButtonIndex(index);
      setSelectedSlot(slot);
      form.setFieldValue(field.name, slot);
    }
  };

  const initialValues = {
    date: minDate,
    slot: '',
  };

  const handleDataChange = (date, field, form) => {
    const day = new Date(date).getDay();

    if (day === 5) {
      toast(
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              color: '#0f0e0e',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            👏 Promo Friday!
          </span>
          <span style={{ marginBottom: '10px' }}>
            Get <span style={{ fontWeight: 'bold' }}>2</span> tattoos (1-inch
            size) for just <span style={{ fontWeight: 'bold' }}>$100!</span>
          </span>
          <p style={{ fontSize: '12px', marginBottom: '10px' }}>
            *Black ink, simple designs only. No finger, face, inner lip, or
            intimate areas.
          </p>
        </div>,
        {
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff',
          },
        }
      );
    }

    form.setFieldValue(field.name, date);
    setSelectedDate(date);
  };

  useEffect(() => {
    (async () => {
      const slots = await getAvailableSlots(
        format(selectedDate, 'MM.dd.yyyy'),
        duration
      );
      setSlots(slots);
    })();
  }, [duration, selectedDate]);

  const handleSubmit = async values => {
    const info = {
      ...appointmentInfo,
      date: format(values.date, 'MM.dd.yyyy'),
      slot: values.slot,
      duration: duration,
    };

    setAppointmentInfo(info);
    navigate('/booking/payment');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaTime}
        onSubmit={handleSubmit}
      >
        <FormWrapper autoComplete="off" className="schedule">
          <FieldSet>
            <Legend>Choose a time:</Legend>
            <Input name="date">
              {({ field, form }) => (
                <CustomDatePicker
                  {...field}
                  selected={field.value}
                  onChange={date => handleDataChange(date, field, form)}
                  showPopperArrow={false}
                  minDate={minDate}
                  maxDate={maxDate}
                  filterDate={isNotMonTueWed}
                  dateFormat="dd/MM/yyyy"
                  inline
                />
              )}
            </Input>
            <FormError name="date" component="span" />

            <div>
              <p>{selectedDate && format(selectedDate, 'MMMM dd, yyyy')}</p>
              <Input name="slot">
                {({ field, form }) => (
                  <>
                    {slots && slots.length !== 0 && (
                      <FlexCentered>
                        <GridContainer>
                          {slots.map((slot, index) => (
                            <SlotBtn
                              type="button"
                              key={index}
                              onClick={() =>
                                handleButtonClick(slot, form, index, field)
                              }
                              active={
                                activeButtonIndex === index
                                  ? index.toString()
                                  : null
                              }
                              disabled={isTimeWithinLastHour(
                                selectedDate,
                                slot
                              )}
                            >
                              {slot}
                            </SlotBtn>
                          ))}
                        </GridContainer>
                      </FlexCentered>
                    )}
                    {slots && slots.length === 0 && (
                      <ServiceTitle>
                        {' '}
                        Sorry, there are no available times.
                      </ServiceTitle>
                    )}
                  </>
                )}
              </Input>
              <FormError name="slot" component="span" />
            </div>
          </FieldSet>
          <div>
            <Button type="submit">Next</Button>
          </div>
        </FormWrapper>
      </Formik>
    </>
  );
};

export default ScheduleForm;
