import React, {useState, useEffect, useMemo} from "react";
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import  Button  from "components/Button";
import { FormWrapper, SlotBtn, GridContainer, CustomDatePicker, ServiceContainer } from "./BookingForm.styled";
import {  InputContainer, Input,  Title, InputLabel, FlexContainer, Text,  StyledSelect, Container, Legend, FieldSet } from "../WaiverForm/WaiverForm.styled";

import {nameRegExp, phoneRegExp, emailRegExp, FormError} from 'utils/formik';
import styleDatepickerBooking from './datepicker-book.css';

import { format } from 'date-fns';
import { useParams, useNavigate } from "react-router-dom";

const BookingForm = ()=> {
  const [formValues, setFormValues] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const initialService = (selectedService)=> {
    switch (selectedService) {
      case 'small-tattoo':
        return "Small Tattoo";
      case 'large-tattoo':
        return "Large Tattoo";
      case 'permanent':
        return "Permanent Makeup";
      case 'consultation-touch-up':
       return "Consultation/Touch-up"
      default:
        return "Small Tattoo";
    }
  }

  const serviceToURL = (selectedService)=> {
    switch (selectedService) {
      case "Small Tattoo":
        return 'small-tattoo';
      case "Large Tattoo":
        return 'large-tattoo';
      case "Permanent Makeup":
        return 'permanent';
      case "Consultation/Touch-up":
        return 'consultation-touch-up'
      default:
        return 'small-tattoo';
    }
  }

  const { serviceName } = useParams();

  const [selectedService, setSelectedService] = useState(initialService(serviceName));


  const validationSchema = () => {
    return Yup.object().shape({
    name: Yup.string().min(3).matches(nameRegExp, 'Enter a valid name').required('Name is a required field'),
    email: Yup.string().matches(emailRegExp,'Enter a valid email').required('Email is a required field'),
    phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Phone number is a required field'),
    service: Yup.string().required("Service is required"),
    })
  };

  
  const calculatePrice = (selectedProcedure)=> {
    let price;

    switch (selectedProcedure) {
      case 'Small Tattoo':
        price = 100;
        break;
      case 'Large Tattoo':
        price = 120;
        break;
      case 'Permanent Makeup':
        price = 100;
        break;
      case 'Consultation/Touch-up':
        price = 0;
        break;
      default:
      price = 0;
    }
  
    return price;
  }

  const price = calculatePrice(selectedService) || 0;
  const tax = Number((price*0.13).toFixed(2)) || 0;
  const totalPrice = price + tax;

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
      setSelectedSlot(slot);
      form.setFieldValue(field.name, slot);
    }
  };

  const initialValues =  useMemo(() => {
  return {
    name:'Dope',
    email: 'mail@dope.com',
    phone: '123456789',
    service: initialService(serviceName),
    // service: '',
    date: new Date(),
    slot: '', 
  }},[serviceName]);

    return (
      <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      > 
        <FormWrapper autoComplete="off"> 
        <div>
        <FieldSet> 
        <Legend>Fill out your information:</Legend>

      <FlexContainer> 
         <InputContainer>
            <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input name="name" type="text"  placeholder="John Doe" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
          </InputContainer>

          <InputContainer>
          <InputLabel>Email</InputLabel>
              <Input name="email" type="email" placeholder="john.doe@example.com" title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
          </InputContainer>
      </FlexContainer>  

      {/* <FlexContainer> */}
        <InputContainer>
        <InputLabel>Phone number</InputLabel>
              <Input name="phone" type="tel" placeholder="5551234567"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
          </InputContainer>     
      {/* </FlexContainer>    */}
      </FieldSet>

      <FieldSet>
      <Legend>Choose a service:</Legend> 
       <FlexContainer> 
         <InputContainer>
          <InputLabel>What service are you receiving ?</InputLabel>
              <Field name="service" value={selectedService} as={StyledSelect} onChange={(e) => {
              const selectedValue = e.target.value;
              setSelectedService(selectedValue);
              navigate(`/booking/${serviceToURL(selectedValue)}`);
            }}>
                {/* <option value="">Select a service</option> */}
                <option value="Small Tattoo">Small Tattoo</option>
                <option value="Large Tattoo">Large Tattoo</option>
                <option value="Permanent Makeup">Permanent Makeup (Cosmetic Tattoo)</option>
                <option value="Consultation/Touch-up">Consultation/Touch-up</option>
              </Field>
              <FormError name="service" component='span' />
          </InputContainer>  
         </FlexContainer> 
      </FieldSet>

      <FieldSet> 
        <Legend>Choose a time:</Legend>
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
                className={styleDatepickerBooking}
                inline
              />
            )}
          </Input>
          <FormError name="date" component="span" />

        <p>{selectedDate && format(selectedDate, 'MMMM dd, yyyy')}</p>
          <Input name="slot">
            {({ field, form }) => (
              <GridContainer>
              {selectedDate && timeSlots.map((slot, index) => (
                    <SlotBtn type='button' key={index} onClick={()=>handleButtonClick(slot, form, index, field)} active={activeButtonIndex === index ? index.toString() : null}>
                    {slot}
                    </SlotBtn>
                  ))} 
              </GridContainer>
            )}
          </Input>
          <FormError name="slot" component="span" />

          </FieldSet>
          </div>

          <ServiceContainer>
            <p>Service Details</p>
            {selectedService && <p>{selectedService} Appointment {selectedService === "Consultation/Touch-up" ? '' : "Deposit"}</p>}
     
            <p>{selectedSlot && format(selectedDate, 'MMMM dd, yyyy')} {selectedSlot && <span>at {selectedSlot}</span>}</p>

           {selectedService !== "Consultation/Touch-up" && <div>
              <p>Payment Details</p>
              <p>Subtotal</p>
              <p>{price}</p>
              <p>Tax</p>
              <p>{tax}</p>
              <p>Total</p>
              <p>{totalPrice}</p>
            </div>}
           
            <Container>
        <Button type="submit">Next</Button> 
        </Container>
          </ServiceContainer>
        </FormWrapper>
      </Formik>
      </>
    );
};

export default BookingForm;
