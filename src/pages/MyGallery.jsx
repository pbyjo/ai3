import { useState } from 'react'

/* articles */
import mujerDesnuda from '@galeria/MujerDesnuda.jpeg'
import rostroAfro from '@galeria/RostroAfro.jpeg'
import mujerAfro from '@galeria/MujerAfro.jpeg'
import jimmy from '@galeria/Jimmy-Hendrix.jpeg'
import fryda from '@galeria/Fryda-Khalo.jpg'
import black from '@galeria/The-black.jpg'

/* assets */
import buyIcon from '@icons/buy_icon.svg'

/* Components */
import MenuDesktop from '@components/MenuDesktop';

/* Containers */
import Modal from '@containers/Modal';
import Layout from '@containers/Layout';

const MyGallery = () => {
    const [modal, setModal] = useState(false);

    /* Atributos modal */
    const [imgSrc, setImgSrc] = useState('')
    const [imgAlt, setImgAlt] = useState('')
    const [imgId, setImgId] = useState('')

    const imagesGallery = [
        {
            id: 0,
            src: mujerDesnuda,
            alt: 'Acrilico mujer desnuda',
            dimensions: `${60}cm x ${100}cm`,
            tecnica: 'Acrilico sobre Lienzo',
            price: `$850.000K COP`
        },
        {
            id: 1,
            src: rostroAfro,
            alt: 'Acrilico rostro afro',
            dimensions: `${80}cm x ${80}cm`,
            tecnica: 'Acrilico sobre Lienzo',
            price: `$1'000.000K COP`
        },
        {
            id: 2,
            src: mujerAfro,
            alt: 'Acrilico mujer afro',
            dimensions: `${40}cm x ${60}cm`,
            tecnica: 'Acrilico sobre Lienzo',
            price: `$700.000K COP`
        },
        {   
            id: 3,
            src: jimmy,
            alt: 'Jimmy Hendrix',
            dimensions: `${100}cm x ${100}cm`,
            tecnica: 'Acrilico sobre Lienzo',
            price: `$390.000K COP`
        },
        {
            id: 4,
            src: black,
            alt: 'The Black',
            dimensions: `${100}cm x ${100}cm`,
            tecnica: 'Acrilico sobre Lienzo',
            price: `$390.000K COP`
        },
        {
            id: 5,
            src: fryda,
            alt: 'Fryda Khalo',
            dimensions: `${100}cm x ${100}cm`,
            tecnica: 'Acrilico a la espatula sobre Lienzo',
            price: `$390.000K COP`
        }
    ]
    
    const getAtr = (src, alt, id) => {
        setImgSrc(src),
        setImgAlt(alt),
        setImgId(id),
        setModal(!modal);
    }

    return (
        <Layout>
            <section className='gallery__section'>
                <MenuDesktop />
                <div className='gallery__container'>
                {
                    imagesGallery.map((imageG, id) => (
                        <article className='gallery__item' key={id}>
                            <img 
                                onClick={() => getAtr(imageG.src, imageG.alt, imageG.id)}
                                src={imageG.src} 
                                alt={imageG.alt} 
                            />
                            <div className='gallery__item-info'>
                                <div>
                                    <h3>{imageG.dimensions}</h3>
                                    <p>{imageG.tecnica}</p>
                                    <p className='price'>{imageG.price}</p>
                                </div>
                                <a 
                                    target='_blank' 
                                    href="https://api.whatsapp.com/send?phone=573155153029&text=Hola, vi su contacto en la página web y estoy interesado en..."
                                >
                                    <img  src={buyIcon} alt='Icon buy' />
                                </a>
                            </div>
                        </article>
                    ))
                }
                {
                    modal && (
                        <Modal modal={modal} setModal={setModal}>
                            <div className='modal__containerimg'>
                                <img key={imgId} src={imgSrc} alt={imgAlt} />
                            </div>
                        </Modal>
                    )
                }
                </div>
            </section>
        </Layout>
    )
}

export default MyGallery;
