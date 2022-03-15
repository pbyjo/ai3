import { useRef, useEffect } from 'react';
import styled from 'styled-components';

/* assets */
import arrow from '@icons/arrow_icon.svg';

const Slider = (props) => {
    const {name, multimedia, onClick, delay, containerSlideWidth, videoClass} = props;
    const slideshow = useRef(null);
    const myInterval = useRef(null);
    
    const next = () => {
        let lengthItems = slideshow.current.children.length;
        // Comprobamos que el slideshow tenga elementos
        if( lengthItems > 0) {
            // Obtenemos el primer elemento del slideshow:
            const firstItem = slideshow.current.children[0];
            
            // Transicion
            slideshow.current.style.transition = '1.4s ease-out all';

            // Actions
            const sizeSlide = firstItem.offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
            
            const transition = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0px)`;
                
                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(firstItem);
                // Finalizamos la escucha de transicion 
                slideshow.current.removeEventListener('transitionend', transition);
            }

            //EventListener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const back = () => {
        let lengthItems = slideshow.current.children.length;
        if(lengthItems > 0) {
            // Obtenemos el ultimo elemento del slideshow:
            const lastIndex = lengthItems - 1;
            const lastItem = slideshow.current.children[lastIndex]

            slideshow.current.insertBefore(lastItem, slideshow.current.firstChild);

            slideshow.current.style.transition = `none`;

            const sizeSlide = lastItem.offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                // Transicion
                slideshow.current.style.transition = `.7s ease-out all`;
                slideshow.current.style.transform = `translateX(0px)`;
            }, 10)

            slideshow.current.style.transition = 'none';
        }
    }

    useEffect(() => {
        let lengthItems = slideshow.current.children.length        
        if(lengthItems > 1) {
            myInterval.current = setInterval(() => {
                next();
            },delay);
        }

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(myInterval.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            myInterval.current = setInterval(() => {
                setTimeout( () => {
                    next();
                }, 2000)
            }, delay);
        });

    }, [delay]);

    return (
        <ContenedorPrincipal className={containerSlideWidth}>
            <ContenedorSlideShow onClick={onClick} ref={slideshow}>
                {
                    multimedia.map((image, id) => (
                        <Slide key={id}>
                            {
                                image.video ?
                                <video className={videoClass} src={image.video} muted loop autoPlay /> :
                                <SlideImg src={image.img} />
                            }
                            {/* <TextoSlide className='slide__mediaText'>
                                <p>{name}</p>
                            </TextoSlide> */}
                        </Slide>
                    ))
                }
            </ContenedorSlideShow>

            <Arrows onClick={back} src={arrow} left alt="flecha left"/>
            <Arrows onClick={next} src={arrow} right alt="flecha right"/>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.article`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 0;
    margin: 15px;

    transition: .2s ease-out all;
    transition-delay: .1s;
`;

const ContenedorSlideShow = styled.div`
    display: flex;
    max-width: inherit;
    flex-wrap: nowrap;
    border-radius: inherit;
    height: inherit;
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: inherit;
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    height: inherit;
    border-radius: inherit;
    z-index: 9;
`;

const SlideImg = styled.img`
    width: 100%;
    max-width: inherit;
    vertical-align: top;
    object-fit: cover;
    object-position: top;
    height: inherit;
    border-radius: inherit;
`

/* const TextoSlide = styled.div`
    position: absolute;
    padding: 8px;
    width: 100%;
    bottom: 0;
    background-color: rgba(0,0,0, .3);
    p {
        font-weight: 500;
        font-size: .9rem;
        color: whitesmoke;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        @media screen and (max-width: 500px) {
            font-size: .8rem;
        },
    },
` */

const Arrows = styled.img`
    opacity: 0;
    position: absolute;
    width: 35px;
    height: 100%;
    bottom: 0;
    background-color: rgba(255,255,255, .1);
    padding: 3px;
    cursor: pointer;
    z-index: 9;
    transition: .2s;
    :hover {
        background-color: rgba(255,255,255, .3);
        opacity: 1;
    }
    :active {
        transform: scale(.9);
    }

    ${props => props.left &&
        'transition: 0s; :active {transform: scale(.9) rotate(180deg);}'
    }

    path {
        filter: ${props => props.right ? 'drop-shadow(-10px 0px 0px #fff)' : 'drop-shadow(10px 0px 0px #fff)'};
    }

    ${props => props.right ? 'right: 0px;' : 'left: 0px;'}
    ${props => props.right ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'}
`

export default Slider;