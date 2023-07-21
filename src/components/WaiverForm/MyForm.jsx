import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignatureField from './Signature'; // The path to your SignatureField component

const MyForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here, including the signature value
    console.log(values);
  };

  return (
    <Formik initialValues={{ signatureField: '' }} onSubmit={handleSubmit}>
      <Form>
        {/* Other form fields */}
        {/* ... */}

        {/* Use the SignatureField component directly */}
        <SignatureField name="signatureField" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
