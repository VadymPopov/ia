import { useState, useEffect } from 'react';
import { List } from './Appointments.styled';
import { Text } from 'components/CommonStyles';
import Card from '../Card';

const Appointments = ({ data }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (data) {
      setAppointments(data);
    }
  }, [data]);

  const handleDelete = id => {
    const newAppointments = appointments.filter(appointment => {
      return appointment._id !== id;
    });
    setAppointments(newAppointments);
  };

  const handleUpdate = (id, info) => {
    const updatedAppointments = appointments.map(appointment => {
      if (appointment._id === id) {
        if (appointment.date !== info.date) {
          return null;
        } else {
          return { ...appointment, ...info };
        }
      }
      return appointment;
    });

    const filteredAppointments = updatedAppointments.filter(
      appointment => appointment !== null
    );

    setAppointments(filteredAppointments);
  };

  return (
    <>
      {appointments && appointments.length === 0 && (
        <Text>
          Oh, how sad, there are no appointments for today. You need to work
          harder or just relax and chill!
        </Text>
      )}

      <List>
        {appointments &&
          appointments.map((element, idx) => {
            return (
              <Card
                key={element._id}
                data={element}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              ></Card>
            );
          })}
      </List>
    </>
  );
};

export default Appointments;
