import { Contact } from "components/Contact/Contact"
import { List, ListItem } from "./ContactList.styled"
import {useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Filter } from "components/Filter/Filter";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <Filter/>
     <List>
        {sortedContacts.map(item => (
            <ListItem key={item.id}>
            <Contact contact={item}/>
            </ListItem>
      ))}
      </List>
    </>
 )
}

