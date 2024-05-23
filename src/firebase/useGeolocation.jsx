
import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return location;
};
