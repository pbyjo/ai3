import ReactDOM from "react-dom";

/* assets */
import closeIcon from '@icons/close.png';

const Modal = (props) => {
    const {children, modal, setModal} = props 

    const handleClick = () => {
        setModal(!modal)

        const portal = document.getElementById('portal')
        portal.classList.add('display-none')
    }
    
    return ReactDOM.createPortal(
        <section  className="modal modalProyects">
            {children}
            <img onClick={handleClick} src={closeIcon} className="modal__close" alt="close" />
        </section>,
        document.getElementById('portal')
    ) 
}

export default Modal;