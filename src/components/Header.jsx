import {Link} from 'react-router-dom';

/* Atom */
import Logo from '@atoms/Logo';
import Redes from '@atoms/Redes';

const Header = () => {
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <Link to='/proyectos'>
                            <span>V</span>ivienda
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                        <span>A</span>rmonización
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                        <span>E</span>spacio público 
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                        <span>E</span>quipamiento
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos'>
                        <span>C</span>omercial
                        </Link>
                    </li>
                </ul>
            </nav>
            <Redes/>
        </header>
    )
};

export default Header;