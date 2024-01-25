import { Title, Section } from "components/CommonStyles";
import {FlexContainer, StyledIcon, Link, Flex,FlexItem, Label} from './Contact.styled';

import { FiMapPin, FiMail } from 'react-icons/fi';
import {TfiTime} from 'react-icons/tfi';
import {SiInstagram} from 'react-icons/si';

import EmbeddedMap from '../components/EmbeddedMap';

export default function Contact() {
    return (
  <Section primary={'primary'}>
  <Title>Contact me</Title>
    <FlexContainer>
    <FlexItem>
      <Flex>
      <Label>Chronic Ink Tattoo - Tattoo Shop College</Label> 
      </Flex>
      <Flex>
      <StyledIcon as={FiMapPin}/>
      <Label>434 College St 2nd Floor, Toronto, ON M5T 1S9</Label> 
      </Flex>
      <Flex>
      <StyledIcon as={FiMail}/>
      <Link href="mailto:InkedbyAlina@gmail.com">Email me</Link>
      </Flex>
      <Flex>
      <StyledIcon as={TfiTime}/>
      <Label>11PM - 8PM</Label>
      </Flex>
      <Flex>
      <StyledIcon as={SiInstagram}/>
      <Link href="https://www.instagram.com/ivenko.alinaaa/" target='_blank' rel="noopener noreferrer" aria-label='instagram-page'>Instagram</Link>
      
      </Flex>
    </FlexItem>
    <FlexItem><EmbeddedMap/></FlexItem>
    
    </FlexContainer>
    </Section>
    );
}