import React, {useEffect} from "react";
import {Formik} from 'formik';
import {validationSchemaClient, FormError} from 'utils/formik';

import  Button  from "components/Button";
import { FormWrapper} from "./ClientForm.styled";
import { InputContainer, Input, InputLabel, FlexContainer, Legend, FieldSet } from "../WaiverForm/WaiverForm.styled";
import { useNavigate } from "react-router-dom";

const ClientForm = ({service, setAppointmentInfo})=> {
  const navigate = useNavigate();

  useEffect(()=> {
      if(!service) {
       navigate('/booking/service');
      }
  });

  const initialValues =  {
      name:'Dope',
      email: 'mail@dope.com',
      phone: '123456789',
    };

  const handleSubmit = async(values, actions) => {
      const appointmentInfo = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        service:service,
      };

      setAppointmentInfo(appointmentInfo);

      navigate('/booking/schedule');
  };

  return (
      <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaClient}
        onSubmit={handleSubmit}
      > 
      {({ handleChange, values }) => (
        <FormWrapper autoComplete="off">
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
      <div>
      <Button type="submit">Next</Button>
      </div>
        </FormWrapper>)}
      </Formik>
      </>
    );
};

export default ClientForm;
