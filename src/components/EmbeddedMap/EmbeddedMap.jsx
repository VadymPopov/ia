import React from 'react';

const EmbeddedMap = ({ latitude, longitude, query }) => {
  const apiKey = 'AIzaSyADtmfaKoDbGchjLiXWRFuxo_soqOVNqH4';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&center=${latitude},${longitude}&zoom=18&q=${query}`;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        title="Embedded Map"
        width="100%"
        height="100%"
        src={mapUrl}
        allowFullScreen
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
