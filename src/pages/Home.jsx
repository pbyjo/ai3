import { Link } from 'react-router-dom';

/* Assets */
import arrowIcon from '@icons/arrow_icon2.svg';

import Logo from '@atoms/Logo'

const Home = () => {
    return (
        <section className='home__section'>
            <Logo />
            <div className='home__section-container'>
                <div className='home__section-container-paragraph'>
                    Somos un espacio avanzado donde donde la
                    <ul className="home__section-container-paragraph_list">
                        <li> Ingenieria </li>
                        <li> Arquitectura </li>
                    </ul> se unen para diseñar, gerenciar y construir un producto integral.
                </div>
                <div className='home__section-container-paragraph2'>
                    Toda! persona con <label> ganas de soñar </label> y <label> hacer realidad </label> nos invite a participar.
                </div>
                <div className='home__section-container-paragraph3'>
                    La transformación de lo <label> imposible a lo posible. </label> Consiste en un trabajo coherente, el buen juicio.
                    Un estudio permanente y la busqueda de la verdad.
                </div>
            </div>
            <Link className='home__section-ancla' to='/portafolio'>
                <img src={arrowIcon} alt="Arrow Icon" />
            </Link>
        </section>
    )
}

export default Home;