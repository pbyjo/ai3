/* Assets */
import instagramIcon from '@icons/instagram_icon.svg';

const Desc = (props) => {
    const {id, instagram, href} = props
    return (
        <div 
            key={id}
            className='equipo__container-person_desc'>
            <a target='_blank' href={href}>
                <img src={instagramIcon} alt="instagram icon" />
                <p>{instagram}</p> 
            </a>
        </div>
    )
}

export default Desc