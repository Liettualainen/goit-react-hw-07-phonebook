import { useDispatch } from 'react-redux';
import { findContact } from '../redux/filerSlice';
import { FilterStyle, FilterStyleinput } from './Layout.js';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const handleFilterContacts = e => {
    const value = e.target.value;
    dispatch(findContact(value));
  };
  return (
    <FilterStyle >
      <label>Find contacts by name</label>
      <FilterStyleinput
        type="text"
        onChange={handleFilterContacts}
      ></FilterStyleinput>
    </FilterStyle>
  );
};
