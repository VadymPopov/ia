import { ErrorMessage } from 'formik';
import { ErrorText } from '../components/WaiverForm/WaiverForm.styled';
import * as Yup from 'yup';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const nameRegExp = /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)/;

export const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const governmentId = /^[-\sA-Za-z0-9]+$/;

const addressRegex = /^[0-9a-zA-Z\s.,-]+\s*$/;

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().min(10).required(),
  password: Yup.string().min(6).required(),
});

export const validationSchemaBooking = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(
        nameRegExp,
        'Please enter a valid name without spaces at the beggining'
      )
      .required('Name is required'),
    email: Yup.string()
      .matches(emailRegExp, 'Please enter a valid email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Please enter a valid phone number')
      .required('Phone number is required'),
    service: Yup.string().required('Service is required'),
    slot: Yup.string().required('Date and Time is required'),
  });
};

export const validationSchemaTime = Yup.object().shape({
  slot: Yup.string().required('Date and Time is required'),
});

export const validationSchemaClient = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(nameRegExp, 'Please enter a valid name')
      .required('Name is required'),
    email: Yup.string()
      .matches(emailRegExp, 'Please enter a valid email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Please enter a valid phone number')
      .required('Phone number is required'),
  });
};

export const validationSchemaWaiverForm = isClientUnder18 => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(nameRegExp, 'Please enter a valid name')
      .required('Name is required'),
    email: Yup.string()
      .matches(emailRegExp, 'Please enter a valid email')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Please enter a valid phone number')
      .required('Phone number is required'),
    governmentId: Yup.string()
      .matches(governmentId, 'Please enter a valid government-issued ID number')
      .required('Government ID is required'),
    dob: Yup.string().required('Birthday date is required'),
    address: Yup.string()
      .matches(
        addressRegex,
        'Please enter a valid address with no trailing spaces'
      )
      .required('Address is required'),
    bodyPart: Yup.string()
      .matches(nameRegExp, 'Please enter a valid body part')
      .required('Body part is required'),
    design: Yup.string()
      .matches(nameRegExp, 'Please enter a valid design description')
      .required('Design is required'),
    service: Yup.string().required('Service is required'),
    date: Yup.string().required('Date is required'),
    waveRelease: Yup.boolean()
      .oneOf([true], 'Please accept the Wave Release field')
      .required('Wave Release is required'),
    pain: Yup.boolean()
      .oneOf([true], 'Please accept the Pain field')
      .required('Pain is required'),
    infection: Yup.boolean()
      .oneOf([true], 'Please accept the Infection field')
      .required('Infection is required'),
    healing: Yup.boolean()
      .oneOf([true], 'Please accept the Healing field')
      .required('Healing is required'),
    outcome: Yup.boolean()
      .oneOf([true], 'Please accept the Outcome field')
      .required('Outcome is required'),
    refund: Yup.boolean()
      .oneOf([true], 'Please accept the Refund field')
      .required('Refund is required'),
    permanentChange: Yup.boolean()
      .oneOf([true], 'Please accept the Permanent Change field')
      .required('Permanent Change is required'),
    media: Yup.boolean()
      .oneOf([true], 'Please accept the Media field')
      .required('Media is required'),
    age: Yup.boolean()
      .oneOf([true], 'Please accept the Age field')
      .required('Age is required'),
    agreement: Yup.boolean()
      .oneOf([true], 'Please accept the Agreement field')
      .required('Agreement is required'),
    drugs: Yup.boolean()
      .oneOf([true], 'Please accept the Drugs field')
      .required('Drugs is required'),
    desease: Yup.boolean()
      .oneOf([true], 'Please accept the Disease field')
      .required('Disease is required'),
    medication: Yup.boolean()
      .oneOf([true], 'Please accept the Medication field')
      .required('Medication is required'),
    skin: Yup.boolean()
      .oneOf([true], 'Please accept the Skin field')
      .required('Skin is required'),
    recipientOrgan: Yup.boolean()
      .oneOf([true], 'Please accept the Recipient Organ field')
      .required('Recipient Organ is required'),
    lot: Yup.string().required('Lot is required'),
    signatureField: Yup.string().when([], {
      is: () => isClientUnder18 === false,
      then: schema => schema.required('Please provide a signature'),
      otherwise: schema => schema,
    }),
    parentalSignatureField: Yup.string().when([], {
      is: () => isClientUnder18 === true,
      then: schema => schema.required('Please provide a signature'),
      otherwise: schema => schema,
    }),
    parentalConsent: Yup.boolean().when([], {
      is: () => isClientUnder18 === true,
      then: schema =>
        schema
          .oneOf([true], 'Please accept the Consent field')
          .required('Parental/Guardian consent is required for minors.'),
      otherwise: schema => schema,
    }),
    parentalName: Yup.string().when([], {
      is: () => isClientUnder18 === true,
      then: schema =>
        schema
          .min(3)
          .matches(nameRegExp, 'Please enter a valid name')
          .required('Parental/Guardian name is required.'),
      otherwise: schema => schema,
    }),
    parentGovernmentId: Yup.string().when([], {
      is: () => isClientUnder18 === true,
      then: schema =>
        schema
          .matches(
            governmentId,
            'Please enter a valid government-issued ID number'
          )
          .required('Parental/Guardian Government ID is required.'),
      otherwise: schema => schema,
    }),
  });
};

export const initialValuesWaiver = {
  name: '',
  email: '',
  phone: '',
  governmentId: '',
  dob: '',
  address: '',
  service: '',
  bodyPart: '',
  design: '',
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

export const validationSchemaAdmin = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .matches(
      nameRegExp,
      'Please enter a valid name without spaces at the beggining'
    )
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Please enter a valid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
    .required('Phone number is required'),
  service: Yup.string().required('Service is required'),
  slot: Yup.string().required('Date and Time is required'),
  date: Yup.string().required('Date is required'),
  duration: Yup.number().test(
    'is-divisible-by-30',
    'Number must be divisible by 30',
    value => {
      return value % 30 === 0;
    }
  ),
});

export const validationSchemaPaymentForm = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(nameRegExp, 'Please enter a valid name')
      .required('Name is required'),
    email: Yup.string()
      .matches(emailRegExp, 'Please enter a valid email')
      .required('Email is required'),
    amount: Yup.number()
      .positive('Amount must be a positive number')
      .required('Amount is required'),
  });
};
