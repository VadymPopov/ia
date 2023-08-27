import React, {useState, useEffect} from "react";
import {Formik, Field} from 'formik';
import { format } from 'date-fns';
import { useLocation } from "react-router-dom";
import { bookAppointment, getAvailableSlots } from "api";
import {validationSchemaBooking, FormError} from 'utils/formik';

import  Button  from "components/Button";
import { FormWrapper, SlotBtn, GridContainer, FlexCentered, CustomDatePicker, ServiceContainer, ServiceTitle, ServiceDivider, ServiceText, PriceContainer, PaymentContainer, PaymentDivider } from "./BookingForm.styled";
import { InputContainer, Input, InputLabel, FlexContainer,  StyledSelect, Container, Legend, FieldSet } from "../WaiverForm/WaiverForm.styled";
import Payment from "components/Payment/Payment";
import styleDatepickerBooking from './datepicker-book.css';

import {useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const BookingForm = ()=> {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(location.state || 'Small Tattoo');

  const [message , setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const paymentElement = elements &&  elements.getElement(PaymentElement);

  console.log(paymentElement);

  // elements && paymentElement.on('change', function(event) {
  //   if (event.complete) {
  //     console.log(true)
  //   } else if (event.error) {
  //     console.log(false)
  //   }
  // });
  
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

  const duration = pickDuration(selectedService);
  const price = calculatePrice(selectedService) || 0;
  const tax = Number((price*0.13).toFixed(2)) || 0;
  const totalPrice = price + tax;
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
    form.setFieldValue(field.name, date); 
    setSelectedDate(date);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  useEffect(()=>{
     (async()=>{
      const slots = await getAvailableSlots(format(selectedDate, 'MM.dd.yyyy'), duration);
      setSlots(slots);
     })();

  },[duration, selectedDate]);

  const initialValues =  {
      name:'Dope',
      email: 'mail@dope.com',
      phone: '123456789',
      service: selectedService,
      date: new Date(),
      slot: '', 
    };

  const handleSubmit = async(values, actions) => {
      const appointmentInfo = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        service: selectedService,
        date: format(values.date, 'MM.dd.yyyy'),
        slot: values.slot,
        duration: duration,
      };

      if(!stripe || !elements) {
        return;
    }
    setIsProcessing(true);

    const {error, paymentIntent} = await stripe.confirmPayment({
      elements, 
      confirmParams: {
        return_url: `${window.location.origin}/success`
      },
      // redirect: 'always'
      redirect: 'if_required'
  })

    if((error && error.type === "card_error") || (error && error.type === "validation_error")) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage('Payment status ' + paymentIntent.status);
      await bookAppointment(appointmentInfo);
    } else {
      setMessage('Unexpected state');
   }
    setIsProcessing(false);
  
  
    
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

      <FlexContainer>
        <InputContainer>
        <InputLabel>Phone number</InputLabel>
              <Input name="phone" type="tel" placeholder="5551234567"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
          </InputContainer>     
      </FlexContainer>   
      </FieldSet>

      <FieldSet>
      <Legend>Choose a service:</Legend> 
       <FlexContainer> 
         <InputContainer>
          <InputLabel>What service are you receiving ?</InputLabel>

        <Field name="service" value={selectedService} as={StyledSelect} onChange={(e)=>handleServiceChange(e)}>
                <option value="Small Tattoo">Small Tattoo</option>
                <option value="Large Tattoo">Large Tattoo</option>
                <option value="Permanent Makeup">Permanent Makeup</option>
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
              <>
              {slots && slots.length !== 0 && <FlexCentered><GridContainer>
               {slots.map((slot, index) => (
                    <SlotBtn type='button' key={index} onClick={()=>handleButtonClick(slot, form, index, field)} active={activeButtonIndex === index ? index.toString() : null}>
                    {slot}
                    </SlotBtn>
                  ))} 
              </GridContainer></FlexCentered>}
              {slots && slots.length === 0 &&  <ServiceTitle>There are no available times </ServiceTitle>}  
              </>
            )}
          </Input>
          <FormError name="slot" component="span" />

          </FieldSet>
          </div>

          <ServiceContainer>  
            <ServiceDivider>
            <ServiceTitle>Service Details</ServiceTitle>
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
            {/* <Payment/> */}
            <PaymentElement />
        {/* <Button type="submit">Next</Button>  */}
        <Button type="submit" disabled={isProcessing || !stripe || !elements }>
          <span id="button-text">
                    {isProcessing ? 'Processing...' : 'Pay now'}
                </span></Button> 
        </Container>
          </ServiceContainer>
        </FormWrapper>)}
      </Formik>
      </>
    );
};

export default BookingForm;
