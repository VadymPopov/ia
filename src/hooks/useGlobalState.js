import { useContext } from 'react';
import AppContext from 'context/AppProvider';

const useGlobalState = () => {
  return useContext(AppContext);
};

export default useGlobalState;
