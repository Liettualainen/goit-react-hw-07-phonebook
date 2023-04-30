import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;
export const selectContactId = state => state.contacts.items.id;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectValueFilter = state => state.filter.value;



export const selectFilteredContacts = createSelector(
    [selectContacts, selectValueFilter],
    (contacts, value) => {
      const filterToLowerCase = value.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterToLowerCase)
      
    );
  }
);
