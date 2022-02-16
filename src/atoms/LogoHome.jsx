import { Link } from 'react-router-dom';

/* Assets */
import A from '@logos/logo_capas/A_logo.png';
import I from '@logos/logo_capas/I_logo.png';
import T3 from '@logos/logo_capas/3_logo.png';
import Studio from '@logos/logo_capas/studio_logo.png'
import Desc from '@logos/logo_capas/desc_logo.png'

const LogoHome = () => {
    return(
        <Link to='/proyectos' className='main__logo'>
            <figure className='main__logo-cont1'>
                <img src={A} alt="Logo A" />
                <img src={I} alt="Logo I" />
                <img src={T3} alt="Logo 3" />
            </figure>
            <figure className='main__logo-cont2'>
                <img src={Studio} alt="Logo Studio" />
                <img src={Desc} alt="Logo Studio" />
            </figure>
        </Link>
    )
}

export default LogoHome;