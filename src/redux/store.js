import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/redusers";

const rootReducer = combineReducers({
  contacts: contactsReduser,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
