import { useState } from 'react';
import {
  Container,
  FormWrapper,
  Input,
  InputContainer,
  LoginIcon,
} from './LoginForm.styled';
import Button from 'components/Button';
import { Title } from 'components/CommonStyles';
import { Formik } from 'formik';
import { FormError, validationSchemaLogin } from 'utils/formik';
import { logIn } from 'api';
import Loader from 'components/BtnLoader';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async values => {
    setIsLoading(true);
    await logIn({
      email: values.email,
      password: values.password,
    });

    navigate('/gatita/admin/appointmentsbyday');
    setIsLoading(false);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLogin}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Title>Welcome I.A.</Title>
          <InputContainer>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                title="Email must contain an “@” symbol before the domain"
              />
              <FormError name="email" component="span" />
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
              <FormError name="password" component="span" />
            </div>
          </InputContainer>
          <Button type={'submit'} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader />
                Loading
              </>
            ) : (
              <>
                Log In
                <LoginIcon />
              </>
            )}
          </Button>
        </FormWrapper>
      </Formik>
    </Container>
  );
};

export default LoginForm;
