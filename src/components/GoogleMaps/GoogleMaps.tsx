import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import marker from '../../assets/icons/marker.svg'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB6EVGADmIsypN20_wWJpKX79vzohmJk6U',
  });

  

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  const mapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  };

  return (
    <GoogleMap options={mapOptions} zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF  position={center} />
    </GoogleMap>
  );
}