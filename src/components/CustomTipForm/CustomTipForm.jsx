import { Formik } from 'formik';
import {
  InputContainer,
  Input,
  InputLabel,
  FormWrapper,
} from '../WaiverForm/WaiverForm.styled';
import { FlexContainerAlignEnd, OkButton } from './CustomTipForm.styled';
import { MdDone } from 'react-icons/md';

const CustomTipForm = ({ setTip, showInputForm, setShowInputForm }) => {
  const initialValues = {
    tip: 0,
  };

  const handleSubmit = values => {
    const { tip } = values;
    setTip(tip);
    setShowInputForm(false);
  };

  if (showInputForm) {
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormWrapper autoComplete="off">
          <FlexContainerAlignEnd>
            <InputContainer>
              <InputLabel>Custom CA$</InputLabel>
              <Input
                name="tip"
                type="number"
                placeholder="10"
                min={0}
                title="tip amount must be bigger than zero"
              />
            </InputContainer>
            <div>
              <OkButton type="submit">
                <MdDone size={24} />
              </OkButton>
            </div>
          </FlexContainerAlignEnd>
        </FormWrapper>
      </Formik>
    );
  } else {
    return null;
  }
};
export default CustomTipForm;
