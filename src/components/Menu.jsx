import { Link } from "react-router-dom"


const Menu = () => {

    return (
        <nav className="menu_nav">
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/proyectos'>
                        Portafolio
                    </Link>
                </li>
                <li>
                    <Link to='/galeria'>
                        Interiorismo
                    </Link>
                </li>
                <li>
                    <Link to='/blog'>
                        Ideas
                    </Link>
                </li>
                <li>
                    <Link to='/equipo'>
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link to='/contacto'>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    ) 
}

export default Menu