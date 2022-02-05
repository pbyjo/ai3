/* Assets */
import instagramIcon from '@icons/instagram_icon.svg';
import facebookIcon from '@icons/facebook_icon.svg';
import whatsappIcon from '@icons/whatsapp_icon.svg';

const Redes = () => {

    return (
        <div className='redes__container'>
            <a href="https://www.instagram.com" target='_blank'>
                <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a href="https://www.facebook.com" target='_blank'>
                <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a href="https://www.whatsapp.com" target='_blank'>
                <img src={whatsappIcon} alt="whatsapp icon" /> 
            </a>
        </div>
    )
}

export default Redes;