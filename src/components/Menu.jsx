import { Link } from "react-router-dom"


const Menu = () => {

    return (
        <nav className="menu_nav">
            <ul>
                <li>
                    <Link to='/interiorismo'>
                        Interiorismo
                    </Link>
                </li>
                <li>
                    <Link to='/ideas'>
                        Ideas
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