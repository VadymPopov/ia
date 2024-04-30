import axios from 'axios';
import { toast } from 'react-hot-toast';

const currentURL =
  window.location.protocol + '//' + window.location.hostname + '/api/';

axios.defaults.baseURL = currentURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = async credentials => {
  try {
    const resp = await axios.post('/admin/login', credentials);
    setAuthHeader(resp.data);
    localStorage.setItem('token', resp.data);
  } catch (error) {
    toast.error('The email address or password is incorrect. Please retry', {
      duration: 3000,
    });
  }
};

export const logOut = async () => {
  try {
    await axios.post('/admin/logout');
    clearAuthHeader();
    localStorage.clear();
  } catch (error) {
    return error.message;
  }
};

export const refreshAdmin = async () => {
  try {
    const token = localStorage.getItem('token');
    setAuthHeader(token);

    const response = await axios.get('/admin/check');
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
    } else {
      toast.error('Something went wrong. Please retry', {
        duration: 3000,
      });
    }
    return error.response;
  }
};

export const getAppointments = async () => {
  try {
    const resp = await axios.get('/appointments');
    return resp.data;
  } catch (error) {
    toast.error('Oops! Something went wrong. Please retry later', {
      duration: 3000,
    });
  }
};

export const getAppointmentsByDate = async date => {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      return;
    }
    const resp = await axios.get(`/appointments?date=${date}`);
    return resp.data;
  } catch (error) {
    toast.error('Oops! Something went wrong. Please retry later', {
      duration: 3000,
    });
  }
};

export const getAppointmentsByMonth = async month => {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      return;
    }
    const resp = await axios.get(`/appointments?month=${month}`);
    return resp.data;
  } catch (error) {
    toast.error('Oops! Something went wrong. Please retry later', {
      duration: 3000,
    });
  }
};

export const updateAppointment = async (id, data) => {
  try {
    const response = await axios.put(`/appointments/${id}`, data);
    return response;
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const deleteAppointment = async id => {
  try {
    await axios.delete(`/appointments/${id}`);
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const sendFileToBackend = async data => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post('/send', formData);
    return response.status;
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const bookAppointment = async data => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = await axios.post('/appointments', formData);
    return response;
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const getAvailableSlots = async (date, duration) => {
  try {
    const response = await axios.get(
      `/appointments/slots?date=${date}&duration=${duration}`
    );

    return response.data;
  } catch (error) {
    toast.error(`${error.message}`, {
      duration: 3000,
    });
  }
};

export const getPublishableKey = async () => {
  try {
    const response = await axios.get('/stripe/config');
    return response.data.publishableKey;
  } catch (error) {
    console.error(error);
  }
};

export const createPaymentIntentBooking = async (service, email) => {
  try {
    const response = await axios.post(
      `/stripe/create-payment-intent/${service}`,
      { email }
    );
    return response.data.clientSecret;
  } catch (error) {
    console.error(error);
  }
};

export const createPaymentIntentAfterService = async (email, amount) => {
  try {
    const response = await axios.post('/stripe/create-payment-intent/', {
      email,
      amount,
    });
    return response.data.clientSecret;
  } catch (error) {
    console.error(error);
  }
};

export const paymentConfirmation = async data => {
  try {
    const response = await axios.post('/payment-confirmation/', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
