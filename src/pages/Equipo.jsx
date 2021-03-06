import { useState } from 'react';
import equipo from '@data/equipo.js';

/* Components */
import MenuDesktop from '@components/MenuDesktop';

/* Containers */
import Layout from '@containers/Layout'


/* Atoms */
import Desc from '@atoms/Desc';

const Equipo = () => {
    const [showJ, setShowJ] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showM, setShowM] = useState(false);
    const [showL, setShowL] = useState(false);
    const [showA, setShowA] = useState(false);

    const handleClick = () => {
        setShowJ(!showJ)
    }
    const handleClickJ = () => {
        setShowE(!showE)
    }
    const handleClickM = () => {
        setShowM(!showM)
    }
    const handleClickL = () => {
        setShowL(!showL)
    }
    const handleClickA = () => {
        setShowA(!showA)
    }

    return(
        <Layout>
            <section className='equipo__section'>
                <MenuDesktop />
                <div className='equipo__container'>
                    <div className='equipo__container-person' key={equipo[0].id}>
                        {
                            showJ && 
                            <Desc 
                                persona={equipo[0].id}
                                instagram={equipo[0].instagram}
                                href={equipo[0].href}
                            />
                        }
                        <div 
                            onClick={handleClick}
                            key={equipo[0].id}
                            className='equipo__container-person_desc'>
                            <p>{equipo[0].frase}</p>
                            <h2>{equipo[0].nombre}</h2>
                            <h3>{equipo[0].profesion}</h3>
                        </div>
                    </div>
                    <div className='equipo__container-person' key={equipo[1].id}>
                        {
                            showE && 
                            <Desc 
                                persona={equipo[1].id}
                                instagram={equipo[1].instagram}
                                href={equipo[1].href}
                            />
                        }
                        <div 
                            onClick={handleClickJ}
                            key={equipo[1].id}
                            className='equipo__container-person_desc'>
                            <p>{equipo[1].frase}</p>
                            <h2>{equipo[1].nombre}</h2>
                            <h3>{equipo[1].profesion}</h3>
                        </div>
                    </div>
                    <div className='equipo__container-person' key={equipo[2].id}>
                        {
                            showM && 
                            <Desc 
                                persona={equipo[2].id}
                                instagram={equipo[2].instagram}
                                href={equipo[2].href}
                            />
                        }
                        <div 
                            onClick={handleClickM}
                            key={equipo[2].id}
                            className='equipo__container-person_desc'>
                            <p>{equipo[2].frase}</p>
                            <h2>{equipo[2].nombre}</h2>
                            <h3>{equipo[2].profesion}</h3>
                        </div>
                    </div>
                    <div className='equipo__container-person' key={equipo[3].id}>
                        {
                            showL && 
                            <Desc 
                                persona={equipo[3].id}
                                instagram={equipo[3].instagram}
                                href={equipo[3].href}
                            />
                        }
                        <div 
                            onClick={handleClickL}
                            key={equipo[3].id}
                            className='equipo__container-person_desc'>
                            <p>{equipo[3].frase}</p>
                            <h2>{equipo[3].nombre}</h2>
                            <h3>{equipo[3].profesion}</h3>
                        </div>
                    </div>
                    <div className='equipo__container-person' key={equipo[4].id}>
                        {
                            showA && 
                            <Desc 
                                persona={equipo[4].id}
                                instagram={equipo[4].instagram}
                                href={equipo[4].href}
                            />
                        }
                        <div 
                            onClick={handleClickA}
                            key={equipo[4].id}
                            className='equipo__container-person_desc'>
                            <p>{equipo[4].frase}</p>
                            <h2>{equipo[4].nombre}</h2>
                            <h3>{equipo[4].profesion}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    ) 
}

export default Equipo
