import React from 'react';

const EmbeddedMap = () => {
  const apiKey = 'AIzaSyADtmfaKoDbGchjLiXWRFuxo_soqOVNqH4';
  const lat = '45.4039972';
  const lon = '-75.7156819';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&center=${lat},${lon}&zoom=18&q=Clove+Studio+Ottawa`; 

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


