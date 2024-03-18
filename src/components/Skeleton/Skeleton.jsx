import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FlexContainer, Payment } from './Skeleton.styled';

const SkeletonForm = () => {
  return (
    <FlexContainer>
      <Payment>
        <Skeleton count={1} width={'100%'} height={'100%'} borderRadius={20} />
      </Payment>
    </FlexContainer>
  );
};

export default SkeletonForm;
