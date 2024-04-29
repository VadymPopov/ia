import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [service, setService] = useState(null);
  const [appointmentInfo, setAppointmentInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  return (
    <AppContext.Provider
      value={{
        service,
        setService,
        appointmentInfo,
        setAppointmentInfo,
        paymentInfo,
        setPaymentInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
