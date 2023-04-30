import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';

import { DeleteButton, FilterBlock } from './Layout.js';

const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handlerDeleteContact = () => dispatch(deleteContact(id));

  return (
    <label >
      <FilterBlock>
        <span>{name}: </span>
        <span>{phone}: </span>
      </FilterBlock>

      <DeleteButton  onClick={handlerDeleteContact}>
       DELETE
      </DeleteButton>
    </label>
  );
};

export default Contact;

