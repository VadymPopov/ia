import axios from 'axios';
import { toast } from "react-hot-toast";
// import getStripe from 'getStripe';

// Assuming you have the Blob file in the variable 'pdfBlob'
axios.defaults.baseURL = 'https://jubilant-potato.onrender.com';

export const sendFileToBackend = async ({file, email, name, phone, address}) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);

    const response = await axios.post('/send', formData);

    if (response.status === 200) {
      toast.success('The form was successfully submitted!', {
        duration: 3000,
      });
    }
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const bookAppointment = async (data) => {
  try {
    const response = await axios.post('/appointments', data);

    if (response.status === 201) {
      toast.success('The appointment was successfully booked!', {
        duration: 3000,
      });
    }
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const getAvailableSlots = async(date,duration) => {
  try {
    const response = await axios.get(`/appointments/slots?date=${date}&duration=${duration}`);

    return response.data; 
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const getPublishableKey = async () => {
 try {
   const  response = await axios.get('/stripe/config');
   return response.data.publishableKey;
 } catch (error) {
  console.error(error)
 }
}

export const createPaymentIntent = async (service) => {
  try {
    const  response = await axios.post(`/stripe/create-payment-intent/${service}`, {});
    return response.data.clientSecret;
  } catch (error) {
   console.error(error)
  }
 }