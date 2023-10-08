import { Contact } from "components/Contact/Contact"
import { List, ListItem } from "./ContactList.styled"
import {useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

    return (
     <List>
        {contacts.map(item => (
            <ListItem key={item.id}>
            <Contact contact={item}/>
            </ListItem>
      ))}
     </List>
 )
}

