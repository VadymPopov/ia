import { Section, Suptitle } from "./Portfolio.styled";
import Swiper from "components/Swiper/Swiper";

export default function Portfolio() {
    return (
    <Section>
        <Suptitle>Healed Tattoo</Suptitle>
        <Swiper></Swiper>
        <Suptitle>Healed Permanent</Suptitle>
        <Swiper></Swiper>
        <Suptitle>My Flashes</Suptitle>
        <Swiper></Swiper>
    </Section>
    );
}