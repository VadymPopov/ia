import { Container, FormWrapper, Input, InputContainer} from "./LoginForm.styled";
import  Button  from "components/Button";
import { Title } from 'components/CommonStyles';
import { Formik } from 'formik';
import {MdLogin} from 'react-icons/md'
import { FormError, validationSchemaLogin } from 'utils/formik';
import { logIn } from 'api';

import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const initialValues = {
    email:'',
    password:'',
  };
  

  const handleSubmit = async (values, actions) => {
   const token = await logIn({
          email: values.email,
          password: values.password,
        });
        setAuth(token);
        navigate('/gatita/admin/appointmentsbyday')
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
              <Input name="email" type="email" placeholder="Email"  title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <Input name="password" type="password" placeholder="Password" autoComplete='off' />
              <FormError name="password" component='span'/>
            </div>
          </InputContainer>
          <Button type={"submit"}>Log In <MdLogin/></Button>
        </FormWrapper>
      </Formik>
      </Container>
  );
};

export default LoginForm;