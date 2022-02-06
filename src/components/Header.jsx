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
                        <Link to='/portafolio'>
                            Vivienda
                        </Link>
                    </li>
                    <li>
                        <Link to='/portafolio'>
                            Comercial
                        </Link>
                    </li>
                    <li>
                        <Link to='/portafolio'>
                            Equipamiento
                        </Link>
                    </li>
                    <li>
                        <Link to='/portafolio'>
                            Espacio público 
                        </Link>
                    </li>
                    <li>
                        <Link to='/portafolio'>
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