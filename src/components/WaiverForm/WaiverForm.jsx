import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import SignatureCanvas from 'react-signature-canvas';
// import { Notify } from "notiflix";
import { FormWrapper, InputContainer, Input, CustomDatePicker, ClientInfo, Title, InputLabel, FlexContainer, Text, CheckboxLabel } from "./WaiverForm.styled";
import  Button  from "components/Button";
import {nameRegExp, phoneRegExp,emailRegExp, governmentId, FormError} from 'utils/formik';
import styleDatepicker from './datepicker.css';
import NumberFormat from 'react-number-format';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter valid name').required(),
  email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
  phone: Yup.string().matches(phoneRegExp,'Enter valid number').required(),
  governmentId: Yup.string().matches(governmentId,'Enter valid government issue ID number').required(),
});

const WaiverForm = ()=> {
  // const dispatch = useDispatch();

  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);

  // Reference to the signature canvas
  const signatureRef = React.useRef(null);

  // Clear the signature canvas
  const clearSignature = () => {
    signatureRef.current.clear();
    setIsSignatureEmpty(true);
  };

  const handleCanvasChange = () => {
    if (signatureRef.current.isEmpty()) {
      setIsSignatureEmpty(true);
    } else {
      setIsSignatureEmpty(false);
    }
  };

  const initialValues = {
    name:'',
    phone: '',
    email: '',
    date: new Date(),
    dob: null,
  }
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>{
            actions.resetForm();
        }}
      > 

        <FormWrapper autoComplete="off"> 
        <Title>Client Information</Title>

        <ClientInfo>
          <FlexContainer>
          <InputContainer>
            <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input name="name" type="text"  placeholder="John Doe" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
          </InputContainer>

          <InputContainer>
          <InputLabel>Birthday Date</InputLabel>
          <Input name="dob">
            {({ field, form }) => (
              <CustomDatePicker
                {...field}
                showIcon
                selected={field.value}
                onChange={(date) => form.setFieldValue(field.name, date)}
                maxDate={new Date()}
                minDate={new Date(1923, 0, 1)}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                dateFormat="dd/MM/yyyy"
                className={styleDatepicker}
              />
            )}
          </Input>
          <FormError name="dob" component="span" />
        </InputContainer>
        </FlexContainer>

        <FlexContainer>
        <InputContainer>
        <InputLabel>Phone number</InputLabel>
              <Input name="phone" type="tel" placeholder="5551234567"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
          </InputContainer>

          <InputContainer>
          <InputLabel>Email</InputLabel>
              <Input name="email" type="email" placeholder="john.doe@example.com" title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
          </InputContainer>
                    
        </FlexContainer>

        <FlexContainer>
          <InputContainer>
          <InputLabel>Address (street, city, province,postal code)</InputLabel>
              <Input name="address" type="text"  placeholder="123 Main St, Toronto, ON" title="Enter your full address including street, city, province, and postal code" />
              <FormError name="address" component='span' />
          </InputContainer>

          <InputContainer>
              <InputLabel>Government Issue ID # (license, passport, SIN, etc.)</InputLabel>
              <Input name="governmentId" type="text" placeholder="123-456-789" title="Enter your Social Insurance Number (SIN) without spaces or dashes"/>
              <FormError name="governmentId" component='span' />
          </InputContainer>
          </FlexContainer>
          </ClientInfo>

          <Title>Description of Activity:</Title>

        <FlexContainer>
          <InputContainer>
          <InputLabel>What service are you receiving ?</InputLabel>
              <Input name="service" as="select" placeholder="service" >
                <option value="Tattoo">Tattoo</option>
                <option value="Permanent Makeup (Cosmetic Tattoo)">Permanent Makeup (Cosmetic Tattoo)</option></Input>
              <FormError name="service" component='span' />
          </InputContainer>

          <InputContainer>
          <InputLabel>The tattoo will be placed on the following body part:</InputLabel>
              <Input name="bodyPart" type="text" placeholder="tattoo placement"/>
              <FormError name="bodyPart" component='span' />
          </InputContainer>
          </FlexContainer>

          <FlexContainer>
          <InputContainer>
          <InputLabel>The design is described as follows (including style, theme, elements, or specific instructions):</InputLabel>
              <Input name="design" type="text" placeholder="tattoo design"/>
              <FormError name="design" component='span' />
          </InputContainer>

          <InputContainer>
          <InputLabel>Appointment Date</InputLabel>
          <Input name="date">
            {({ field, form }) => (
              <CustomDatePicker
                {...field}
                selected={field.value}
                onChange={(date) => form.setFieldValue(field.name, date)}
                minDate={new Date()}
              />
            )}
          </Input>
          <FormError name="date" component="span" />
        </InputContainer>
        </FlexContainer>

        <Text>In consideration of receiving a tattoo/permanent makeup (hereinafter referred to as the "tattoo") from ALINA IVENKO (hereinafter referred to as the "Tattoo Artist"), I voluntarily agree to the following terms and conditions. I acknowledge that the tattooing process involves inherent risks, uncertainties, and potential discomfort.</Text>

        <Title>Waiver and Release:</Title>
        <InputContainer>
              <CheckboxLabel htmlFor="waveRelease">
              <Input name="waveRelease" type="checkbox" placeholder="waveRelease" />
              I WAIVE AND RELEASE to the fullest extent permitted by law the Tattoo Artist from all claims, demands, or liabilities arising from the tattooing process, including personal injury or any direct and/or consequential damages resulting from the application of my tattoo. This waiver includes any negligence or fault on the part of the Tattoo Artist.
              </CheckboxLabel>
              <FormError name="waveRelease" component='span' />
          </InputContainer>

          <Title>Assumption of Risk:</Title>
        <Text> I have been fully informed of the inherent risks associated with getting a tattoo. Therefore, I fully understand and accept the potential risks, both known and unknown, involved in the tattooing process, including but are not limited to:</Text>

        <Title>Pain and Discomfort:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="pain">
              <Input name="pain" type="checkbox" placeholder="pain" />
              I understand that the tattooing process may involve pain, discomfort, and potential physical reactions. I am voluntarily choosing to undergo this procedure despite these potential sensations.
              </CheckboxLabel>
              <FormError name="pain" component='span' />
          </InputContainer>

          <Title>Infection and Allergic Reactions:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="infection">
              <Input name="infection" type="checkbox" placeholder="infection" />
              I am aware that there is a risk of infection, allergic reactions, or other adverse skin reactions as a result of the tattooing process. I understand that the Tattoo Artist will follow appropriate hygiene and safety measures, but I acknowledge that these risks still exist.
              </CheckboxLabel>
              <FormError name="infection" component='span' />
          </InputContainer>
          <Title>Healing Process:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="healing">
              <Input name="healing" type="checkbox" placeholder="healing" />
              I understand that the healing process varies among individuals, and I am responsible for proper aftercare. I acknowledge that proper aftercare, as instructed by the Tattoo Artist, is essential for optimal healing. Any complications or unsatisfactory healing that may occur are my responsibility. Any touch-up work needed due to my negligence will be at my own expense.
              </CheckboxLabel>
              <FormError name="healing" component='span' />
          </InputContainer>

          <Title>Tattoo Outcome:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="outcome">
              <Input name="outcome" type="checkbox" placeholder="outcome" />
              I acknowledge that the final appearance of the tattoo, including color, placement, size, and design, may vary due to individual skin characteristics, healing process, and artistic interpretation. I understand that the Tattoo Artist will exercise their professional judgment in delivering the best possible outcome, but I accept that there may be variations. I acknowledge that the Tattoo Artist is not accountable for the accuracy, meaning, or spelling of the symbols, text, or dates that I have provided or selected from the flash (design) sheets. I am fully responsible for verifying these details prior to getting the tattoo.
              </CheckboxLabel>
              <FormError name="outcome" component='span' />
          </InputContainer>

          <Title>No Refunds:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="refund">
              <Input name="refund" type="checkbox" placeholder="refund" />
              I acknowledge and accept the Tattoo Artist's NO REFUND policy for tattoos. I understand that the tattoo deposit is non-refundable and that I must provide at least 1 week's notice to reschedule or change my appointment. Failure to do so will require the purchase of a new deposit.
              </CheckboxLabel>
              <FormError name="refund" component='span' />
          </InputContainer>

          <Title>Acknowledgement of Permanent Change:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="permanentChange">
              <Input name="permanentChange" type="checkbox" placeholder="permanentChange" />
              I understand that a tattoo is a permanent change to my appearance, and there are no guarantees for future changes or removal. Modifying or removing a tattoo can be expensive, potentially disfiguring, and may not fully restore my skin to its original appearance.
              </CheckboxLabel>
              <FormError name="permanentChange" component='span' />
          </InputContainer>

          <Title>Media Consent:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="media">
              <Input name="media" type="checkbox" placeholder="media" />
              I acknowledge that the Tattoo Artist retains full rights to utilize any photographs or videos of my tattoo, and I willingly grant consent for such visual media to be captured during and after my tattoo procedure.
              </CheckboxLabel>
              <FormError name="media" component='span' />
          </InputContainer>

          <Title>Age and Identification:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="age">
              <Input name="age" type="checkbox" placeholder="age" />
              I confirm that I am either at least 18 years old or have a legal guardian present. In both cases, all parties involved will provide government-issued photo identification as required.
              </CheckboxLabel>
              <FormError name="age" component='span' />
          </InputContainer>

          <Title>Acknowledgement of Agreement:</Title>
          <InputContainer>
              <CheckboxLabel htmlFor="agreement">
              <Input name="agreement" type="checkbox" placeholder="agreement" />
              By signing below, I confirm that I have read and understood the entire content of this form, including the terms and provisions stated. I am fully aware that this agreement contains a waiver of rights, and I acknowledge that it is a unilateral agreement with significant obligations. If any part of this release is found to be unenforceable or invalid, that specific portion will be removed, while the rest of the contract remains valid and enforceable. I understand that by signing this form, I am acknowledging that I have had the opportunity to seek clarification and have any questions answered regarding its contents. I willingly and voluntarily agree to be bound by the terms of this agreement without any objections or reservations.
              </CheckboxLabel>
              <FormError name="agreement" component='span' />
          </InputContainer>

          <Title> Drugs/Alcohol and Medical Conditions:</Title>
          <div>
            <InputContainer>
              <CheckboxLabel htmlFor="drugs">
              <Input name="drugs" type="checkbox" placeholder="drugs" />
                I confirm that I am not under the influence of alcohol or drugs and I willingly choose to be tattooed by the Tattoo Artist without any duress or coercion.
              </CheckboxLabel>
              <FormError name="drugs" component='span' />
              </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="desease">
              <Input name="desease" type="checkbox" placeholder="desease" />
              I confirm that I do not have diabetes, epilepsy, hemophilia, or any heart condition(s) that could potentially hinder the tattooing procedure or present additional risks.
              </CheckboxLabel>
              <FormError name="desease" component='span' />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="medication">
              <Input name="medication" type="checkbox" placeholder="medication" />
              I confirm that I am not currently taking any blood thinning medication that may increase the risk of excessive bleeding during the tattooing process.
              </CheckboxLabel>
              <FormError name="medication" component='span' />
            </InputContainer>

            
            <InputContainer>
              <CheckboxLabel htmlFor="medication">
              <Input name="medication" type="checkbox" placeholder="medication" />
              I confirm that I do not have any other medical or skin conditions that could potentially interfere with the procedure, application, or healing of the tattoo, including active infections, open wounds, skin disorders, or a compromised immune system.
              </CheckboxLabel>
              <FormError name="medication" component='span' />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="recipientOrgan">
              <Input name="recipientOrgan" type="checkbox" placeholder="recipientOrgan" />
              I confirm that I am not a recipient of an organ or bone marrow transplant. If I am, I have diligently followed my doctor's prescribed preventative regimen of antibiotics in preparation for any invasive procedure, such as tattooing.
              </CheckboxLabel>
              <FormError name="recipientOrgan" component='span' />
            </InputContainer>

            <InputContainer>
              <CheckboxLabel htmlFor="pregnancy">
              <Input name="pregnancy" type="checkbox" placeholder="pregnancy" />
              If applicable, I confirm that I am not currently pregnant or nursing at the time of receiving the tattoo.
              </CheckboxLabel>
              <FormError name="pregnancy" component='span' />
            </InputContainer>
          </div>
          <Text>If single-use presterilized equipment is used please provide Lot/ID number</Text>
          <InputContainer>
              <InputLabel htmlFor="Lot">Lot/ID #:</InputLabel>
              <Input name="Lot" type="text" placeholder="Lot/ID" />
              <FormError name="Lot" component='span' />
          </InputContainer>

          

          

<div style={{ position: 'relative' }} onClick={()=>setIsSignatureEmpty(false)}>
          {isSignatureEmpty && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: 'gray',
              }}
            >
              Click here to start signing
            </div>
          )}
          <SignatureCanvas
           canvasProps={{ width: 500, height: 200 }}
            ref={signatureRef}
            onEnd={handleCanvasChange}
            onBegin={()=>console.log('working...')}
            velocityFilterWeight={0.7}
            penWidth={2}
            style={{ border: '1px solid #CCC' }}
          />
        </div>
        <button type="button" onClick={clearSignature}>Clear Signature</button>


        FOR CLIENTS UNDER 18

        <Title>Parental/Guardian Consent:</Title>

        <InputContainer>
              <CheckboxLabel htmlFor="parentRelease">
              <Input name="parentRelease" type="checkbox" placeholder="parentRelease" />
              As the parent or legal guardian, I hereby provide my consent for my child to receive tattooing services. I confirm that I have read and understood the contents of this form, and I agree to be bound by its terms and conditions. Additionally, I acknowledge that I will provide both my government-issued photo identification and my child's government-issued photo identification as required.
              </CheckboxLabel>
              <FormError name="parentRelease" component='span' />
        </InputContainer>
        
          <Button type={"submit"}>Submit</Button>
        </FormWrapper>
      </Formik>
    );
};

// WaiverForm.propTypes = {
//   onSubmit: PropTypes.func,
//   contacts: PropTypes.array,
// }

export default WaiverForm;