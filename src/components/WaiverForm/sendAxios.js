import axios from 'axios';

// Assuming you have the Blob file in the variable 'pdfBlob'
axios.defaults.baseURL = 'https://jubilant-potato.onrender.com';

export const sendFileToBackend = async ({file, email, name, phone, address}) => {
  try {
    // console.log(file, email, name, phone, address);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    console.log(file, email, name, phone, address);

    const response = await axios.post('/send', formData);

    if (response.status === 200) {
      console.log('PDF file uploaded successfully');
    } else {
      console.error('Error uploading PDF file');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

