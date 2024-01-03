import { Formik } from "formik";
import { Container } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, ErrorMsg, Label, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";
import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().required('Required'),
  password: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

 const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
      }}
        validationSchema={validateSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}>
      <StyledForm>
        <Label>
        Username
        <StyledField type="text" name="name" />
        <ErrorMsg name="name" component="div"/>
      </Label>
      <Label>
        Email
        <StyledField type="email" name="email" />
        <ErrorMsg name="email" component="div"/>
      </Label>
      <Label>
        Password
        <StyledField type="password" name="password" />
        <ErrorMsg name="password" component="div"/>
      </Label>
          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </Container>
      );
    
};
