import { useState } from 'react';

import Header from '@components/Header';
import Menu from '@components/Menu';

/* Assets */
import menuIcon from "@icons/menu_icon.svg";

const Layout = (props) => {
    const [mainMenu, setMainMenu] = useState(true);
    const {children}= props;

    const handleMenu = () => {
        setMainMenu(!mainMenu)
    }

    return(
        <>
            <Header />
            <img onClick={handleMenu} className="menu_icon" src={menuIcon} alt="Menu icon" />
            {
                mainMenu && <Menu />
            }
            <main className="main__container">
                {children}
            </main>
        </>
    )
}

export default Layout;