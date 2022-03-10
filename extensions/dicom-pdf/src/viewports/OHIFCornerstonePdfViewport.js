import React from 'react';

function OHIFCornerstonePdfViewport({
  displaySet,
}) {
  const { pdfUrl } = displaySet;

  const url = pdfUrl;

  // Need to copies of the source to fix a firefox bug
  return (
    <div className="bg-primary-black w-full h-full">
      <object data={url} type="application/pdf" className="w-full h-full">
        <div>No online PDF viewer installed</div>
      </object>
    </div>
  )
}

export default OHIFCornerstonePdfViewport;
