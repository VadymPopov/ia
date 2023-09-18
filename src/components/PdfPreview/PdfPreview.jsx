import React from "react";
import PdfContent from 'components/PdfContent';
import { Viewer } from "./PdfPreview.styled";
import { useMedia } from 'react-use';
import { BlobProvider } from "@react-pdf/renderer";
import { MobilePDFReader } from 'react-read-pdf';
import './mobilepdf.css';

const PdfPreview = ({ values, isClientUnder18 }) => {
  const isMobile = useMedia('(max-width: 900px)');

  return (
   <>
    {isMobile ? (
    <BlobProvider document={<PdfContent values={values} isClientUnder18={isClientUnder18}/>}>
      {({url}) => {
          return <>{url && (<div className="main">
          <MobilePDFReader url={url}/>
         </div>)}</>
      }}
    </BlobProvider>)  : (<Viewer>
      <PdfContent values={values} isClientUnder18={isClientUnder18}></PdfContent>
    </Viewer>)
    }
   </>
  );
};

export default PdfPreview;