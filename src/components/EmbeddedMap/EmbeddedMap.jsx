import React from 'react';

const EmbeddedMap = () => {
  const apiKey = 'AIzaSyADtmfaKoDbGchjLiXWRFuxo_soqOVNqH4';
  const lat = '43.656777251560946';
  const lon = '-79.40727752380309';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&center=${lat},${lon}&zoom=18&q=Chronic+Ink+Tattoo+Shop+CollegeToronto`; 

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        title="Embedded Map"
        width="100%"
        height="100%"
        src={mapUrl}
        allowFullScreen
        style={{border:0}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> 
  
      
    </div>
  );
};

export default EmbeddedMap;