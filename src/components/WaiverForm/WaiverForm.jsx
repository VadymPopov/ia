import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import toast from 'react-hot-toast';
import SignatureField from 'components/Signature';
import Button from 'components/Button';
import {
  FormWrapper,
  InputContainer,
  Input,
  CustomDatePicker,
  Title,
  InputLabel,
  FlexContainer,
  Text,
  CheckboxLabel,
  StyledSelect,
  Container,
  Legend,
  FieldSet,
  ErrorMain,
  HintText,
} from './WaiverForm.styled';
import Loader from 'components/BtnLoader';

import {
  validationSchemaWaiverForm,
  FormError,
  initialValuesWaiver,
} from 'utils/formik';
import { verifyClientLegalAge } from '../../utils/ageVerification';
import PdfContent from 'components/PdfContent';
import { usePDF } from '@react-pdf/renderer';
import { sendFileToBackend } from '../../api';
import { useNavigate } from 'react-router-dom';

const WaiverForm = () => {
  const [formValues, setFormValues] = useState(null);
  const [isClientUnder18, setIsClientUnder18] = useState(false);
  const [instance, update] = usePDF({});
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFileGenerate = async values => {
    setIsProcessing(true);
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] =
        typeof values[key] === 'string' ? values[key].trim() : values[key];
      return acc;
    }, {});

    setFormValues(trimmedValues);
    update(
      <PdfContent values={trimmedValues} isClientUnder18={isClientUnder18} />
    );
    setIsProcessing(false);
  };

  const handleFileSubmit = async () => {
    setIsProcessing(true);
    const { email, name, phone, address } = formValues;
    const response =
      instance.blob &&
      (await sendFileToBackend({
        file: instance.blob,
        email,
        name,
        phone,
        address,
      }));
    setIsProcessing(false);
    if (response === 200) {
      toast.success('The form was successfully submitted!', {
        duration: 3000,
      });
      navigate('/faq');
    }
  };

  return (
    <Formik
      initialValues={initialValuesWaiver}
      validationSchema={validationSchemaWaiverForm(isClientUnder18)}
      onSubmit={handleFileGenerate}
    >
      {({ isValid }) => (
        <FormWrapper autoComplete="off" className="waiver">
          <FieldSet>
            <Legend>Client Information:</Legend>
            <FlexContainer>
              <InputContainer>
                <InputLabel htmlFor="name">Full Name</InputLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <FormError name="name" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="user-birthday">Birthday Date</InputLabel>
                <Input name="dob" aria-label="user-birthday" id="user-birthday">
                  {({ field, form }) => (
                    <CustomDatePicker
                      {...field}
                      showIcon
                      selected={field.value}
                      onChange={date => {
                        form.setFieldValue(field.name, date);
                        setIsClientUnder18(verifyClientLegalAge(date));
                      }}
                      maxDate={new Date()}
                      minDate={new Date(1923, 0, 1)}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={100}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                </Input>
                <FormError name="dob" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>Phone number</InputLabel>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="5551234567"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <FormError name="phone" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  title="Email must contain an “@” symbol before the domain"
                />
                <FormError name="email" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>
                  Address (street, city, province,postal code)
                </InputLabel>
                <Input
                  name="address"
                  type="text"
                  placeholder="123 Main St, Toronto, ON"
                  title="Enter your full address including street, city, province, and postal code"
                />
                <FormError name="address" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>
                  Government Issue ID # (license, passport, SIN, etc.)
                </InputLabel>
                <Input
                  name="governmentId"
                  type="text"
                  placeholder="123456789"
                  title="Enter your Social Insurance Number (SIN) without spaces or dashes"
                />
                <FormError name="governmentId" component="span" />
              </InputContainer>
            </FlexContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Description of Activity:</Legend>
            <FlexContainer>
              <InputContainer>
                <InputLabel>What service are you receiving ?</InputLabel>
                <Field name="service" as={StyledSelect}>
                  <option value="">Select a service</option>
                  <option value="Tattoo">Tattoo</option>
                  <option value="Permanent Makeup">Permanent Makeup</option>
                </Field>
                <FormError name="service" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel>
                  The tattoo will be placed on the following body part:
                </InputLabel>
                <Input
                  name="bodyPart"
                  type="text"
                  placeholder="tattoo placement"
                />
                <FormError name="bodyPart" component="span" />
              </InputContainer>
            </FlexContainer>

            <FlexContainer>
              <InputContainer>
                <InputLabel>
                  The design is described as follows (including style, theme,
                  elements, or specific instructions):
                </InputLabel>
                <Input name="design" type="text" placeholder="tattoo design" />
                <FormError name="design" component="span" />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="date">Appointment Date</InputLabel>
                <Input name="date" aria-label="appointment-date" id="date">
                  {({ field, form }) => (
                    <CustomDatePicker
                      {...field}
                      showIcon
                      selected={field.value}
                      onChange={date => form.setFieldValue(field.name, date)}
                      minDate={new Date()}
                    />
                  )}
                </Input>
                <FormError name="date" component="span" />
              </InputContainer>
            </FlexContainer>
          </FieldSet>

          <Text>
            In consideration of receiving a tattoo/permanent makeup (hereinafter
            referred to as the "tattoo") from ALINA IVENKO (hereinafter referred
            to as the "Tattoo Artist"), I voluntarily agree to the following
            terms and conditions. I acknowledge that the tattooing process
            involves inherent risks, uncertainties, and potential discomfort.
          </Text>

          <FieldSet>
            <Legend>Waiver and Release:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="waveRelease">
                <Input name="waveRelease" type="checkbox" id="waveRelease" />I
                WAIVE AND RELEASE to the fullest extent permitted by law the
                Tattoo Artist from all claims, demands, or liabilities arising
                from the tattooing process, including personal injury or any
                direct and/or consequential damages resulting from the
                application of my tattoo. This waiver includes any negligence or
                fault on the part of the Tattoo Artist.
              </CheckboxLabel>
              <FormError name="waveRelease" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Assumption of Risk</Legend>
            <Text>
              {' '}
              I have been fully informed of the inherent risks associated with
              getting a tattoo. Therefore, I fully understand and accept the
              potential risks, both known and unknown, involved in the tattooing
              process, including but are not limited to:
            </Text>

            <Title>Pain and Discomfort:</Title>
            <InputContainer>
              <CheckboxLabel htmlFor="pain">
                <Input name="pain" type="checkbox" id="pain" />I understand that
                the tattooing process may involve pain, discomfort, and
                potential physical reactions. I am voluntarily choosing to
                undergo this procedure despite these potential sensations.
              </CheckboxLabel>
              <FormError name="pain" component="span" />
            </InputContainer>

            <Title>Infection and Allergic Reactions:</Title>
            <InputContainer>
              <CheckboxLabel htmlFor="infection">
                <Input name="infection" type="checkbox" id="infection" />I am
                aware that there is a risk of infection, allergic reactions, or
                other adverse skin reactions as a result of the tattooing
                process. I understand that the Tattoo Artist will follow
                appropriate hygiene and safety measures, but I acknowledge that
                these risks still exist.
              </CheckboxLabel>
              <FormError name="infection" component="span" />
            </InputContainer>

            <Title>Healing Process:</Title>
            <InputContainer>
              <CheckboxLabel htmlFor="healing">
                <Input name="healing" type="checkbox" id="healing" />I
                understand that the healing process varies among individuals,
                and I am responsible for proper aftercare. I acknowledge that
                proper aftercare, as instructed by the Tattoo Artist, is
                essential for optimal healing. Any complications or
                unsatisfactory healing that may occur are my responsibility. Any
                touch-up work needed due to my negligence will be at my own
                expense.
              </CheckboxLabel>
              <FormError name="healing" component="span" />
            </InputContainer>

            <Title>Tattoo Outcome:</Title>
            <InputContainer>
              <CheckboxLabel htmlFor="outcome">
                <Input name="outcome" type="checkbox" id="outcome" />I
                acknowledge that the final appearance of the tattoo, including
                color, placement, size, and design, may vary due to individual
                skin characteristics, healing process, and artistic
                interpretation. I understand that the Tattoo Artist will
                exercise their professional judgment in delivering the best
                possible outcome, but I accept that there may be variations. I
                acknowledge that the Tattoo Artist is not accountable for the
                accuracy, meaning, or spelling of the symbols, text, or dates
                that I have provided or selected from the flash (design) sheets.
                I am fully responsible for verifying these details prior to
                getting the tattoo.
              </CheckboxLabel>
              <FormError name="outcome" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>No Refunds:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="refund">
                <Input name="refund" type="checkbox" id="refund" />I acknowledge
                and accept the Tattoo Artist's NO REFUND policy for tattoos. I
                understand that the tattoo deposit is non-refundable and that I
                must provide at least 1 week's notice to reschedule or change my
                appointment. Failure to do so will require the purchase of a new
                deposit.
              </CheckboxLabel>
              <FormError name="refund" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Acknowledgement of Permanent Change:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="permanentChange">
                <Input
                  name="permanentChange"
                  type="checkbox"
                  id="permanentChange"
                />
                I understand that a tattoo is a permanent change to my
                appearance, and there are no guarantees for future changes or
                removal. Modifying or removing a tattoo can be expensive,
                potentially disfiguring, and may not fully restore my skin to
                its original appearance.
              </CheckboxLabel>
              <FormError name="permanentChange" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Media Consent:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="media">
                <Input name="media" type="checkbox" id="media" />I acknowledge
                that the Tattoo Artist retains full rights to utilize any
                photographs or videos of my tattoo, and I willingly grant
                consent for such visual media to be captured during and after my
                tattoo procedure.
              </CheckboxLabel>
              <FormError name="media" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Age and Identification:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="age">
                <Input name="age" type="checkbox" id="age" />I confirm that I am
                either at least 18 years old or have a legal guardian present.
                In both cases, all parties involved will provide
                government-issued photo identification as required.
              </CheckboxLabel>
              <FormError name="age" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend>Acknowledgement of Agreement:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="agreement">
                <Input name="agreement" type="checkbox" id="agreement" />
                By signing below, I confirm that I have read and understood the
                entire content of this form, including the terms and provisions
                stated. I am fully aware that this agreement contains a waiver
                of rights, and I acknowledge that it is a unilateral agreement
                with significant obligations. If any part of this release is
                found to be unenforceable or invalid, that specific portion will
                be removed, while the rest of the contract remains valid and
                enforceable. I understand that by signing this form, I am
                acknowledging that I have had the opportunity to seek
                clarification and have any questions answered regarding its
                contents. I willingly and voluntarily agree to be bound by the
                terms of this agreement without any objections or reservations.
              </CheckboxLabel>
              <FormError name="agreement" component="span" />
            </InputContainer>
          </FieldSet>

          <FieldSet>
            <Legend> Drugs/Alcohol and Medical Conditions:</Legend>
            <InputContainer>
              <CheckboxLabel htmlFor="drugs">
                <Input name="drugs" type="checkbox" id="drugs" />I confirm that
                I am not under the influence of alcohol or drugs and I willingly
                choose to be tattooed by the Tattoo Artist without any duress or
                coercion.
              </CheckboxLabel>
              <FormError name="drugs" component="span" />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="desease">
                <Input name="desease" type="checkbox" id="desease" />I confirm
                that I do not have diabetes, epilepsy, hemophilia, or any heart
                condition(s) that could potentially hinder the tattooing
                procedure or present additional risks.
              </CheckboxLabel>
              <FormError name="desease" component="span" />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="medication">
                <Input name="medication" type="checkbox" id="medication" />I
                confirm that I am not currently taking any blood thinning
                medication that may increase the risk of excessive bleeding
                during the tattooing process.
              </CheckboxLabel>
              <FormError name="medication" component="span" />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="skin">
                <Input name="skin" type="checkbox" id="skin" />I confirm that I
                do not have any other medical or skin conditions that could
                potentially interfere with the procedure, application, or
                healing of the tattoo, including active infections, open wounds,
                skin disorders, or a compromised immune system.
              </CheckboxLabel>
              <FormError name="skin" component="span" />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="recipientOrgan">
                <Input
                  name="recipientOrgan"
                  type="checkbox"
                  id="recipientOrgan"
                />
                I confirm that I am not a recipient of an organ or bone marrow
                transplant. If I am, I have diligently followed my doctor's
                prescribed preventative regimen of antibiotics in preparation
                for any invasive procedure, such as tattooing.
              </CheckboxLabel>
              <FormError name="recipientOrgan" component="span" />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="pregnancy">
                <Input name="pregnancy" type="checkbox" id="pregnancy" />
                If applicable, I confirm that I am not currently pregnant or
                nursing at the time of receiving the tattoo.
              </CheckboxLabel>
              <FormError name="pregnancy" component="span" />
            </InputContainer>
          </FieldSet>

          <Text>
            If single-use presterilized equipment is used please provide Lot/ID
            number
          </Text>
          <InputContainer>
            <InputLabel htmlFor="lot">lot/ID #:</InputLabel>
            <Input name="lot" type="text" placeholder="Lot/ID" />
            <FormError name="lot" component="span" />
          </InputContainer>

          {!isClientUnder18 && (
            <FieldSet>
              <Legend>Client Signature:</Legend>
              <SignatureField
                canvasProps={{
                  width: 500,
                  height: 200,
                  style: { border: '1px solid #9DA4BD', borderRadius: '5px' },
                }}
                label="signatureField"
                name="signatureField"
              />
            </FieldSet>
          )}

          {isClientUnder18 && (
            <FieldSet>
              <Legend>FOR CLIENTS UNDER 18</Legend>
              <Title>Parental/Guardian Consent:</Title>
              <InputContainer>
                <CheckboxLabel htmlFor="parentalConsent">
                  <Input
                    name="parentalConsent"
                    type="checkbox"
                    id="parentalConsent"
                  />
                  As the parent or legal guardian, I hereby provide my consent
                  for my child to receive tattooing services. I confirm that I
                  have read and understood the contents of this form, and I
                  agree to be bound by its terms and conditions. Additionally, I
                  acknowledge that I will provide both my government-issued
                  photo identification and my child's government-issued photo
                  identification as required.
                </CheckboxLabel>
                <FormError name="parentalConsent" component="span" />
              </InputContainer>

              <Title>Parental/Guardian Information:</Title>
              <FlexContainer>
                <InputContainer>
                  <InputLabel htmlFor="parentalName">Full Name</InputLabel>
                  <Input
                    name="parentalName"
                    type="text"
                    placeholder="John Doe"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  />
                  <FormError name="parentalName" component="span" />
                </InputContainer>
                <InputContainer>
                  <InputLabel>
                    Government Issue ID # (license, passport, SIN, etc.)
                  </InputLabel>
                  <Input
                    name="parentGovernmentId"
                    type="text"
                    placeholder="123456789"
                    title="Enter your Social Insurance Number (SIN) without spaces or dashes"
                  />
                  <FormError name="parentGovernmentId" component="span" />
                </InputContainer>
              </FlexContainer>

              <Title>Parental/Guardian Signature:</Title>
              <SignatureField
                canvasProps={{
                  width: 500,
                  height: 200,
                  style: { border: '1px solid #9DA4BD', borderRadius: '5px' },
                }}
                label="parentalSignatureField"
                name="parentalSignatureField"
              />
            </FieldSet>
          )}
          <Container>
            {!isValid ? (
              <ErrorMain>
                "Oops! It looks like you forgot to fill in some required fields.
                Please review the form and make sure all required information is
                provided."
              </ErrorMain>
            ) : null}

            {!instance.blob && isValid && (
              <>
                <HintText>Press the button to generate the file</HintText>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      Processing
                      <Loader />
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
              </>
            )}

            {instance.blob && (
              <>
                <HintText>Now, press the button to submit the file</HintText>
                <Button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleFileSubmit}
                >
                  {isProcessing ? (
                    <>
                      Processing
                      <Loader />
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </>
            )}
          </Container>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default WaiverForm;
