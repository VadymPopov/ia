import { Title, Text } from "components/CommonStyles";
import { Icon, Container, BackBtn } from "./Completion.styled";

import {MdOutlineArrowBackIos} from 'react-icons/md';
import { useNavigate } from "react-router-dom";

export default function Succeeded () {
    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate('/');
    }
    
    return (
    <Container>
        <BackBtn onClick={handleClick}><MdOutlineArrowBackIos/>Back</BackBtn>
    <Title>Your appointment was successfully booked!
        <Icon/>
    </Title>
    <Text>Thank you for choosing my services. I look forward to our meeting! You will receive a booking confirmation by email.  If you have any questions or need to make changes, please don't hesitate to contact me.</Text>
    </Container>
    );
}