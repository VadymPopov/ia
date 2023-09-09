import {  ErrorMessage } from 'formik';
import { ErrorText } from "../components/WaiverForm/WaiverForm.styled";
import * as Yup from 'yup';

export const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

export const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const governmentId = /^[A-Za-z0-9]+$/;

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().min(10).required(),
  password: Yup.string().min(6).required(),
});

export const validationSchemaBooking = () => {
  return Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter a valid name').required('Name is a required field'),
  email: Yup.string().matches(emailRegExp,'Enter a valid email').required('Email is a required field'),
  phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Phone number is a required field'),
  service: Yup.string().required("Service is required"),
  slot: Yup.string().required("Date and Time is required"),
  })
};

export const validationSchemaTime = Yup.object().shape({
  slot: Yup.string().required("Date and Time is required"),
});

export const validationSchemaClient = () => {
  return Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter a valid name').required('Name is a required field'),
  email: Yup.string().matches(emailRegExp,'Enter a valid email').required('Email is a required field'),
  phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Phone number is a required field'),
  })
};

export const validationSchemaWaiverForm = (isClientUnder18) => {
  return Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter a valid name').required('Name is a required field'),
  email: Yup.string().matches(emailRegExp,'Enter a valid email').required('Email is a required field'),
  phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number').required('Phone number is a required field'),
  governmentId: Yup.string().matches(governmentId, 'Enter a valid government-issued ID number').required('Government ID is a required field'),
  dob: Yup.string().required('Birthday date is a required field'),
  address: Yup.string().required('Address is a required field'),
  bodyPart: Yup.string().required('Body part is a required field'),
  design: Yup.string().required('Design is a required field'),
  service: Yup.string().required("Service is required"),
  date: Yup.string().required('Date is a required field'),
  waveRelease: Yup.boolean().oneOf([true], 'Please accept the Wave Release field').required('Wave Release is a required field'),
  pain: Yup.boolean().oneOf([true], 'Please accept the Pain field').required('Pain is a required field'),
  infection: Yup.boolean().oneOf([true], 'Please accept the Infection field').required('Infection is a required field'),
  healing: Yup.boolean().oneOf([true], 'Please accept the Healing field').required('Healing is a required field'),
  outcome: Yup.boolean().oneOf([true], 'Please accept the Outcome field').required('Outcome is a required field'),
  refund: Yup.boolean().oneOf([true], 'Please accept the Refund field').required('Refund is a required field'),
  permanentChange: Yup.boolean().oneOf([true], 'Please accept the Permanent Change field').required('Permanent Change is a required field'),
  media: Yup.boolean().oneOf([true], 'Please accept the Media field').required('Media is a required field'),
  age: Yup.boolean().oneOf([true], 'Please accept the Age field').required('Age is a required field'),
  agreement: Yup.boolean().oneOf([true], 'Please accept the Agreement field').required('Agreement is a required field'),
  drugs: Yup.boolean().oneOf([true], 'Please accept the Drugs field').required('Drugs is a required field'),
  desease: Yup.boolean().oneOf([true], 'Please accept the Disease field').required('Disease is a required field'),
  medication: Yup.boolean().oneOf([true], 'Please accept the Medication field').required('Medication is a required field'),
  skin: Yup.boolean().oneOf([true], 'Please accept the Skin field').required('Skin is a required field'),
  recipientOrgan: Yup.boolean().oneOf([true], 'Please accept the Recipient Organ field').required('Recipient Organ is a required field'),
  lot: Yup.string().required('Lot is a required field'),
  signatureField: Yup.string().when([],{
    is: ()=> isClientUnder18 === false,
    then: (schema) => schema.required('Please provide a signature'),
    otherwise: (schema) => schema
  }),
  parentalSignatureField: Yup.string().when([], {
    is: ()=> isClientUnder18 === true,
    then: (schema) => schema.required('Please provide a signature'),
    otherwise: (schema) => schema}
  ),
  parentalConsent: Yup.boolean().when([], {
    is: ()=> isClientUnder18 === true,
    then: (schema) => schema.oneOf([true], "Please accept the Consent field").required('Parental/Guardian consent is required for minors.'),
    otherwise: (schema) => schema}
  ),
  parentalName: Yup.string().when([],
  {
    is: ()=> isClientUnder18 === true,
    then: (schema) => schema.min(3).matches(nameRegExp, 'Enter a valid name').required('Parental/Guardian name is required.'),
    otherwise: (schema) => schema}
  ),
  parentGovernmentId: Yup.string().when([],
  {
    is: ()=> isClientUnder18 === true,
    then: (schema) => schema.matches(governmentId, 'Enter a valid government-issued ID number').required('Parental/Guardian Government ID is required.'),
    otherwise: (schema) => schema}
  ),
})};


export const initialValuesWaiver = {
    name:'',
    email: '',
    phone: '',
    governmentId: '',
    dob:'',
    address: '',
    service:'',
    bodyPart: '',
    design:'',
    date: new Date(),
    waveRelease: false,
    pain: false,
    infection: false,
    healing: false,
    outcome: false,
    refund: false,
    permanentChange: false,
    media: false,
    age: false,
    agreement: false,
    drugs: false,
    desease: false,
    medication: false,
    skin: false,
    recipientOrgan: false,
    lot: '',
    signatureField: '',
    parentalConsent: false,
    parentalName: '',
    parentGovernmentId: '',
    parentalSignatureField: '',
  };