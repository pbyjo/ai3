import { useState } from 'react';

/* Components */
import Slider from '@components/Slider';
import proyectsData from '@data/proyects.js';

/* Contenedores */
import Layout from '@containers/Layout'
import ModalProyect from '@containers/ModalProyect';

const Proyectos = () => {

    const [modal, setModal] = useState(false)

    const [name, setName] = useState('')
    const [multimedia, setMultimedia] = useState('')
    const [descripcion, setDesc] = useState('')
    const [delay, setDelay] = useState('')
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
                <div className='proyects__section-head'>
                        <h1>PORTAFOLIO</h1>
                </div>
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
                            <Slider
                                key={id}
                                name={name}
                                multimedia={multimedia}
                                containerSlideWidth={'mainContainer__slideModal'}
                            />
                            {descripcion}
                        </ModalProyect>
                    )
                }
            </section>
        </Layout>
    )
}

export default Proyectos;