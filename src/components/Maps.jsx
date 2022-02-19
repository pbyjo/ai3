
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Maps = () => {

    return(
        <section className='maps'>
            <MapContainer className='leaflet__container' center={{lat: '4.609744433689227', lng: '-74.15523366884491'}} zoom={16}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            </MapContainer>
            
            <MapContainer className='leaflet__container' center={{lat: '4.401313', lng: '-74.3906612'}} zoom={14}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </section>
    )
}

export default Maps;