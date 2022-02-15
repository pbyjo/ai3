import { Link } from 'react-router-dom';

import Logo from '@atoms/Logo'

const Home = () => {
    return (
        <section className='home__section'>
            <Logo />
            <div className='home__section-container'>
                <Link to='/proyectos'>
                    <div className='home__section-container-paragraph'>
                        <strong>¿<span className='spanHome'>W</span>hat we do? <br /></strong>
                        Somos un espacio avanzado donde donde la
                        <ul className="home__section-container-paragraph_list">
                            <li> Ingenieria </li>
                            <li> Arquitectura </li>
                        </ul> se unen para diseñar, gerenciar y construir un producto integral.
                    </div>
                    <div className='home__section-container-paragraph2'>
                        <strong>¿<span className='spanHome'>W</span>ho is our audience? <br /></strong>
                        Toda! persona con ganas de soñar y hacer realidad nos invite a participar.
                    </div>
                    <div className='home__section-container-paragraph3'>
                        “La transformación de lo imposible a lo posible. Consiste en un trabajo coherente, el buen juicio.
                        Un estudio permanente y la busqueda de la verdad”.
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Home;