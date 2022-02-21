import { Link } from 'react-router-dom';

/* Assets */
import logoPunto from '@logos/logo_capas/punto_logo.png'
import logoNombre from '@logos/logo_capas/logo_nombre.png'

const LogoHome = () => {
    return(
        <section  className='main__logo'>
            <Link to='/proyectos' className='main__logo-cont1'>
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
                <img src={logoPunto} alt="Punto" />
            </Link>
            <figure className='main__logo-cont2'>
                <img src={logoNombre} alt="Logo Nombre" />
            </figure>
        </section>
    )
}

export default LogoHome;