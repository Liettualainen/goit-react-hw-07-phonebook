import Contact from './Contact';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';



export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
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