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
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
    border-radius: 5px;
    border: none;
    border: 1px solid #dcd8d8;
    cursor: pointer;
    width: 150px;

&:hover {
    background-color: orange; 
}
`