import axios from 'axios';
import { toast } from "react-hot-toast";

const currentURL = window.location.protocol + "//" + window.location.hostname  + "/api/";

axios.defaults.baseURL = currentURL;

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = async (credentials) => {
    try {
      const resp = await axios.post('/admin/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(resp.data);
      localStorage.setItem('token', resp.data);
    } catch (error) {
      toast.error("The email address or password is incorrect. Please retry", {
        duration: 3000,
      });
    }
  };

export const logOut =  async () => {
  try {
    await axios.post('/admin/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
    localStorage.clear();
  } catch (error) {
    return error.message;
  }
};

export const refreshUser = async () => {
  try {
    const token = localStorage.getItem('token');

    if(!token) {
      return 
    }

    setAuthHeader(token);
  } catch (error) {
    toast.error("Something went wrong. Please retry", {
      duration: 3000,
    });
  }
};

export const getAppointments = async () => {
    try {
      const resp = await axios.get('/appointments');
      return resp.data;

    } catch (error) {
      toast.error("Oops! Something went wrong. Please retry later", {
        duration: 3000,
      });
    }
  };

export const getAppointmentsByDate = async (date) => {
    try {
      if(!axios.defaults.headers.common.Authorization) {
        return;
      }
      const resp = await axios.get(`/appointments?date=${date}`);
      return resp.data;

    } catch (error) {
      toast.error("Oops! Something went wrong. Please retry later", {
        duration: 3000,
      });
    }
};

export const getAppointmentsByMonth = async (month) => {
    try {
      if(!axios.defaults.headers.common.Authorization) {
        return;
      }
      const resp = await axios.get(`/appointments?month=${month}`);
      return resp.data;

    } catch (error) {
      toast.error("Oops! Something went wrong. Please retry later", {
        duration: 3000,
      });
    }
  };

  export const updateAppointment = async (id,data) => {
    try {
      const response = await axios.put(`/appointments/${id}`, data);
      return response;
    } catch (error) {
      toast.error(`${error.message}`, {
        duration: 3000,
      });
    }
  };
  
  export const deleteAppointment = async (id) => {
    try {
      await axios.delete(`/appointments/${id}`);
    } catch (error) {
      toast.error(`${error.message}`, {
        duration: 3000,
      });
    }
  };

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
    return response;
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
};

export const createPaymentIntent = async (service, email) => {
  try {
    const  response = await axios.post(`/stripe/create-payment-intent/${service}`, {email});
    return response.data.clientSecret;
  } catch (error) {
   console.error(error)
  }
};