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

        const portal = document.querySelector('#portal')
        portal.classList.remove('display-none')
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
                                multimedia={proyect.multimedia}
                                containerSlideWidth={'mainContainer__slide'}
                                videoClass={'videoProyect'}
                            />
                        ))
                    }
                </div>
                {
                    modal && (
                        <ModalProyect modal={modal} setModal={setModal}>
                            <Slider
                                key={id}
                                multimedia={multimedia}
                                delay={8000}
                                containerSlideWidth={'mainContainer__slideModal'}
                                videoClass={'videoModal'}
                            />
                            <div>
                                <h2>{name}</h2>
                                {descripcion}
                            </div>
                        </ModalProyect>
                    )
                }
            </section>
        </Layout>
    )
}

export default Proyectos;