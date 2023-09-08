import { useEffect } from 'react';
import { Container, FormWrapper, Input, InputContainer} from "./LoginForm.styled";
import  Button  from "components/Button";
import { Title } from 'components/CommonStyles';
// import { ButtonText } from './LoginForm.styled';
import { Formik } from 'formik';
import {MdLogin} from 'react-icons/md'
import { FormError, validationSchemaLogin } from 'utils/formik';
import { logIn, getAppointments } from 'api';

import useAuth from 'hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // const dispatch = useDispatch();
  // const { error } = useAuth();

  const initialValues = {
    email:'',
    password:'',
  };
  
  // useEffect(() => { 
  //   if (error !== null) {
  //     Notify.failure("The email address or password is incorrect. Please retry", {
  //       position: "center-top",
  //       borderRadius: "10px",
  //       pauseOnHover: true,
  //       cssAnimationDuration: 350,
  //       width: "400px"
  //     });
  //   }
  // }, [error]);

  const handleSubmit = async (values, actions) => {
   const token = await logIn({
          email: values.email,
          password: values.password,
        });
        setAuth(token);
        navigate('/admin/appointmentsbyday')
        // navigate(from, {replace: true});
    // actions.resetForm();
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