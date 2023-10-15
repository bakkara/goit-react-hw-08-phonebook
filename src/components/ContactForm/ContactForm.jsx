import { Formik } from "formik";
import * as Yup from 'yup';
import { Button, ErrorMsg, Label, StyledField, StyledForm } from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from "react-hot-toast";


 export const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .test(
      "name",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      value => /^[a-zA-Zа-яА-ЯёЁіІїЇ ]+((['][a-zA-Zа-яА-ЯёЁіІїЇ ])?[a-zA-Zа-яА-ЯёЁіІїЇ]*)*$/.test(value)
    )
    .required('Required'),
    number: Yup.string()
    .test(
      "number",
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
      value =>
        /\+?[0-9\s.\-()]{1,}$/.test(
          value
        )
    )
    .required('Required'),
 });

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (contact, actions)=> {
        console.log('hi')
        const isExist = contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
            || item.number === contact.number
        );
    
        if (isExist) {
           toast.error(`${contact.name} or ${contact.number} is already in contacts.`);
            return;
        }

        dispatch(addContact(contact));
        actions.resetForm();
  };
    return (
        <Formik
            initialValues={
                {
                    name: "",
                    number: "",
                }}
            onSubmit={(contact, actions) => handleSubmit(contact, actions)}
            validationSchema={ContactSchema}
        >
            <StyledForm>
                 <Label> Name:
                <StyledField name="name" type="text" />
                    <ErrorMsg name="name" component="div"/>
                </Label>
                <Label> Number: 
                <StyledField name="number" type="tel" />
                    <ErrorMsg name="number" component="div"/>
                    </Label>
                <Button type="submit">Add contact</Button>
            </StyledForm>
        </Formik >
    )
}

