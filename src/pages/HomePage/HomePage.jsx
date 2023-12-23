import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services/';
import CallbackForm from '../../components/CallbackForm';
import Contacts from '../../components/Contacts/';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector, successSelector } from '../../store/selectors';
import { useEffect } from 'react';
import {
  notifyError,
  notifySuccess,
} from '../../components/utils/notifications';
import { reset } from '../../store/customerSlice';

const HomePage = () => {
  const success = useSelector(successSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      notifySuccess();
      dispatch(reset());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) {
      notifyError();
      dispatch(reset());
    }
  }, [error, dispatch]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <CallbackForm />
      <Contacts />
      <ToastContainer />
    </>
  );
};

export default HomePage;
