
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
            
            <MapContainer className='leaflet__container' center={{lat: '4.4148895', lng: '-74.3976621'}} zoom={13}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </section>
    )
}

export default Maps;