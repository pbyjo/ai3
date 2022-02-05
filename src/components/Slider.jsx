import { useRef, useEffect } from 'react';
import styled from 'styled-components';

/* assets */
import arrow from '@icons/arrow_icon.svg';

const Slider = (props) => {
    const {name, multimedia, onClick, containerSlideWidth} = props;
    const slideshow = useRef(null);
    /* const myInterval = useRef(null); */
    
    
    const next = () => {
        const lengthItems = slideshow.current.children.length;
        // Comprobamos que el slideshow tenga elementos
        if( lengthItems > 0) {
            // Obtenemos el primer elemento del slideshow:
            const firstItem = slideshow.current.children[0];

            // Transicion
            slideshow.current.style.transition = '.4s linear all';

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
        const lengthItems = slideshow.current.children.length;
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
                slideshow.current.style.transition = `.4s ease-out all`;
                slideshow.current.style.transform = `translateX(0px)`;
            }, 20)

            slideshow.current.style.transition = 'none';
        }
    }

    /* useEffect(() =>{
        myInterval.current = setInterval(() => {
            next();
        },delay)  

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(myInterval.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            myInterval.current = setInterval(() => {
                next();
            },delay)  
        });

        console.log(slideshow.current);
    }, [delay, next]); */

    return (
        <ContenedorPrincipal className={containerSlideWidth}>
            <ContenedorSlideShow onClick={onClick} ref={slideshow}>
                {
                    multimedia.map((image, id) => (
                        <Slide key={id}>
                            <SlideImg src={image.img} alt={name} />
                            <TextoSlide className='slide__mediaText'>
                                    <p>{name}</p>
                            </TextoSlide>
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
    margin-bottom: 30px;
    margin-right: 30px;

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

const TextoSlide = styled.div`
    position: absolute;
    padding: 8px;
    width: 100%;
    bottom: 0;
    background-color: rgba(0,0,0, .3);
    @media screen and (max-width: 500px) {
        position: relative;
        padding: 4px; 
        border: 1px solid #EEE;
        border-radius: 7px;
        margin-bottom: 2px;
        background-color: rgba(0,0,0, .4);
        color: whitesmoke;
    }
    p {
        font-weight: 500;
        font-size: 1rem;
        color: whitesmoke;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        @media screen and (max-width: 500px) {
            font-size: 1rem;,
        },
    },
`

const Arrows = styled.img`
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
        background-color: #eb9b2c;
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