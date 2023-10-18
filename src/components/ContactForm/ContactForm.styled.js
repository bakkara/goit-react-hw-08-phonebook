import {Field, Form, ErrorMessage} from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  &:focus-visible{
        outline: 1px solid blue;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};

  letter-spacing: 0.06em;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: 12px 18px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`