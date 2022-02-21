import { Link } from 'react-router-dom';

/* Assets */
import logoPunto from '@logos/logo_capas/punto_logo.png'
import logoNombre from '@logos/logo_capas/logo_nombre.png'

const Logo = () => {
    return(
        <Link to='/' className='main__logo'>
            <figure className='main__logo-cont1'>
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
            </figure>
            <figure className='main__logo-cont2'>
            <img src={logoNombre} alt="Logo Nombre" />
            </figure>
        </Link>
    )
}

export default Logo;