import React from "react";
import {PDFViewer } from "@react-pdf/renderer";
import PdfContent from 'components/PdfContent';
import { Viewer } from "./PdfPreview.styled";

const PdfPreview = ({ values, isClientUnder18 }) => {
  return (
    // <PDFViewer width="800" height="500">
    <Viewer>
      <PdfContent values={values} isClientUnder18={isClientUnder18}></PdfContent>
    </Viewer>
    // </PDFViewer>
  );
};

export default PdfPreview;