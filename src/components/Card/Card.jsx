import { Item, Container, Name, Info, Time, ButtonContainer, Button, Input } from "./Card.styled";
import {MdDelete, MdEdit} from 'react-icons/md';
import {useState} from "react";
import { updateAppointment, deleteAppointment } from "api";

const Card = ({data: {service, date, slot, name, email, _id, duration}, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [serviceDate, setSerivceDate] = useState(date);
  const [serviceSlot, setServiceSlot] = useState(slot);
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
                    {isEditing ? <Input type="text" value={serviceDate} onChange={(e) => setSerivceDate(e.target.value)}/> : <Info>{serviceDate}</Info>}
                    <Name>{name} </Name>
                    <Info>{email}</Info>
                    <Info>{procedure(service)}</Info>
                    </div>

                    <div>
                    {isEditing ? <Input type="text" value={serviceSlot} onChange={(e) => setServiceSlot(e.target.value)}/> : <Time>{serviceSlot}</Time>}
                     <Info>{duration} min</Info>
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