import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContactsOperation } from "../redux/contacts/contactsOperations";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsOperation());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default App;
