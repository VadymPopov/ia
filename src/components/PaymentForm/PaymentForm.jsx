import React from 'react';
import { Formik } from 'formik';
import { validationSchemaPaymentForm, FormError } from 'utils/formik';
import useGlobalState from 'hooks/useGlobalState';
import Button from 'components/Button';
import { FormWrapper } from '../ClientForm/ClientForm.styled';
import {
  InputContainer,
  Input,
  InputLabel,
  FlexContainer,
  Legend,
  FieldSet,
} from '../WaiverForm/WaiverForm.styled';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const { paymentInfo, setPaymentInfo } = useGlobalState();

  const initialValues = {
    name: paymentInfo?.name || '',
    email: paymentInfo?.email || '',
    amount: paymentInfo?.amount || '',
  };

  const handleSubmit = values => {
    const { name, email, amount } = values;

    const paymentInfo = {
      name: name.trim(),
      email: email.trim(),
      amount,
    };

    setPaymentInfo(paymentInfo);
    navigate('/payment/tip-amount');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaPaymentForm}
        onSubmit={handleSubmit}
      >
        <FormWrapper autoComplete="off">
          <FieldSet>
            <Legend>Fill out your information:</Legend>

            <FlexContainer>
              <InputContainer>
                <InputLabel htmlFor="name">Full Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <FormError name="name" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  title="Email must contain an “@” symbol before the domain"
                />
                <FormError name="email" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>Amount CA$</InputLabel>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="100"
                  title="Amount number must be bigger than zero"
                />
                <FormError name="amount" component="span" />
              </InputContainer>
            </FlexContainer>
          </FieldSet>
          <div>
            <Button type="submit">Next</Button>
          </div>
        </FormWrapper>
      </Formik>
    </>
  );
};

export default PaymentForm;
