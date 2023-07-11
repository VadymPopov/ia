import Button from 'components/Button/Button';
import lips from '../images/lips.jpg';
import { Card, Image, Item } from './Services.styled';

import smallTattoo from '../images/small-tattoo.jpg';
import largeTattoo from '../images/large-tattoo.jpg';
import permanent from '../images/permanent.jpg';
import touchUp from '../images/touch-up.jpg';

export default function Services() {
    return (
    <ul>
        <Item>
            <Card>
                <Image src={smallTattoo} alt="small-tattoo" />
                <div>
                    <p>Small Tattoo</p>
                    <p>Deposit: CA$100</p>
                    <p>Less then 12 cm</p>
                    <p>Duration: 1h</p>
                </div>
                <Button>Book now</Button>
            </Card>
            <div>
                The price is fixed, so you can do something with it bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur quas quod accusamus animi sunt, voluptas, odit laudantium obcaecati odio temporibus velit? A cumque officiis enim nulla officia magni neque!
            </div>
        </Item>
        <Item>
            <Card>
                <Image src={largeTattoo} alt="large-tattoo" />
                <div>
                    <p>Large Tattoo</p>
                    <p>Deposit: CA$120</p>
                    <p>More then 12 cm and detailed</p>
                    <p>Duration: 3h</p>
                </div>
                <Button>Book now</Button>
            </Card>
            <div>
                The price is fixed, so you can do something with it bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur quas quod accusamus animi sunt, voluptas, odit laudantium obcaecati odio temporibus velit? A cumque officiis enim nulla officia magni neque!
            </div>
        </Item>
        <Item>
            <Card>
                <Image src={touchUp} alt="touch-up" />
                <div>
                    <p>Consultation/Touch-up</p>
                    <p>Duration: 30min</p>
                </div>
                <Button>Book now</Button>
            </Card>
            <div>
                The price is fixed, so you can do something with it bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur quas quod accusamus animi sunt, voluptas, odit laudantium obcaecati odio temporibus velit? A cumque officiis enim nulla officia magni neque!
            </div>
        </Item>
        <Item>
            <Card>
                <Image src={permanent} alt="permanent" />
                <div>
                    <p>Permanent</p>
                    <p>Deposit: CA$100</p>
                    <p>Price is fixed CA$280</p>
                    <p>Duration: 1h-3h</p>
                </div>
                <Button>Book now</Button>
            </Card>
            <div>
                The price is fixed, so you can do something with it bla bla bla Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur quas quod accusamus animi sunt, voluptas, odit laudantium obcaecati odio temporibus velit? A cumque officiis enim nulla officia magni neque!
            </div>
        </Item>
    
    </ul>
    );
}