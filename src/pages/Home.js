
import { MainTitle, Description, Section } from "./Home.styled.js";
import { Suptitle } from "components/CommonStyles.js";

export default function Home() {
    return (
    <Section>
       <Suptitle >Your favorite tattoo artist</Suptitle>
       <MainTitle>Ivenko Alina</MainTitle>
       <Description>Embrace the art of transformation. Don't hesitate, schedule your tattoo appointment right now.</Description>
    </Section>
    );
}