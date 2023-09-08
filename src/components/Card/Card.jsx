import { Item, Container, Name, Info, Time, ButtonContainer, Button, Input } from "./Card.styled";
import {MdDelete, MdEdit} from 'react-icons/md';
import {useState} from "react";
import { updateAppointment, deleteAppointment } from "api";

const Card = ({data: {service, date, slot, name, email, _id, duration}, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [serviceDate, setDate] = useState(date);
  const [serviceSlot, setSlot] = useState(slot);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    deleteAppointment(_id)
    onDelete(_id);
  };

  const handleSaveClick = () => {
    updateAppointment(_id, {date:serviceDate, slot:serviceSlot});
    onUpdate(_id, {date:serviceDate, slot:serviceSlot});
    setIsEditing(false);
  };

  const procedure = (selectedProcedure)=> {
    let procedureName;

    switch (selectedProcedure) {
      case 'small-tattoo':
        procedureName = 'Small Tattoo';
        break;
        case 'large-tattoo':
        procedureName = "Large Tattoo";
        break;
        case 'permanent':
        procedureName = 'Permanent';
        break;
        case 'consultation':
        procedureName = 'Consultation';
        break;
      default:
      procedureName = "Unknown";
    }
  
    return procedureName;
  }
      return (<Item>
                  <Container>
                    <div>
                    {isEditing ? <Input type="text" value={serviceDate} onChange={(e) => setDate(e.target.value)}/> : <Info>{serviceDate}</Info>}
                    <Name>{name} </Name>
                    <Info>{email}</Info>
                    <Info>{procedure(service)}</Info>
                    </div>

                    <div>
                    {isEditing ? <Input type="text" value={serviceSlot} onChange={(e) => setSlot(e.target.value)}/> : <Time>{serviceSlot}</Time>}
                                        <Info>{duration} min</Info>
                    </div>
                    </Container>

                    {isEditing  ?  <ButtonContainer><Button onClick={handleSaveClick}>Save</Button></ButtonContainer> :
                    <ButtonContainer>
                      <Button type="button" title="Edit appointment" onClick={handleEditClick}><MdEdit/></Button>
                      <Button type="button" title="Delete appointment" onClick={handleDeleteClick} ><MdDelete /></Button>
                    </ButtonContainer>}
                </Item>);
};

export default Card;