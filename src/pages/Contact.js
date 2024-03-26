import { Title, Section } from 'components/CommonStyles';
import {
  FlexContainer,
  StyledIcon,
  Link,
  Flex,
  FlexItem,
  Label,
} from './Contact.styled';

import { FiMapPin, FiMail } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import { SiInstagram } from 'react-icons/si';

import EmbeddedMap from '../components/EmbeddedMap';

export default function Contact() {
  return (
    <Section primary={'primary'}>
      <Title>Contact me</Title>
      <FlexContainer>
        <FlexItem>
          <Flex>
            <Label>Ottawa (April 23 - 28)</Label>
          </Flex>
          <Flex>
            <Label>Clove Studio</Label>
          </Flex>
          <Flex>
            <StyledIcon as={FiMapPin} />
            <Label>155 Loretta Ave N, Ottawa, ON K1Y 3E5</Label>
          </Flex>
          <FlexItem>
            <EmbeddedMap
              latitude="45.404117694979895"
              longitude="-75.71567117471214"
              query="Clove+Studio+Ottawa"
            />
          </FlexItem>
          <br />

          <Flex>
            <Label>Toronto</Label>
          </Flex>
          <Flex>
            <Label>Chronic Ink Tattoo - Tattoo Shop College</Label>
          </Flex>
          <Flex>
            <StyledIcon as={FiMapPin} />
            <Label>434 College St 2nd Floor, Toronto, ON M5T 1S9</Label>
          </Flex>
          <FlexItem>
            <EmbeddedMap
              latitude="43.656777251560946"
              longitude="-79.40727752380309"
              query="Chronic+Ink+Tattoo+Shop+CollegeToronto"
            />
          </FlexItem>
          <br />
          <Flex>
            <StyledIcon as={FiMail} />
            <Link href="mailto:InkedbyAlina@gmail.com">Email me</Link>
          </Flex>
          <Flex>
            <StyledIcon as={TfiTime} />
            <Label>11PM - 8PM</Label>
          </Flex>
          <Flex>
            <StyledIcon as={SiInstagram} />
            <Link
              href="https://www.instagram.com/ivenko.alinaaa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram-page"
            >
              Instagram
            </Link>
          </Flex>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}
