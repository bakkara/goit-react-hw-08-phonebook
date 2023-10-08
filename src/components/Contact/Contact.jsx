
import { ContactWrapper, DeleteButton, EditButton, TextContact } from "./Contact.styled"
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from "react";
import ContactEditModal from "components/ContactModal/ContactModal";
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

export const Contact = ({
    contact: { id, name, phone },
}) => {
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditModalClose = () => {
    setIsEditing(false);
  };
    return (
      <ContactWrapper>
        <TextContact>
          <p>{name}: </p>
          <p> {phone}</p>
        </TextContact>
        
        <DeleteButton onClick={() => dispatch(deleteContact(id))}><RiDeleteBinLine size={24} /></DeleteButton>
        <EditButton onClick={handleEditClick}><RiEditLine size={24}/></EditButton>
      {isEditing && (
          <ContactEditModal
            isOpen = {isEditing}
          contact={{ id, name, phone }}
          onRequestClose={handleEditModalClose}
        />
      )}
        </ContactWrapper>
    )
}
