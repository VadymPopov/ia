import { Item, Container, Name, Info, Time, ButtonContainer, Button, Input, Flex, Instagram, Mail } from "./Card.styled";
import {MdDelete, MdEdit} from 'react-icons/md';
import {useState} from "react";
import { updateAppointment, deleteAppointment } from "api";

const Card = ({data: {service, date, slot, name, email, _id, duration, instagram}, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [serviceDate, setServiceDate] = useState(date);
  const [serviceSlot, setServiceSlot] = useState(slot);
  const [serviceDuration, setServiceDuration] = useState(duration);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleFlag = (value) => {
    setDeleteFlag(value);
  };

  const handleDeleteClick = () => {
    deleteAppointment(_id)
    onDelete(_id);
    setDeleteFlag(false);
  };

  const handleSaveClick = () => {
    updateAppointment(_id, {date:serviceDate, slot:serviceSlot, duration: serviceDuration});
    onUpdate(_id, {date:serviceDate, slot:serviceSlot, duration: serviceDuration});
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
                    {isEditing ? <Input type="text" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)}/> : <Info>{serviceDate}</Info>}
                    <Name>{name} </Name>
                    <Flex><Mail/><Info>{email}</Info></Flex>
                    {instagram && <Flex><Instagram/><Info>{instagram}</Info></Flex>}
                    <Info>{procedure(service)}</Info>
                    </div>

                    <div>
                    {isEditing ? <Input type="text" value={serviceSlot} onChange={(e) => setServiceSlot(e.target.value)}/> : <Time>{serviceSlot}</Time>}
                    {isEditing ? <Input type="number" min="30" step="30" value={Number(serviceDuration)} onChange={(e) => setServiceDuration(e.target.value)}/> : <Info>{duration} min</Info>}
                    </div>
                    </Container>

                    {isEditing  ?  <ButtonContainer>
                      <Button onClick={handleSaveClick}>Save</Button>
                      </ButtonContainer> :
                    <ButtonContainer>
                      {deleteFlag ? 
                      <>
                      <Button type="button" title="yes" onClick={handleDeleteClick}>Yes</Button>
                      <Button type="button" title="no" onClick={()=>toggleFlag(false)}>No</Button>
                      </> :
                      <>
                      <Button type="button" title="Edit appointment" onClick={handleEditClick}><MdEdit/></Button>
                      <Button type="button" title="Delete appointment" onClick={()=>toggleFlag(true)}><MdDelete /></Button>
                      </>
                      }
                    </ButtonContainer>}
                </Item>);
};

export default Card;