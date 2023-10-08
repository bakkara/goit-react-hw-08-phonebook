import { Toaster } from "react-hot-toast";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
   
  useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <Layout>
        <h1>Phonebook</h1>
        
        <ContactForm />
        <h2>Contacts</h2>
        
        <Filter />
        {isLoading && !error && <Loader/>}
        {contacts.length === 0 && (
          <p>There are no any contacts ... </p>)}
        <ContactList />
        
        <Toaster/>
     </Layout>
    ); 
  }
