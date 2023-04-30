import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, } from 'redux/operations';

const fetchInProgress = state => {
  state.isLoading = true;
};
const fetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const fetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: fetchInProgress,
    [fetchContacts.fulfilled]: fetchFulfilled,
    [fetchContacts.rejected]: fetchError,

    [addContact.pending]: fetchInProgress,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: fetchError,

    [deleteContact]: fetchInProgress,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);},
    [deleteContact.rejected]: fetchError,
  },
});

export const contactsReducer = contactsSlice.reducer;