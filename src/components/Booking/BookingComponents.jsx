// import React, { useState } from 'react';
// // import { CustomDatePicker } from './Booking.styled';
// import { CustomDatePicker } from 'components/WaiverForm/WaiverForm.styled';
// import styleDatepicker from '../WaiverForm/datepicker.css';
// import {Button, GridContainer} from './Booking.styled';
// import { useFormikContext } from 'formik';

// const AlwaysOpenDatePicker = ({name}) => {
// const [selectedDate, setSelectedDate] = useState(null);
// const [selectedSlot, setSelectedSlot] = useState(null);
// const [activeButtonIndex, setActiveButtonIndex] = useState(null);
// const formik = useFormikContext(); // Access formik context

//   const handleButtonClick = index => {
//     if (activeButtonIndex === index) {
//       setActiveButtonIndex(null);
//       setSelectedSlot(null);
//     } else {
//       setActiveButtonIndex(index);
//       setSelectedSlot(index);
//     }
//   };

//   const handleDateChange = date => {
//     setSelectedDate(date);
//     formik.setFieldValue(name, date);
//   };

//   const maxDate = new Date();
//   maxDate.setFullYear(maxDate.getFullYear() + 1);

//   const timeSlots = [
//       '11:00am',
//       '12:00am',
//       '1:00pm',
//       '2:00pm',
//       '3:00pm',
//       '4:00pm',
//       '5:00pm',
//       '6:00pm',
//       '7:00pm',
//       '8:00pm'
//     ];

//   return (
//     <>
//     <h2>Choose a time:</h2>
//     <div>
//       <div>
//         <CustomDatePicker
//           selected={selectedDate}
//           onChange={(date)=>handleDateChange(date)}
//           showPopperArrow={false}
//           minDate={new Date()}
//           maxDate={maxDate}
//           dateFormat="dd/MM/yyyy"
//           className={styleDatepicker}
//           inline
//         />
//       </div>
//       <GridContainer>
//       {selectedDate && timeSlots.map((slot, index) => (
//             <Button type='button' key={index} onClick={()=>handleButtonClick(index)} active={activeButtonIndex === index ? index : null}>
//               {slot}
//             </Button>
//           ))} 
//       </GridContainer>
      
//     </div>
//     </>
//   );
// };


// export default AlwaysOpenDatePicker;
