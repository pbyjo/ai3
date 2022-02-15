import { useState } from 'react';

/* Components */
import Slider from '@components/Slider';
import proyectsData from '@data/proyects.js';

/* Contenedores */
import Layout from '@containers/Layout'
import ModalProyect from '@containers/ModalProyect';
import MenuDesktop from '@components/MenuDesktop';


const Proyectos = () => {

    const [modal, setModal] = useState(false)

    const [name, setName] = useState('')
    const [multimedia, setMultimedia] = useState('')
    const [descripcion, setDesc] = useState('')
    const [id, setId] = useState('') 

    const getAtr = (namee, multimediaa, descc, idd) => {
        setName(namee),
        setMultimedia(multimediaa),
        setDesc(descc),
        setId(idd),
        setModal(!modal)
    }

    return(
        <Layout>
            <section className="proyects__section">
                <MenuDesktop />
                <div className='proyects__container'>
                    {
                        proyectsData.map((proyect, id) => (
                            <Slider 
                                onClick={() => getAtr(proyect.name, proyect.multimedia, proyect.desc, proyect.id)}
                                key={id} 
                                delay={proyect.delay}
                                name={proyect.name}
                                multimedia={proyect.multimedia}
                                containerSlideWidth={'mainContainer__slide'}
                            />
                        ))
                    }
                </div>
                {
                    modal && (
                        <ModalProyect modal={modal} setModal={setModal}>
                            <div>
                                <h2>{name}</h2>
                                {descripcion}
                            </div>
                            <Slider
                                onClick={() => getAtr(name, multimedia, desc, id)}
                                key={id}
                                multimedia={multimedia}
                                delay={8000}
                                containerSlideWidth={'mainContainer__slideModal'}
                            />
                        </ModalProyect>
                    )
                }
            </section>
        </Layout>
    )
}

export default Proyectos;