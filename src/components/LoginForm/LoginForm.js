import { Formik } from "formik";
import { Container } from 'components/App/App.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Label, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    dispatch(logIn({ email, password }));
    actions.resetForm();
  };

  return (
    <Container>
      <Formik 
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}>
        <StyledForm>
          <Label>
            Email
            <StyledField type="email" name="email" />
          </Label>
          <Label>
            Password
            <StyledField type="password" name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};
