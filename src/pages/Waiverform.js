import WaiverForm from "components/WaiverForm/WaiverForm";
import { Title, Text } from "components/CommonStyles";

export default function Waiver() {
    return (
    <>
    <Title>Consent to application of Tattoo/Permanent makeup and release and waiver of all claims</Title>
    <Text>IMPORTANT NOTICE: BY SIGNING THIS TATTOO WAIVER FORM, YOU ARE WAIVING IMPORTANT LEGAL RIGHTS. READ THIS DOCUMENT CAREFULLY AND SEEK LEGAL COUNSEL IF NECESSARY BEFORE SIGNING.</Text>
       <WaiverForm></WaiverForm>
    </>
    );
}