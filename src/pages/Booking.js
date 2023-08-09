import BookingForm from "components/BookingForm/BookingForm";
import { Text, Title } from "components/CommonStyles";
export default function Booking() {
    return (
    <>
    <Title>Booking process</Title>
    <Text>To schedule an appointment, complete your information, pick your preferred service and starting time, and proceed to secure your booking with a deposit. Please be aware that the total service cost will be determined based on your specific requirements. The online payment serves as a non-refundable deposit, covering preparatory expenses for your appointment. This deposit ensures that costs are covered in case of a cancellation. For Small Tattoo and Permanent services, a deposit of CA$100 is required. For Large Tattoo services, the deposit amount is CA$120.

All deposits will be deducted from the final cost of the service.</Text>
    <BookingForm/>
    </>
    );
}
