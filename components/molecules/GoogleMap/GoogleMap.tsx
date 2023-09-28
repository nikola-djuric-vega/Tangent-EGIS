import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from '../../atoms/MapMarker/MapMarker'

interface Props {
  lat: number
  lng: number
}

export default function GoogleMap({ lat, lng }: Props) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
      }}
      defaultCenter={{ lat, lng }}
      zoom={18}
    >
      <MapMarker lat={lat} lng={lng} />
    </GoogleMapReact>
  )
}
