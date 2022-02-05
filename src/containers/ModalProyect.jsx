import ReactDOM from "react-dom";

/* assets */
import closeIcon from '@icons/closeBlack.png';

const Modal = (props) => {
    const {children, modal, setModal} = props 

    const handleClick = () => {
        setModal(!modal)
    }
    
    return ReactDOM.createPortal(
        <section className="modal modalProyects">
            {children}
            <img onClick={handleClick} src={closeIcon} className="modal__close" alt="close" />
        </section>,
        document.getElementById('portal')
    ) 
}

export default Modal;