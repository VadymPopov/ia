import React, {useState, useEffect, useMemo} from "react";
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import  Button  from "components/Button";
import { FormWrapper, InputContainer, Input,  Title, InputLabel, FlexContainer, Text,  StyledSelect, Container, Legend, FieldSet } from "./BookingForm.styled";
import { CustomDatePicker } from 'components/WaiverForm/WaiverForm.styled';

import {nameRegExp, phoneRegExp, emailRegExp, FormError} from 'utils/formik';

import {SlotBtn, GridContainer} from '../Booking/Booking.styled';
import styleDatepicker from '../WaiverForm/datepicker.css';

const BookingForm = ()=> {
  const [formValues, setFormValues] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
const [activeButtonIndex, setActiveButtonIndex] = useState(null);
const [selectedDate, setSelectedDate] = useState(null);

  const validationSchema = () => {
    return Yup.object().shape({
    name: Yup.string().min(3).matches(nameRegExp, 'Enter a valid name').required('Name is a required field'),
    email: Yup.string().matches(emailRegExp,'Enter a valid email').required('Email is a required field'),
    phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Phone number is a required field'),
    service: Yup.string().required("Service is required"),
    })
  };

  const timeSlots = [
    '11:00am',
    '12:00am',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
    '8:00pm'
  ];

  const handleSubmit = async (values, actions) => {
    setFormValues(values);
    console.log(values);
  };

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const handleButtonClick = (slot, form, index, field) => {
    if (activeButtonIndex === index) {
      setActiveButtonIndex(null);
      setSelectedSlot(null);
    } else {
      setActiveButtonIndex(index);
      setSelectedSlot(index);
      form.setFieldValue(field.name, slot)
    }
  };

  const initialValues =  useMemo(() => {
  return {
    name:'Dope',
    email: 'mail@dope.com',
    phone: '123456789',
    service:'Small Tattoo',
    date: new Date(),
  }},[]);

    return (
      <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      > 
        <FormWrapper autoComplete="off"> 
        <FieldSet> 
        <Legend>Fill out your information:</Legend>

      <FlexContainer> 
         <InputContainer>
            <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input name="name" type="text"  placeholder="John Doe" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
          </InputContainer>
      </FlexContainer>  

      <FlexContainer>
        <InputContainer>
        <InputLabel>Phone number</InputLabel>
              <Input name="phone" type="tel" placeholder="5551234567"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
          </InputContainer>

          <InputContainer>
          <InputLabel>Email</InputLabel>
              <Input name="email" type="email" placeholder="john.doe@example.com" title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
          </InputContainer>
                    
      </FlexContainer>   
      </FieldSet>

      <FieldSet>
      <Legend>Choose a service:</Legend> 
       <FlexContainer> 
         <InputContainer>
          <InputLabel>What service are you receiving ?</InputLabel>
              <Field name="service" as={StyledSelect}>
                <option value="">Select a service</option>
                <option value="Small Tattoo">Small Tattoo</option>
                <option value="Large Tattoo">Large Tattoo</option>
                <option value="Permanent Makeup (Cosmetic Tattoo)">Permanent Makeup (Cosmetic Tattoo)</option>
                <option value="Consultation/Touch-up">Consultation/Touch-up</option>
              </Field>
              <FormError name="service" component='span' />
          </InputContainer>  
         </FlexContainer> 
      </FieldSet>

<InputLabel>Date</InputLabel>
          <Input name="date">
            {({ field, form }) => (
              <CustomDatePicker
                {...field}
                selected={field.value}
                onChange={(date) => {form.setFieldValue(field.name,date); setSelectedDate(date)}}
                showPopperArrow={false}
                minDate={new Date()}
                maxDate={maxDate}
                dateFormat="dd/MM/yyyy"
                className={styleDatepicker}
                inline
              />
            )}
          </Input>
          <FormError name="date" component="span" />

<InputLabel>Time slot</InputLabel>
          <Input name="slot">
            {({ field, form }) => (
              <GridContainer>
              {selectedDate && timeSlots.map((slot, index) => (
                    <SlotBtn type='button' key={index} onClick={()=>handleButtonClick(slot, form, index, field)} active={activeButtonIndex === index ? index : null}>
                      {slot}
                    </SlotBtn>
                  ))} 
              </GridContainer>
            )}
          </Input>
          <FormError name="slot" component="span" />
        <Container>
        <Button type="submit">Next</Button> 
        </Container>
        
        </FormWrapper>
      </Formik>
      </>
    );
};

export default BookingForm;
