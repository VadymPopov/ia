import { Rings } from 'react-loader-spinner';

const Spinner = () => (
  <Rings
    visible={true}
    ariaLabel="rings-loading"
    height="180"
    width="180"
    color="rgba(255, 108, 0, 1)"
    radius="100"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
  />
);

export default Spinner;
