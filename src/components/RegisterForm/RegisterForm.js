import { Formik } from "formik";
import { Container } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Label, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";

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
        onSubmit={(values, actions) => handleSubmit(values, actions)}>
      <StyledForm>
        <Label>
        Username
        <StyledField type="text" name="name" />
      </Label>
      <Label>
        Email
        <StyledField type="email" name="email" />
      </Label>
      <Label>
        Password
        <StyledField type="password" name="password" />
      </Label>
          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </Container>
      );
    
};
