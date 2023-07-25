import React from "react";
import {PDFViewer } from "@react-pdf/renderer";
import PdfContent from 'components/PdfContent';

const PdfPreview = ({ values, isClientUnder18 }) => {
  return (
    <PDFViewer width="800" height="500">
      <PdfContent values={values} isClientUnder18={isClientUnder18}></PdfContent>
    </PDFViewer>
  );
};

export default PdfPreview;