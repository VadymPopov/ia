import WaiverForm from 'components/WaiverForm/WaiverForm';
import { Title, Text, Section } from 'components/CommonStyles';
import { Helmet } from 'react-helmet-async';

export default function Waiver() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Waiver form is designed to protect both parties involved and outline the terms and conditions of your engagement with me. Ensure clarity, transparency, and legal compliance with the waiver document."
        />
        <meta property="og:title" content="Tattoo Waiverform" />
        <meta
          property="og:description"
          content="Waiver form is designed to protect both parties involved and outline the terms and conditions of your engagement with me. Ensure clarity, transparency, and legal compliance with the waiver document."
        />
        <title>Tattoo Waiverform/Conscent</title>
      </Helmet>
      <Section>
        <Title>
          Consent to application of Tattoo/ Permanent makeup and release and
          waiver of all claims
        </Title>
        <Text>
          IMPORTANT NOTICE: BY SIGNING THIS TATTOO WAIVER FORM, YOU ARE WAIVING
          IMPORTANT LEGAL RIGHTS. READ THIS DOCUMENT CAREFULLY AND SEEK LEGAL
          COUNSEL IF NECESSARY BEFORE SIGNING.
        </Text>
        <WaiverForm />
      </Section>
    </>
  );
}
