/* Assets */
import instagramIcon from '@icons/instagram_icon.svg';

const Desc = (props) => {
    const {id, instagram, frase} = props
    return (
        <div 
            key={id}
            className='equipo__container-person_desc'>
            <p>{frase}</p>
            <div>
                <img src={instagramIcon} alt="instagram icon" />
                <h3>{instagram}</h3> 
            </div>
        </div>
    )
}

export default Desc