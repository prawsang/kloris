import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const MyMap = ({ google }) => (
  <div style={{ position: "relative" }} className="is-hidden-xs">
    <Map
      google={google}
      zoom={16}
      initialCenter={{
        lat: 13.841,
        lng: 100.506602,
      }}
      style={{
        width: "100%",
        height: 300,
      }}
    >
      <Marker />
    </Map>
  </div>
)

export default GoogleApiWrapper({
  apiKey: "AIzaSyCBkbG-TQQvc6rVq5sDHa-36Ge-kV6hHg8",
  version: 3.31,
})(MyMap)
