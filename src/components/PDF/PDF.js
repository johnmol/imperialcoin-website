// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// export default function PDF(props) {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const { pdf } = props;

//   return (
//     <Document
//       file={pdf}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   );
// }

import React, {Component} from "react";
import Pdf from './../../IPCFinanceDeck.pdf';

class Download extends Component {

  render() {
    return (
      <div className="App">
        <a href={Pdf} target="_blank" rel="noopener noreferrer">PDF</a>
      </div>
    )
  }
}

export default Download;