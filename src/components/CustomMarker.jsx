import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from '@react-google-maps/api';

const CustomMarker = ({ position, iconUrl, mander }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Marker
        position={position}
        icon={{
          url: iconUrl,
          scaledSize: new window.google.maps.Size(50, 50)
        }}
        onClick={handleToggleOpen}
      />
      {isOpen && (
        <InfoWindow position={position} onCloseClick={handleToggleOpen}>
          <div style={{ textAlign: 'center' }}>
            {mander.image && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <img
                  src={mander.image}
                  alt={`${mander.name} ${mander.lastname}`}
                  style={{
                    width: '70px',
                    height: 'auto',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            <h2>{mander.name} {mander.lastname}</h2>
            <p>Celular: {mander.phone}</p>
            <p>Vehículo: {mander.type_vehicle}</p>
            <p>Placa: {mander.plate}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

CustomMarker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  iconUrl: PropTypes.string.isRequired,
  mander: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type_vehicle: PropTypes.string.isRequired,
    plate: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
};

export default CustomMarker;
