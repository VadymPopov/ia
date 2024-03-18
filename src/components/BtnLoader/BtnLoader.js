import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
  <ColorRing
    visible={true}
    height="25"
    width="25"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#000']}
  />
);

export default Loader;
