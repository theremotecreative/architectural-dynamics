import React from "react"
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const defaultProps = {
    center: {lat: 40.759, lng: -73.980}, 
    zoom: 12
 }

 const AnyReactComponent = () => <div className="map-icon"><FaMapMarkerAlt /></div>

 const GoogleMap = () => (
   <div style={{ height: '75vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{
            key: process.env.GATSBY_MAP_KEY, 
            language: 'en'
        }}
       defaultCenter={defaultProps.center}
       defaultZoom={defaultProps.zoom}
     >
       <AnyReactComponent
         lat={40.759863}
         lng={-73.980411}
       />
     </GoogleMapReact>
   </div>
 )
 
 export default GoogleMap