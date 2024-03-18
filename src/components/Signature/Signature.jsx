import React, { useRef, useState } from 'react';
import { useField } from 'formik';
import SignatureCanvas from 'react-signature-canvas';
import {
  SignaturePlaceholder,
  SignatureContainer,
  ClearBtn,
} from '../Signature/Signature.styled';
import { FormError } from 'utils/formik';

const SignatureField = props => {
  const [field, meta] = useField(props.name);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const signatureRef = useRef(null);

  const handleCanvasChange = () => {
    if (signatureRef.current.isEmpty()) {
      setIsSignatureEmpty(true);
    } else {
      setIsSignatureEmpty(false);
      const signatureDataUrl = signatureRef.current.toDataURL();
      field.onChange({ target: { name: props.name, value: signatureDataUrl } });
    }
  };

  const clearSignature = () => {
    signatureRef.current.clear();
    setIsSignatureEmpty(true);
    field.onChange({ target: { name: props.name, value: '' } });
  };

  return (
    <>
      <SignatureContainer onClick={() => setIsSignatureEmpty(false)}>
        {isSignatureEmpty && (
          <SignaturePlaceholder>
            Click here to start signing
          </SignaturePlaceholder>
        )}
        <SignatureCanvas
          ref={signatureRef}
          onEnd={handleCanvasChange}
          penWidth={2}
          {...props}
        />
      </SignatureContainer>
      <FormError name={props.name} component="span" />
      <ClearBtn type="button" onClick={clearSignature}>
        Clear Signature
      </ClearBtn>
    </>
  );
};

export default SignatureField;
