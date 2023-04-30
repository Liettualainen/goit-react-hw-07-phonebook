import Contact from './Contact';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';


// const filterContacts = (items, value) => {
//   const lowCaseFilter = value.toLowerCase();
//   return items.filter(el => el.name.toLowerCase().includes(lowCaseFilter));
// };


export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  // const value = useSelector(selectValueFilter);

  // const filteredContacts = filterContacts(contacts, value);

  return (
    <ul >
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};