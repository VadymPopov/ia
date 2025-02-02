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
            <Label>San Francisco</Label>
          </Flex>
          <Flex>
            <Label>La Rosa Tattoo</Label>
          </Flex>
          <Flex>
            <StyledIcon as={FiMapPin} />
            <Label>
              693 14th Street, San Francisco, CA 94114, United States
            </Label>
          </Flex>
          <FlexItem>
            <EmbeddedMap
              latitude="37.76792182235917"
              longitude="-122.42869104099746"
              query="La+Rosa+Tattoo+14th+Street+San+Francisco"
            />
          </FlexItem>
          <br />

          <Flex>
            <StyledIcon as={FiMail} />
            <Link href="mailto:InkedbyAlina@gmail.com">Email me</Link>
          </Flex>
          <Flex>
            <StyledIcon as={TfiTime} />
            <Label>11AM - 8PM</Label>
          </Flex>
          <Flex>
            <StyledIcon as={SiInstagram} />
            <Link
              href="https://www.instagram.com/ivenko.alinaa/"
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
