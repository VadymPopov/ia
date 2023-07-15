import React from "react";
// import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { Notify } from "notiflix";
import { FormWrapper, InputContainer, Input } from "./WaiverForm.styled";
import  Button  from "components/Button";
import {nameRegExp, phoneRegExp,emailRegExp, governmentId, FormError} from 'utils/formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter valid name').required(),
  email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
  phone: Yup.string().matches(phoneRegExp,'Enter valid number').required(),
  governmentId: Yup.string().matches(governmentId,'Enter valid government issue ID number').required(),
});

const WaiverForm = ()=> {
  // const dispatch = useDispatch();

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
          <InputContainer>
            <div>
              <Input name="name" type="text" placeholder="Full name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <label>Birthday Date</label>
          <Input name="dob">
            {({ field, form }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => form.setFieldValue(field.name, date)}
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                dateFormat="dd/MM/yyyy"
              />
            )}
          </Input>
          <FormError name="dob" component="span" />
        </InputContainer>

        <InputContainer>
            <div>
              <Input name="phone" type="tel" placeholder="Phone number"  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <Input name="email" type="email" placeholder="Email"  title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <Input name="address" type="text" placeholder="address" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="address" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <label>What service are you receiving ?</label>
            <div>
              <Input name="service" as="select" placeholder="service" >
                <option value="Tattoo">Tattoo</option>
                <option value="Permanent Makeup (Cosmetic Tattoo)">Permanent Makeup (Cosmetic Tattoo)</option></Input>
              <FormError name="service" component='span' />
            </div>
          </InputContainer>
          <p>Description of Activity:</p>
          <InputContainer>
          <p>The tattoo will be placed on the following body part:</p>
            <div>
              <Input name="bodyPart" type="text" placeholder="tattoo placement"/>
              <FormError name="bodyPart" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>The design is described as follows:</p>
            <div>
              <Input name="design" type="text" placeholder="tattoo design"/>
              <FormError name="design" component='span' />
            </div>
            <p>(including style, theme, elements, or specific instructions).</p>
          </InputContainer>



          <InputContainer>
            <div>
              <label>Government Issue ID Number (license, passport, etc.)</label>
              <Input name="governmentId" type="text" placeholder="governmentId" />
              <FormError name="governmentId" component='span' />
            </div>
          </InputContainer>
         

          <InputContainer>
          <label>Appointment Date</label>
          <Input name="date">
            {({ field, form }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => form.setFieldValue(field.name, date)}
                minDate={new Date()}
              />
            )}
          </Input>
          <FormError name="date" component="span" />
        </InputContainer>

        <p>In consideration of receiving a tattoo/permanent makeup (hereinafter referred to as the "tattoo") from ALINA IVENKO (hereinafter referred to as the "Tattoo Artist"), I voluntarily agree to the following terms and conditions. I acknowledge that the tattooing process involves inherent risks, uncertainties, and potential discomfort.</p>

        
        <InputContainer>
        <p>Waiver and Release:</p>
            <div>
              {/* <label>Waiver and Release:</label> */}
              <label htmlFor="waveRelease">
              <Input name="waveRelease" type="checkbox" placeholder="waveRelease" />
              I WAIVE AND RELEASE to the fullest extent permitted by law the Tattoo Artist from all claims, demands, or liabilities arising from the tattooing process, including personal injury or any direct and/or consequential damages resulting from the application of my tattoo. This waiver includes any negligence or fault on the part of the Tattoo Artist.
              </label>
              <FormError name="waveRelease" component='span' />
            </div>
          </InputContainer>

          <p>Assumption of Risk:</p>
        <p> I have been fully informed of the inherent risks associated with getting a tattoo. Therefore, I fully understand and accept the potential risks, both known and unknown, involved in the tattooing process, including but are not limited to:</p>

          <InputContainer>
          <p>Pain and Discomfort:</p>
            <div>
              <label htmlFor="pain">
              <Input name="pain" type="checkbox" placeholder="pain" />
              I understand that the tattooing process may involve pain, discomfort, and potential physical reactions. I am voluntarily choosing to undergo this procedure despite these potential sensations.
              </label>
              <FormError name="pain" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Infection and Allergic Reactions:</p>
            <div>
              <label htmlFor="infection">
              <Input name="infection" type="checkbox" placeholder="infection" />
              I am aware that there is a risk of infection, allergic reactions, or other adverse skin reactions as a result of the tattooing process. I understand that the Tattoo Artist will follow appropriate hygiene and safety measures, but I acknowledge that these risks still exist.
              </label>
              <FormError name="infection" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Healing Process:</p>
            <div>
              <label htmlFor="healing">
              <Input name="healing" type="checkbox" placeholder="healing" />
              I understand that the healing process varies among individuals, and I am responsible for proper aftercare. I acknowledge that proper aftercare, as instructed by the Tattoo Artist, is essential for optimal healing. Any complications or unsatisfactory healing that may occur are my responsibility. Any touch-up work needed due to my negligence will be at my own expense.
              </label>
              <FormError name="healing" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Tattoo Outcome:</p>
            <div>
              <label htmlFor="outcome">
              <Input name="outcome" type="checkbox" placeholder="outcome" />
              I acknowledge that the final appearance of the tattoo, including color, placement, size, and design, may vary due to individual skin characteristics, healing process, and artistic interpretation. I understand that the Tattoo Artist will exercise their professional judgment in delivering the best possible outcome, but I accept that there may be variations. I acknowledge that the Tattoo Artist is not accountable for the accuracy, meaning, or spelling of the symbols, text, or dates that I have provided or selected from the flash (design) sheets. I am fully responsible for verifying these details prior to getting the tattoo.
              </label>
              <FormError name="outcome" component='span' />
            </div>
          </InputContainer>


          <InputContainer>
          <p>No Refunds:</p>
            <div>
              <label htmlFor="refund">
              <Input name="refund" type="checkbox" placeholder="refund" />
              I acknowledge and accept the Tattoo Artist's NO REFUND policy for tattoos. I understand that the tattoo deposit is non-refundable and that I must provide at least 1 week's notice to reschedule or change my appointment. Failure to do so will require the purchase of a new deposit.

              </label>
              <FormError name="refund" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Acknowledgement of Permanent Change:</p>
            <div>
              <label htmlFor="permanentChange">
              <Input name="permanentChange" type="checkbox" placeholder="permanentChange" />
              I understand that a tattoo is a permanent change to my appearance, and there are no guarantees for future changes or removal. Modifying or removing a tattoo can be expensive, potentially disfiguring, and may not fully restore my skin to its original appearance.

              </label>
              <FormError name="permanentChange" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Media Consent:</p>
            <div>
              <label htmlFor="media">
              <Input name="media" type="checkbox" placeholder="media" />
              I acknowledge that the Tattoo Artist retains full rights to utilize any photographs or videos of my tattoo, and I willingly grant consent for such visual media to be captured during and after my tattoo procedure.
              </label>
              <FormError name="media" component='span' />
            </div>
          </InputContainer>


          <InputContainer>
          <p>Age and Identification:</p>
            <div>
              <label htmlFor="age">
              <Input name="age" type="checkbox" placeholder="age" />
              I confirm that I am either at least 18 years old or have a legal guardian present. In both cases, all parties involved will provide government-issued photo identification as required.
              </label>
              <FormError name="age" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p>Acknowledgement of Agreement:</p>
            <div>
              <label htmlFor="agreement">
              <Input name="agreement" type="checkbox" placeholder="agreement" />
              By signing below, I confirm that I have read and understood the entire content of this form, including the terms and provisions stated. I am fully aware that this agreement contains a waiver of rights, and I acknowledge that it is a unilateral agreement with significant obligations. If any part of this release is found to be unenforceable or invalid, that specific portion will be removed, while the rest of the contract remains valid and enforceable. I understand that by signing this form, I am acknowledging that I have had the opportunity to seek clarification and have any questions answered regarding its contents. I willingly and voluntarily agree to be bound by the terms of this agreement without any objections or reservations.
              </label>
              <FormError name="agreement" component='span' />
            </div>
          </InputContainer>

          <InputContainer>
          <p> Drugs/Alcohol and Medical Conditions:</p>
            <div>
              <label htmlFor="drugs">
              <Input name="drugs" type="checkbox" placeholder="drugs" />
                I confirm that I am not under the influence of alcohol or drugs and I willingly choose to be tattooed by the Tattoo Artist without any duress or coercion.
              </label>
              <FormError name="drugs" component='span' />
            </div>

            <div>
              <label htmlFor="desease">
              <Input name="desease" type="checkbox" placeholder="desease" />
              I confirm that I do not have diabetes, epilepsy, hemophilia, or any heart condition(s) that could potentially hinder the tattooing procedure or present additional risks.
              </label>
              <FormError name="desease" component='span' />
            </div>

            <div>
              <label htmlFor="medication">
              <Input name="medication" type="checkbox" placeholder="medication" />
              I confirm that I am not currently taking any blood thinning medication that may increase the risk of excessive bleeding during the tattooing process.
              </label>
              <FormError name="medication" component='span' />
            </div>

            
            <div>
              <label htmlFor="medication">
              <Input name="medication" type="checkbox" placeholder="medication" />
              I confirm that I do not have any other medical or skin conditions that could potentially interfere with the procedure, application, or healing of the tattoo, including active infections, open wounds, skin disorders, or a compromised immune system.
              </label>
              <FormError name="medication" component='span' />
            </div>

            <div>
              <label htmlFor="recipientOrgan">
              <Input name="recipientOrgan" type="checkbox" placeholder="recipientOrgan" />
              I confirm that I am not a recipient of an organ or bone marrow transplant. If I am, I have diligently followed my doctor's prescribed preventative regimen of antibiotics in preparation for any invasive procedure, such as tattooing.
              </label>
              <FormError name="recipientOrgan" component='span' />
            </div>

            <div>
              <label htmlFor="pregnancy">
              <Input name="pregnancy" type="checkbox" placeholder="pregnancy" />
              If applicable, I confirm that I am not currently pregnant or nursing at the time of receiving the tattoo.
              </label>
              <FormError name="pregnancy" component='span' />
            </div>
          </InputContainer>

          If single-use presterilized equipment is used please provide Lot/ID number

          Lot/ID #:

         









          













         


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