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
                    <Link to='/portafolio'>
                        Portafolio
                    </Link>
                </li>
                <li>
                    <Link to='/galeria'>
                        Interiorismo
                    </Link>
                </li>
                <li>
                    <Link to='/articulos'>
                        Articulos
                    </Link>
                </li>
                <li>
                    <Link to='/nosotros'>
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