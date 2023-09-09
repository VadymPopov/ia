import React from "react";
import PdfContent from 'components/PdfContent';
import { Viewer } from "./PdfPreview.styled";

const PdfPreview = ({ values, isClientUnder18 }) => {
  return (
    <Viewer>
      <PdfContent values={values} isClientUnder18={isClientUnder18}></PdfContent>
    </Viewer>
  );
};

export default PdfPreview;