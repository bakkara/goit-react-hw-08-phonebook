import { Toaster } from "react-hot-toast";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { LayoutContainer } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  // const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();
  /* const isLoading = useSelector(selectIsLoading); */
  // const error = useSelector(selectError);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
    /* return (
      <LayoutContainer>
        <h1>Phonebook</h1>
        
        <ContactForm />
        <h2>Contacts</h2>
        
        <Filter />
        {isLoading && !error && <Loader/>}
        {contacts.length === 0 && (
          <p>There are no any contacts ... </p>)}
        <ContactList />
        
        <Toaster/>
     </LayoutContainer>
    );  */
  }
