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
            <Label>Toronto</Label>
          </Flex>
          <Flex>
            <Label>Lara Jade Beauty</Label>
          </Flex>
          <Flex>
            <StyledIcon as={FiMapPin} />
            <Label>689 St Clair Ave W 2nd Floor, Toronto, ON M6C 1B2</Label>
          </Flex>
          <FlexItem>
            <EmbeddedMap
              latitude="43.682014043129215"
              longitude="-79.42608935396728"
              query="Lara+Jade+Beauty+StClair+Toronto"
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
