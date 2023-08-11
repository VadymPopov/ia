import { Container, Title, Section } from "components/CommonStyles";
import {StyledIcon, Link, Flex,FlexItem, Label} from './Contact.styled';

import { FiMapPin, FiMail, FiPhone,  } from 'react-icons/fi';
import {TfiTime} from 'react-icons/tfi';

import EmbeddedMap from '../components/Map/Map';

export default function Contact() {
    return (
  <Section primary>
  <Title>Contact me</Title>
    <Container>
    <FlexItem>
      <Flex>
      <StyledIcon as={FiMapPin}/>
      <Label>309 King St W 2rd floor, Toronto, ON M5V 1J5</Label> 
      </Flex>
       <Flex>
       <StyledIcon as={FiPhone}/><Link href="tel:+14372541559">(437) 254-1559</Link>
      </Flex>
      <Flex>
      <StyledIcon as={FiMail}/>
      <Link href="mailto:InkedbyAlina@gmail.com">Email me</Link>
      </Flex>
      <Flex>
      <StyledIcon as={TfiTime}/>
      <Label>Mon - Sat: 12PM - 6PM</Label>
      </Flex>
    </FlexItem>
    <FlexItem><EmbeddedMap/></FlexItem>
    
    </Container>
    </Section>
    );
}