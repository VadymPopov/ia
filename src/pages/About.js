import { Container, Item, List, Description, Title, Text } from "./About.styled";
import { Suptitle } from "./Home.styled.js";
import Button from "components/Button/Button";

export default function About() {
    return (
    <Container>
       <List>
        <Item><img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb" alt="" width={270}/></Item>
        <Item><img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" width={270}/></Item>
       </List>

       <Description>
       <Suptitle>About me</Suptitle>
       <Title>Best tattoo artist in your city</Title>
       <Text>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always "on the same wave" with clients. Therefore, we are always ready to improve everyone who comes to us!</Text>
       <Button>Online-Booking</Button>
       </Description>
    </Container>
    );
}