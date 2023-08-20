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


// export const handleCheckout = async ()=> {
//   const stripe = await getStripe();
//   const { error } = await stripe.redirectToCheckout({
//     lineItems: [
//       {
//         price: process.env.local.REACT_APP_STRIPE_PRICE_ID,
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     successUrl: `http://localhost:3000/success`,
//     cancelUrl: `http://localhost:3000/cancel`,
//     customerEmail: 'customer@email.com',
//   });
//   console.warn(error.message);
// }