import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchemaClient, FormError } from 'utils/formik';
import useGlobalState from 'hooks/useGlobalState';
import Button from 'components/Button';
import { FormWrapper, ImgPreview, FileInput } from './ClientForm.styled';
import {
  InputContainer,
  Input,
  InputLabel,
  FlexContainer,
  Legend,
  FieldSet,
  Text,
} from '../WaiverForm/WaiverForm.styled';
import { useNavigate } from 'react-router-dom';

const ClientForm = () => {
  const navigate = useNavigate();
  const { service, setAppointmentInfo } = useGlobalState();
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  useEffect(() => {
    if (!service) {
      navigate('/booking/service');
    }
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    sketch: '',
    description: '',
    instagram: '',
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue('sketch', file);
    const imageURL = URL.createObjectURL(file);
    setSelectedImageURL(imageURL);
  };

  const handleSubmit = async values => {
    const { name, email, phone, description, sketch, instagram } = values;

    const appointmentInfo = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      description: description.trim(),
      instagram: instagram.trim(),
    };

    if (sketch) {
      appointmentInfo.sketch = sketch;
    }

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
        {({ values, setFieldValue, handleChange }) => (
          <FormWrapper autoComplete="off">
            <FieldSet>
              <Legend>Fill out your information:</Legend>

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
                  <InputLabel>Instagram</InputLabel>
                  <Input
                    name="instagram"
                    type="text"
                    placeholder="@your instagram"
                  />
                </InputContainer>
              </FlexContainer>
            </FieldSet>
            <Text>
              If you have a tattoo concept in mind or a rough sketch, please
              upload a photo and provide a description of your idea.
            </Text>
            <FieldSet>
              <Legend>Add your tattoo idea:</Legend>
              <FlexContainer>
                <InputContainer>
                  <InputLabel htmlFor="sketch">
                    Please upload a photo
                  </InputLabel>
                  <FileInput
                    type="file"
                    id="sketch"
                    name="sketch"
                    accept="image/*"
                    onChange={event => handleImageChange(event, setFieldValue)}
                  />
                </InputContainer>
              </FlexContainer>
              {selectedImageURL && (
                <ImgPreview src={selectedImageURL} alt="client-sketch" />
              )}

              <InputContainer>
                <InputLabel htmlFor="description">
                  {' '}
                  Brief Description
                </InputLabel>
                <Input
                  as="textarea"
                  name="description"
                  id="description"
                  rows="4"
                  cols="20"
                  style={{ resize: 'none', width: 'auto' }}
                  value={values.description}
                  onChange={handleChange}
                />
                <FormError name="description" component="span" />
              </InputContainer>
            </FieldSet>
            <div>
              <Button type="submit">Next</Button>
            </div>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

export default ClientForm;
