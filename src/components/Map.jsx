import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const Map = ({ locations }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: locations.length > 0 ? locations[0].lat : 0,
    lng: locations.length > 0 ? locations[0].lon : 0
  };

  const iconUrl = 'https://cdn.icon-icons.com/icons2/2796/PNG/512/bike_motorbike_vehicle_icon_178048.png';

  return (
    <LoadScript googleMapsApiKey="AIzaSyBVDTo3sJj6mZ3xzvivSn2EkGh0lS2EGlU">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {locations.map(location => (
          <CustomMarker
            key={location.id}
            position={{ lat: location.lat, lng: location.lon }}
            iconUrl={iconUrl}
            mander={{
              name: location.name,
              lastname: location.lastname,
              phone: location.phone,
              type_vehicle: location.type_vehicle,
              plate: location.plate,
              image: location.image
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    name: PropTypes.string,
    lastname: PropTypes.string,
    phone: PropTypes.string,
    type_vehicle: PropTypes.string,
    plate: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default Map;
