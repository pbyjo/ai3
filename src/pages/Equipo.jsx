import { useState } from 'react';
import equipo from '@data/equipo.js';

/* Containers */
import Layout from '@containers/Layout'

/* Atoms */
import Desc from '@atoms/Desc';

/* Assets */
import instagramIcon from '@icons/instagram_icon.svg';

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
                <div className='equipo__section-head'>
                    <h1>EQUIPO</h1>
                </div>
                <div className='equipo__container'>
                    <div className='equipo__container-person' key={equipo[0].id}>
                        <div 
                            onClick={handleClick}
                            key={equipo[0].id}
                            className='equipo__container-person_desc'>
                            <h2>{equipo[0].nombre}</h2>
                            <h3>{equipo[0].profesion}</h3>
                        </div>
                        {
                            showJ && 
                            <Desc 
                                persona={equipo[0].id}
                                instagram={equipo[0].instagram}
                                frase={equipo[0].frase}
                            />
                        }
                    </div>
                    <div className='equipo__container-person' key={equipo[1].id}>
                        <div 
                            onClick={handleClickJ}
                            key={equipo[1].id}
                            className='equipo__container-person_desc'>
                            <h2>{equipo[1].nombre}</h2>
                            <h3>{equipo[1].profesion}</h3>
                        </div>
                        {
                            showE && 
                            <Desc 
                                persona={equipo[1].id}
                                instagram={equipo[1].instagram}
                                frase={equipo[1].frase}
                            />
                        }
                    </div>
                    <div className='equipo__container-person' key={equipo[2].id}>
                        <div 
                            onClick={handleClickM}
                            key={equipo[2].id}
                            className='equipo__container-person_desc'>
                            <h2>{equipo[2].nombre}</h2>
                            <h3>{equipo[2].profesion}</h3>
                        </div>
                        {
                            showM && 
                            <Desc 
                                persona={equipo[2].id}
                                instagram={equipo[2].instagram}
                                frase={equipo[2].frase}
                            />
                        }
                    </div>
                    <div className='equipo__container-person' key={equipo[3].id}>
                        <div 
                            onClick={handleClickL}
                            key={equipo[3].id}
                            className='equipo__container-person_desc'>
                            <h2>{equipo[3].nombre}</h2>
                            <h3>{equipo[3].profesion}</h3>
                        </div>
                        {
                            showL && 
                            <Desc 
                                persona={equipo[3].id}
                                instagram={equipo[3].instagram}
                                frase={equipo[3].frase}
                            />
                        }
                    </div>
                    <div className='equipo__container-person' key={equipo[4].id}>
                        <div 
                            onClick={handleClickA}
                            key={equipo[4].id}
                            className='equipo__container-person_desc'>
                            <h2>{equipo[4].nombre}</h2>
                            <h3>{equipo[4].profesion}</h3>
                        </div>
                        {
                            showA && 
                            <Desc 
                                persona={equipo[4].id}
                                instagram={equipo[4].instagram}
                                frase={equipo[4].frase}
                            />
                        }
                    </div>
                </div>
            </section>
        </Layout>
    ) 
}

export default Equipo
