import { ContactSchema } from "components/ContactForm/ContactForm";
import { ErrorMsg, Label, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";
import { Formik } from "formik";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editContact } from 'redux/operations';
import { customStyles, ModalContainer, SaveButton, CancelButton } from "./ContactModal.styled";
import { RiSaveLine } from 'react-icons/ri';
import { MdCancelPresentation } from 'react-icons/md';

const ContactEditModal = ({ isOpen, contact, onRequestClose }) => {
   const initialValues = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
  };
  const dispatch = useDispatch();

  const handleSave = (values) => {
    dispatch(editContact(values));
    onRequestClose();
};
  return (
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
          style={customStyles}>
          <ModalContainer>
        <h2>Edit Contact</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={handleSave}
        >
          <StyledForm>
            <div>
              <Label>Name:</Label>
              <StyledField type="text" name="name" />
              <ErrorMsg name="name" component="div" />
            </div>
            <div>
              <Label>Phone:</Label>
              <StyledField type="tel" name="phone" />
              <ErrorMsg name="phone" component="div" />
            </div>
            <div>
              <SaveButton type="submit"><RiSaveLine size={24}/></SaveButton>
            <CancelButton onClick={onRequestClose}><MdCancelPresentation size={24}/></CancelButton>
                          
            </div>
          </StyledForm>
              </Formik>
          </ModalContainer>
      </Modal>
  );
};

export default ContactEditModal;