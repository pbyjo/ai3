import { useState } from 'react';

/* Container */
import Modal from '@containers/Modal';

/* assets */
import calendarIcon from '@icons/calendar_icon.svg';

const Articulo = (props) => {
    const {title, id, autor, date, description, text, labels} = props

    const [modal, setModal] = useState(false);

    /* inyectando props al modal */
    const [titleAtr, setTitle] = useState('');
    const [autorAtr, setAutor] = useState('');
    const [dateAtr, setDate] = useState('');
    const [textAtr, setText] = useState('');

    const getAtr = (titlee, autorr, datee, textt) => {
        setTitle(titlee);
        setAutor(autorr);
        setDate(datee);
        setText(textt);
    }

    const handleClick = () => {
        setModal(!modal);
    }

    return (
        <>
            <article
                key={id} 
                className="blog__container-article"
                onClick={() => getAtr(title, autor, date, text)}
            >
                <h2 onClick={() => handleClick()}> {title} </h2>
                <p> {description} </p>
                <div className="blog__container-article_data">
                    <p>
                        <img src={calendarIcon} alt="calendar icon" />
                        {date}</p>
                    <a href="https://www.facebook.com/fanny.barrero.5" target='_blank'> {`@${autor}`} </a>
                    <label htmlFor=""> {labels} </label>
                </div>
            </article>

            {
                modal && (
                    <Modal modal={modal} setModal={setModal}>
                        <div className='modal__containerArticle'>
                            <h1>{titleAtr}</h1>
                            <h3>Autor: {autorAtr}</h3>
                            <h4>Fecha: {dateAtr}</h4>
                            {textAtr}
                        </div>
                    </Modal>
                )
            }
        </>
    )
}

export default Articulo;