import React from "react";
import s from "./ContactList.module.css";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
// import { removeContact } from "../../redux/contacts/actions";
import { removeContactOperation } from "../../redux/contacts/contactsOperations";
import {
  contactsErrorSelector,
  contactsIsLoadingSelector,
} from "../../redux/contacts/contacts-selectors";

const getWisibileContacts = ({ contacts: { items, filter } }) => {
  if (filter) {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else return items;
};

const ContactList = () => {
  const error = useSelector(contactsErrorSelector);
  const isLoading = useSelector(contactsIsLoadingSelector);
  const contactsList = useSelector(getWisibileContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.menu}>
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}

      {contactsList &&
        contactsList.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={s.btn}
              type="button"
              id={contact.id}
              onClick={() => dispatch(removeContactOperation(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
