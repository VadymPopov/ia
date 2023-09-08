import { useState } from "react";
import { format } from 'date-fns';
import { bookAppointment } from "api";
import { useNavigate } from "react-router-dom";

import  Button  from "components/Button";
import { FormWrapper, ServiceContainer, ServiceTitle, ServiceDivider, ServiceText  } from "./CheckoutForm.styled";
import { Container } from "../WaiverForm/WaiverForm.styled";
import { switchName } from "utils/helpers";

const CheckoutForm = ({appointmentInfo})=>{
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();
    const selectedService = appointmentInfo.service;
    const selectedSlot = appointmentInfo.slot;
    const selectedDate = appointmentInfo.date;
    const procedureName = switchName(selectedService);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsProcessing(true);

        const response = await bookAppointment(appointmentInfo);

        setIsProcessing(false);
        
        if(response.status === 201){
          navigate("/booking-succeeded");
        }
    }

    return (
      <FormWrapper id="payment-form" onSubmit={handleSubmit}>
          <ServiceContainer>  
            <ServiceDivider>
            <ServiceTitle>Service Details</ServiceTitle>
            <ServiceText>{procedureName} Appointment</ServiceText>
            <ServiceText>{selectedSlot && format(new Date(selectedDate), 'MMMM dd, yyyy')} {selectedSlot && <span>at {selectedSlot}</span>}</ServiceText>
            </ServiceDivider>

            <Container>
                  <Button type="submit" disabled={isProcessing}>
                    <span id="button-text">
                      {isProcessing ? 'Processing...' : 'Book now'}
                    </span>
                  </Button> 
            </Container>
          </ServiceContainer>
      </FormWrapper>
    )
};

export default  CheckoutForm;