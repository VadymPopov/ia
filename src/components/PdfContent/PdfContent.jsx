import React from 'react';
import { Page, Document, Text, View, Image } from '@react-pdf/renderer';
import { styles } from './PdfContent.stylesheet';
import { format } from 'date-fns';

const PdfContent = ({ values, isClientUnder18 }) => {
  return (
    <Document pageMode="fullScreen">
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            Consent to application of {values.service} and release and waiver of
            all claims
          </Text>
          <Text style={styles.value}>
            IMPORTANT NOTICE: BY SIGNING THIS TATTOO WAIVER FORM, YOU ARE
            WAIVING IMPORTANT LEGAL RIGHTS. READ THIS DOCUMENT CAREFULLY AND
            SEEK LEGAL COUNSEL IF NECESSARY BEFORE SIGNING.
          </Text>
          <Text style={styles.value}>
            In consideration of receiving a {values.service} (hereinafter
            referred to as the "tattoo") from ALINA IVENKO (hereinafter referred
            to as the "Tattoo Artist"), I voluntarily agree to the following
            terms and conditions. I acknowledge that the tattooing process
            involves inherent risks, uncertainties, and potential discomfort.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Waiver and Release:</Text>
          <Text style={styles.value}>
            I WAIVE AND RELEASE to the fullest extent permitted by law the
            Tattoo Artist from all claims, demands, or liabilities arising from
            the tattooing process, including personal injury or any direct
            and/or consequential damages resulting from the application of my
            tattoo. This waiver includes any negligence or fault on the part of
            the Tattoo Artist.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Assumption of Risk:</Text>
          <Text style={styles.value}>
            I have been fully informed of the inherent risks associated with
            getting a tattoo. Therefore, I fully understand and accept the
            potential risks, both known and unknown, involved in the tattooing
            process, including but are not limited to:
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Pain and Discomfort:</Text>
          <Text style={styles.value}>
            I understand that the tattooing process may involve pain,
            discomfort, and potential physical reactions. I am voluntarily
            choosing to undergo this procedure despite these potential
            sensations.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Infection and Allergic Reactions:</Text>
          <Text style={styles.value}>
            I am aware that there is a risk of infection, allergic reactions, or
            other adverse skin reactions as a result of the tattooing process. I
            understand that the Tattoo Artist will follow appropriate hygiene
            and safety measures, but I acknowledge that these risks still exist.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Healing Process:</Text>
          <Text style={styles.value}>
            I understand that the healing process varies among individuals, and
            I am responsible for proper aftercare. I acknowledge that proper
            aftercare, as instructed by the Tattoo Artist, is essential for
            optimal healing. Any complications or unsatisfactory healing that
            may occur are my responsibility. Any touch-up work needed due to my
            negligence will be at my own expense.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Tattoo Outcome:</Text>
          <Text style={styles.value}>
            I acknowledge that the final appearance of the tattoo, including
            color, placement, size, and design, may vary due to individual skin
            characteristics, healing process, and artistic interpretation. I
            understand that the Tattoo Artist will exercise their professional
            judgment in delivering the best possible outcome, but I accept that
            there may be variations.
          </Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.value}>
            {' '}
            I acknowledge that the Tattoo Artist is not accountable for the
            accuracy, meaning, or spelling of the symbols, text, or dates that I
            have provided or selected from the flash (design) sheets. I am fully
            responsible for verifying these details prior to getting the tattoo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Description of Activity:</Text>
          <Text style={styles.value}>
            The tattoo will be placed on the following body part:{' '}
            <Text style={styles.underline}>{values.bodyPart}</Text>.
          </Text>
          <Text style={styles.value}>
            The design is described as follows:{' '}
            <Text style={styles.underline}>{values.design}</Text> (including
            style, theme, elements, or specific instructions).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>No Refunds:</Text>
          <Text style={styles.value}>
            I acknowledge and accept the Tattoo Artist's NO REFUND policy for
            tattoos. I understand that the tattoo deposit is non-refundable and
            that I must provide at least 1 week's notice to reschedule or change
            my appointment. Failure to do so will require the purchase of a new
            deposit.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Acknowledgement of Permanent Change:</Text>
          <Text style={styles.value}>
            I understand that a tattoo is a permanent change to my appearance,
            and there are no guarantees for future changes or removal. Modifying
            or removing a tattoo can be expensive, potentially disfiguring, and
            may not fully restore my skin to its original appearance.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>
            Drugs/Alcohol and Medical Conditions:
          </Text>
          <Text style={styles.value}>
            I confirm that I am not under the influence of alcohol or drugs and
            I willingly choose to be tattooed by the Tattoo Artist without any
            duress or coercion.
          </Text>
          <Text style={styles.value}>
            I confirm that I do not have diabetes, epilepsy, hemophilia, or any
            heart condition(s) that could potentially hinder the tattooing
            procedure or present additional risks.
          </Text>
          <Text style={styles.value}>
            I confirm that I am not currently taking any blood thinning
            medication that may increase the risk of excessive bleeding during
            the tattooing process.
          </Text>
          <Text style={styles.value}>
            I confirm that I do not have any other medical or skin conditions
            that could potentially interfere with the procedure, application, or
            healing of the tattoo, including active infections, open wounds,
            skin disorders, or a compromised immune system.
          </Text>
          <Text style={styles.value}>
            I confirm that I am not a recipient of an organ or bone marrow
            transplant. If I am, I have diligently followed my doctor's
            prescribed preventative regimen of antibiotics in preparation for
            any invasive procedure, such as tattooing.
          </Text>
          <Text style={styles.value}>
            If applicable, I confirm that I am not currently pregnant or nursing
            at the time of receiving the tattoo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Media Consent:</Text>
          <Text style={styles.value}>
            I acknowledge that the Tattoo Artist retains full rights to utilize
            any photographs or videos of my tattoo, and I willingly grant
            consent for such visual media to be captured during and after my
            tattoo procedure.
          </Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Age and Identification:</Text>
          <Text style={styles.value}>
            I confirm that I am either at least 18 years old or have a legal
            guardian present. In both cases, all parties involved will provide
            government-issued photo identification as required.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Acknowledgement of Agreement:</Text>
          <Text style={styles.value}>
            By signing below, I confirm that I have read and understood the
            entire content of this form, including the terms and provisions
            stated. I am fully aware that this agreement contains a waiver of
            rights, and I acknowledge that it is a unilateral agreement with
            significant obligations. If any part of this release is found to be
            unenforceable or invalid, that specific portion will be removed,
            while the rest of the contract remains valid and enforceable. I
            understand that by signing this form, I am acknowledging that I have
            had the opportunity to seek clarification and have any questions
            answered regarding its contents. I willingly and voluntarily agree
            to be bound by the terms of this agreement without any objections or
            reservations.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>
            If single-use presterilized equipment is used please provide Lot/ID
            number: <Text style={styles.underline}>{values.lot}</Text>
          </Text>
        </View>

        {isClientUnder18 && (
          <View style={styles.section}>
            <Text style={styles.title}>FOR CLIENTS UNDER 18</Text>
            <Text style={styles.title}>Parental/Guardian Consent:</Text>
            <Text style={styles.value}>
              As the parent or legal guardian, I hereby provide my consent for
              my child to receive tattooing services. I confirm that I have read
              and understood the contents of this form, and I agree to be bound
              by its terms and conditions. Additionally, I acknowledge that I
              will provide both my government-issued photo identification and my
              child's government-issued photo identification as required.
            </Text>
          </View>
        )}

        <View style={styles.flex}>
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>Client government issue ID:</Text>
              <Text style={styles.text}>{values.governmentId}</Text>
            </View>
            <View>
              <Text style={styles.text}>Client name:</Text>
              <Text style={styles.text}>{values.name}</Text>
            </View>
          </View>
        </View>

        {isClientUnder18 && (
          <View style={styles.flex}>
            <View style={styles.container}>
              <View>
                <Text style={styles.text}>
                  Parental/Guardian government issue ID:
                </Text>
                <Text style={styles.text}>{values.parentGovernmentId}</Text>
              </View>
              <View>
                <Text style={styles.text}>Parental/Guardian name:</Text>
                <Text style={styles.text}>{values.parentalName}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.flex}>
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>
                {isClientUnder18 ? 'Parental/Guardian' : 'Client'} Signature:{' '}
              </Text>
              {(values.signatureField || values.parentalSignatureField) && (
                <Image
                  style={styles.signature}
                  src={
                    isClientUnder18
                      ? values.parentalSignatureField
                      : values.signatureField
                  }
                />
              )}
            </View>

            <Text style={styles.text}>
              Date: {format(values.date, 'yyyy-MM-dd')}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfContent;
