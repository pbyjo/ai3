import {Link} from 'react-router-dom';

/* Atom */
import Logo from '@atoms/Logo';
import Redes from '@atoms/Redes';

const Header = () => {

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to='/proyectos'>
                            Vivienda
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                            Comercial
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                            Equipamiento
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                            Espacio público 
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                            Armonización <br /> de espacios
                        </Link>
                    </li>
                </ul>
            </nav>
            <Redes />
        </header>
    )
};

export default Header;