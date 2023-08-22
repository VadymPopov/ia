import React, {useState, useEffect} from "react";
import {Formik, Field} from 'formik';
import { format } from 'date-fns';
import { useNavigate, useLocation } from "react-router-dom";
import { bookAppointment, getAvailableSlots } from "api";
import {validationSchemaBooking, FormError} from 'utils/formik';

import  Button  from "components/Button";
import { FormWrapper, SlotBtn, GridContainer, CustomDatePicker, ServiceContainer, ServiceTitle,ServiceDivider, ServiceText, PriceContainer, PaymentContainer, PaymentDivider } from "./BookingForm.styled";
import {  InputContainer, Input, InputLabel, FlexContainer,  StyledSelect, Container, Legend, FieldSet } from "../WaiverForm/WaiverForm.styled";
import Payment from "components/Payment/Payment";
import styleDatepickerBooking from './datepicker-book.css';


const BookingForm = ()=> {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedService, setSelectedService] = useState(location.state || 'Small Tattoo');
  
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

  const pickDuration = (selectedProcedure)=> {
    let duration;

    switch (selectedProcedure) {
      case 'Small Tattoo':
        duration = 60;
        break;
      case 'Large Tattoo':
        duration = 120;
        break;
      case 'Permanent Makeup':
        duration = 60;
        break;
      case 'Consultation/Touch-up':
        duration = 30;
        break;
      default:
      duration = 60;
    }
  
    return duration;
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

  const handleSubmit = (values, actions) => {
    const duration = pickDuration(values.service);

    const appointmentInfo = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: selectedService,
      date: format(values.date, 'MM.dd.yyyy'),
      slot: values.slot,
      duration: duration,
    };

    bookAppointment(appointmentInfo)
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

  const handleDataChange = (date, field, form) => {
    const duration = pickDuration(selectedService);
    

    form.setFieldValue(field.name,date); 
    setSelectedDate(date);
  
    getAvailableSlots(format(date, 'MM.dd.yyyy'), duration);
  };

  const initialValues =  {
      name:'Dope',
      email: 'mail@dope.com',
      phone: '123456789',
      service: selectedService || 'Small Tattoo',
      date: new Date(),
      slot: '', 
    };

    return (
      <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaBooking}
        onSubmit={handleSubmit}
      > 
      {({ handleChange, values }) => (
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

        <Field name="service" value={selectedService || values.service} as={StyledSelect} onChange={(e)=>setSelectedService(e.target.value)}>
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
                onChange={(date) => handleDataChange(date, field, form)}
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
            <ServiceTitle>Service Details</ServiceTitle>
            <ServiceDivider>
            {selectedService && <ServiceText>{selectedService} Appointment {selectedService === "Consultation/Touch-up" ? '' : "Deposit"}</ServiceText>}
     
            <ServiceText>{selectedSlot && format(selectedDate, 'MMMM dd, yyyy')} {selectedSlot && <span>at {selectedSlot}</span>}</ServiceText>
            </ServiceDivider>

           {selectedService !== "Consultation/Touch-up" && <PaymentContainer>
            <ServiceTitle>Payment Details</ServiceTitle>
            <PaymentDivider>
            <PriceContainer>
              <ServiceText>Subtotal</ServiceText>
              <ServiceText>CA${price}</ServiceText>
            </PriceContainer>
            <PriceContainer>
              <ServiceText>Tax</ServiceText>
              <ServiceText>CA${tax}</ServiceText>
            </PriceContainer>
            </PaymentDivider>
      
            <PriceContainer>
              <ServiceTitle>Total</ServiceTitle>
              <p>CA${totalPrice}</p>
            </PriceContainer>
            </PaymentContainer>}
            <Container>
              
        <Button type="submit">Next</Button> 
        <Payment></Payment>
        </Container>
          </ServiceContainer>
        </FormWrapper>)}
      </Formik>
      </>
    );
};

export default BookingForm;
