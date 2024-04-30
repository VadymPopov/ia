import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import Button from 'components/Button';
import {
  FormWrapper,
  InputContainer,
  Input,
  CustomDatePicker,
  InputLabel,
  FlexContainer,
  StyledSelect,
  Legend,
  FieldSet,
} from '../WaiverForm/WaiverForm.styled';
import Loader from 'components/BtnLoader';
import { format } from 'date-fns';
import { validationSchemaAdmin, FormError } from 'utils/formik';
import { bookAppointment } from '../../api';
import { useNavigate } from 'react-router-dom';
import { pickDuration } from 'utils/helpers';

const AddAppointmentForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const slots = [
    '11:00am',
    '11:30am',
    '12:00pm',
    '12:30pm',
    '1:00pm',
    '1:30pm',
    '2:00pm',
    '2:30pm',
    '3:00pm',
    '3:30pm',
    '4:00pm',
    '4:30pm',
    '5:00pm',
    '5:30pm',
    '6:00pm',
    '6:30pm',
    '7:00pm',
  ];

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    slot: '11:00am',
    service: 'small-tattoo',
    date: new Date(),
    duration: 30,
    instagram: '',
  };

  const handleSubmit = async values => {
    setIsProcessing(true);
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] =
        typeof values[key] === 'string' ? values[key].trim() : values[key];
      return acc;
    }, {});

    const info = {
      ...trimmedValues,
      date: format(values.date, 'MM.dd.yyyy'),
      duration:
        trimmedValues.service === 'large-tattoo'
          ? trimmedValues.duration
          : pickDuration(trimmedValues.service),
      address: '689 St. Clair Avenue West, Toronto, Ontario M6C 1B2, Canada',
    };

    await bookAppointment(info);
    setIsProcessing(false);

    navigate('/gatita/admin/appointmentsall');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaAdmin}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <FormWrapper autoComplete="off" className="waiver">
          <FieldSet>
            <Legend>Client Information:</Legend>
            <FlexContainer>
              <InputContainer>
                <InputLabel htmlFor="name">Full Name</InputLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <FormError name="name" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>What service are you receiving ?</InputLabel>
                <Field name="service" as={StyledSelect}>
                  <option value="small-tattoo" selected>
                    Small Tattoo
                  </option>
                  <option value="large-tattoo">Large Tattoo</option>
                  <option value="permanent">Permanent</option>
                  <option value="consultation">Consultation</option>
                </Field>
                <FormError name="service" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel htmlFor="duration">Duration</InputLabel>
                <Input name="duration" type="number" min="30" step="30" />
                <FormError name="duration" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>Instagram</InputLabel>
                <Input
                  name="instagram"
                  type="text"
                  placeholder="@instagram name"
                />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>Phone number</InputLabel>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="5551234567"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <FormError name="phone" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input
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
                <InputLabel>Pick time slot</InputLabel>
                <Field name="slot" as={StyledSelect}>
                  {slots.map(slot => {
                    return (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    );
                  })}
                </Field>
                <FormError name="slot" component="span" />
              </InputContainer>
            </FlexContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Appointment Date:</Legend>
            <FlexContainer>
              <InputContainer>
                <InputLabel htmlFor="date">Appointment Date</InputLabel>
                <Input name="date" aria-label="appointment-date" id="date">
                  {({ field, form }) => (
                    <CustomDatePicker
                      {...field}
                      showIcon
                      selected={field.value}
                      onChange={date => form.setFieldValue(field.name, date)}
                      minDate={new Date()}
                    />
                  )}
                </Input>
                <FormError name="date" component="span" />
              </InputContainer>
            </FlexContainer>
          </FieldSet>

          {isValid && (
            <Button type="submit" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  Processing
                  <Loader />
                </>
              ) : (
                'Submit'
              )}
            </Button>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};

export default AddAppointmentForm;
