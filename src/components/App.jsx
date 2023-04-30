import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from './Form';
import { FilterContact } from './FilterContact';
import { ContactsList } from './ContactsList';
import { Loader } from './Loader';

import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

//styles
import 'react-toastify/dist/ReactToastify.css';
import { Layout, Sectionletter, Headerletter, LoaderStyle } from './Layout.js';

// 

export const App = () => {
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Layout >
      <LoaderStyle>
         {isLoading && !error && <Loader />}
      </LoaderStyle>
       
      < Headerletter>Phone book</ Headerletter>
  
      <Form />
      <Sectionletter>Contacts</Sectionletter>
      <div >
        <FilterContact />
        <ContactsList />
      </div>
      <ToastContainer />
    </Layout>
  );
};
