import {
  Item,
  Container,
  Name,
  Info,
  Time,
  ButtonContainer,
  Button,
  Input,
  Select,
  Flex,
  Instagram,
  Mail,
  CardDatePicker,
} from './Card.styled';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useState } from 'react';
import { updateAppointment, deleteAppointment } from 'api';
import { switchName } from '../../utils/helpers';
import { slots } from 'components/AddAppointment/AddAppointment';
import { format, parse } from 'date-fns';

const Card = ({
  data: { service, date, slot, name, email, _id, duration, instagram },
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [serviceDate, setServiceDate] = useState(date);
  const [serviceSlot, setServiceSlot] = useState(slot);
  const [serviceDuration, setServiceDuration] = useState(duration);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleFlag = value => {
    setDeleteFlag(value);
  };

  const handleDeleteClick = () => {
    deleteAppointment(_id);
    onDelete(_id);
    setDeleteFlag(false);
  };

  const handleDateChange = date => {
    const formattedDate = format(date, 'MM.dd.yyyy');
    setServiceDate(formattedDate);
  };

  const handleSaveClick = () => {
    const appointmentInfo = {
      date: serviceDate,
      slot: serviceSlot,
      duration: serviceDuration,
    };
    updateAppointment(_id, appointmentInfo);
    onUpdate(_id, appointmentInfo);
    setIsEditing(false);
  };

  return (
    <Item>
      <Container>
        <div>
          {isEditing ? (
            <CardDatePicker
              showIcon
              selected={parse(serviceDate, 'MM.dd.yyyy', new Date())}
              onChange={date => handleDateChange(date)}
              minDate={new Date()}
            />
          ) : (
            <Info>{serviceDate}</Info>
          )}
          <Name>{name}</Name>
          <Flex>
            <Mail />
            <Info>{email}</Info>
          </Flex>
          {instagram && (
            <Flex>
              <Instagram />
              <Info>{instagram}</Info>
            </Flex>
          )}
          <Info>{switchName(service)}</Info>
        </div>

        <div>
          {isEditing ? (
            <Select
              value={serviceSlot}
              onChange={e => setServiceSlot(e.target.value)}
            >
              {slots.map(slot => {
                return (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                );
              })}
            </Select>
          ) : (
            <Time>{serviceSlot}</Time>
          )}
          {isEditing ? (
            <Input
              type="number"
              min="30"
              step="30"
              value={Number(serviceDuration)}
              onChange={e => setServiceDuration(e.target.value)}
            />
          ) : (
            <Info>{duration === 30 ? '30 min' : `${duration / 60} h`}</Info>
          )}
        </div>
      </Container>

      {isEditing ? (
        <ButtonContainer>
          <Button onClick={handleSaveClick}>Save</Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          {deleteFlag ? (
            <>
              <Button type="button" title="yes" onClick={handleDeleteClick}>
                Yes
              </Button>
              <Button
                type="button"
                title="no"
                onClick={() => toggleFlag(false)}
              >
                No
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                title="Edit appointment"
                onClick={handleEditClick}
              >
                <MdEdit />
              </Button>
              <Button
                type="button"
                title="Delete appointment"
                onClick={() => toggleFlag(true)}
              >
                <MdDelete />
              </Button>
            </>
          )}
        </ButtonContainer>
      )}
    </Item>
  );
};

export default Card;
