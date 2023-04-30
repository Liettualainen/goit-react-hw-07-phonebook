import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReduce } from './filerSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReduce },
});