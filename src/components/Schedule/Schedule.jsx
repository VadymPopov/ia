import React, {useState, useEffect} from "react";
import {Formik} from 'formik';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { getAvailableSlots } from "api";
import {validationSchemaTime, FormError} from 'utils/formik';
import useGlobalState from "hooks/useGlobalState";
import  Button  from "components/Button";
import { FormWrapper, SlotBtn, GridContainer, FlexCentered, CustomDatePicker, ServiceTitle, FieldSet } from "./Schedule.styled";
import {  Input, Legend } from "../WaiverForm/WaiverForm.styled";

  const ScheduleForm = ()=> {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const {appointmentInfo, setAppointmentInfo} = useGlobalState();
  const navigate = useNavigate();
  const selectedService= appointmentInfo?.service;

  useEffect(()=> {
    if(!appointmentInfo) {
     navigate('/booking/service');
    }
});

  const pickDuration = (selectedProcedure)=> {
    let duration;

    switch (selectedProcedure) {
      case 'small-tattoo':
        duration = 60;
        break;
        case 'large-tattoo':
        duration = 120;
        break;
        case 'permanent':
        duration = 60;
        break;
        case 'consultation':
        duration = 30;
        break;
      default:
      duration = 60;
    }
  
    return duration;
  };
  
  const duration = pickDuration(selectedService);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

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

  const initialValues =  {
    date: new Date(),
    slot: '', 
  };

    const handleDataChange = (date, field, form) => {
      form.setFieldValue(field.name, date); 
      setSelectedDate(date);
    };

    useEffect(()=>{
      (async()=>{
       const slots = await getAvailableSlots(format(selectedDate, 'MM.dd.yyyy'), duration);
       setSlots(slots);
      })();
 
   },[duration, selectedDate]);

  const handleSubmit = async(values, actions) => {
      const info = {
        ...appointmentInfo,
        date: format(values.date, 'MM.dd.yyyy'),
        slot: values.slot,
        duration: duration,
      };

      setAppointmentInfo(info);
      navigate('/booking/payment')
  };

  return (
      <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaTime}
        onSubmit={handleSubmit}
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
                onChange={(date) => handleDataChange(date, field, form)}
                showPopperArrow={false}
                minDate={new Date()}
                maxDate={maxDate}
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
              {slots && slots.length !== 0 && <FlexCentered>
                <GridContainer>
               {slots.map((slot, index) => (
                    <SlotBtn type='button' key={index} onClick={()=>handleButtonClick(slot, form, index, field)} active={activeButtonIndex === index ? index.toString() : null}>
                    {slot}
                    </SlotBtn>
                  ))} 
                 </GridContainer>
              </FlexCentered>}
              {slots && slots.length === 0 &&  <ServiceTitle>There are no available times </ServiceTitle>}  
              </>
            )}
          </Input>
          <FormError name="slot" component="span" />
          </div>
          </FieldSet>
    <div>
    <Button type="submit">Next</Button>
    </div>
        </FormWrapper>)}
      </Formik>
      </>
    );
};

export default ScheduleForm;
