/*---- Assets ----*/

/* 1 Armonización de espacios */
import armonizacionImg1 from '@proyectos/armonizacion/armonizacion_img1.jpg';
import armonizacionImg2 from '@proyectos/armonizacion/armonizacion_img2.png';

/* 2 Casa Container */
import casaContainerImg1 from '@proyectos/casa_container/casaContainer_img1.jpg';
import casaContainerImg2 from '@proyectos/casa_container/casaContainer_img2.jpg';
import casaContainerImg3 from '@proyectos/casa_container/casaContainer_img3.jpg';

/* 3 Iglesia Yeled */
import yeledImg1 from '@proyectos/iglesia_yeled/yeled_img1.png';
import yeledImg2 from '@proyectos/iglesia_yeled/yeled_img2.png';
import yeledImg3 from '@proyectos/iglesia_yeled/yeled_img3.png';

/* 4 Iglesia Jardin */
import jardinImg1 from '@proyectos/iglesia_jardin/iglesiaJardin_img1.jpg'
import jardinImg2 from '@proyectos/iglesia_jardin/iglesiaJardin_img2.jpg'
import jardinImg3 from '@proyectos/iglesia_jardin/iglesiaJardin_img3.jpg'
import jardinImg4 from '@proyectos/iglesia_jardin/iglesiaJardin_img4.jpg'
import jardinImg5 from '@proyectos/iglesia_jardin/iglesiaJardin_img5.jpg'
import jardinImg6 from '@proyectos/iglesia_jardin/iglesiaJardin_img6.jpg'
import jardinImg7 from '@proyectos/iglesia_jardin/iglesiaJardin_img7.jpg'

/* 5 Iglesia Luna Park */
import lunaParkImg1 from '@proyectos/iglesia_lunaPark/lunaPark_img1.png'
import lunaParkImg2 from '@proyectos/iglesia_lunaPark/lunaPark_img2.jpg'
import lunaParkImg3 from '@proyectos/iglesia_lunaPark/lunaPark_img3.jpg'

/* 6 Iglesia Palermo */
import palermoImg1 from '@proyectos/iglesia_palermo/ipalermo_img1.png';
import palermoImg2 from '@proyectos/iglesia_palermo/ipalermo_img2.png';
import palermoImg3 from '@proyectos/iglesia_palermo/ipalermo_img3.png';
import palermoImg4 from '@proyectos/iglesia_palermo/ipalermo_img4.png';
import palermoImg5 from '@proyectos/iglesia_palermo/ipalermo_img5.png';
import palermoImg6 from '@proyectos/iglesia_palermo/ipalermo_img6.png';
import palermoImg7 from '@proyectos/iglesia_palermo/ipalermo_img7.png';
import palermoImg8 from '@proyectos/iglesia_palermo/ipalermo_img8.png';
import palermoImg9 from '@proyectos/iglesia_palermo/ipalermo_img9.png';
import palermoImg10 from '@proyectos/iglesia_palermo/ipalermo_img10.png';
import palermoImg11 from '@proyectos/iglesia_palermo/ipalermo_img11.png';
import palermoImg12 from '@proyectos/iglesia_palermo/ipalermo_img12.png';
import palermoImg13 from '@proyectos/iglesia_palermo/ipalermo_img13.png';
import palermoImg14 from '@proyectos/iglesia_palermo/ipalermo_img14.png';
import palermoImg15 from '@proyectos/iglesia_palermo/ipalermo_img15.png';

/* 7 Iglesia Museo contemporaneo */
import museoArteImg1 from '@proyectos/museo_artes/museoArte_img1.jpg'
import museoArteImg2 from '@proyectos/museo_artes/museoArte_img2.jpg'
import museoArteImg3 from '@proyectos/museo_artes/museoArte_img3.jpg'
import museoArteImg4 from '@proyectos/museo_artes/museoArte_img4.jpg'
import museoArteImg5 from '@proyectos/museo_artes/museoArte_img5.jpg'
import museoArteImg6 from '@proyectos/museo_artes/museoArte_img6.jpg'
import museoArteImg7 from '@proyectos/museo_artes/museoArte_img7.jpg'

/* 8 Patio Fenesponal */
import fenesponaImg1 from '@proyectos/patio_fenesponal/fenesponal_img1.png'
import fenesponaImg2 from '@proyectos/patio_fenesponal/fenesponal_img2.png'
import fenesponaImg3 from '@proyectos/patio_fenesponal/fenesponal_img3.png'
import fenesponaImg4 from '@proyectos/patio_fenesponal/fenesponal_img4.png'
import fenesponaImg5 from '@proyectos/patio_fenesponal/fenesponal_img5.jpg'
import fenesponaImg6 from '@proyectos/patio_fenesponal/fenesponal_img6.jpg'
import fenesponaImg7 from '@proyectos/patio_fenesponal/fenesponal_img7.jpg'
import fenesponaImg8 from '@proyectos/patio_fenesponal/fenesponal_img8.png'
import fenesponaImg9 from '@proyectos/patio_fenesponal/fenesponal_img9.png'

/* 9 Recepción Lobby */
import recepcionimg1 from '@proyectos/recepcion_lobby/recepcionLobby_img1.jpg'
import recepcionimg2 from '@proyectos/recepcion_lobby/recepcionLobby_img2.jpg'
import recepcionimg3 from '@proyectos/recepcion_lobby/recepcionLobby_img3.jpg'
import recepcionimg4 from '@proyectos/recepcion_lobby/recepcionLobby_img4.jpg'
import recepcionimg5 from '@proyectos/recepcion_lobby/recepcionLobby_img5.jpg'
import recepcionimg6 from '@proyectos/recepcion_lobby/recepcionLobby_img6.jpg'
import recepcionimg7 from '@proyectos/recepcion_lobby/recepcionLobby_img7.jpg'

/* 10 Restaurante Brazeiro */
import brazeiroImg1 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img1.jpg'
import brazeiroImg2 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img2.jpg'
import brazeiroImg3 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img3.jpg'
import brazeiroImg4 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img4.jpg'
import brazeiroImg5 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img5.jpg'

/*---- Proyects ----*/
const proyectsData = [
    {   
        id: 0,
        delay: 7000,
        name: 'Armonización de espacios',
        ruta: '/armonizacion_espacios',
        desc: () => (
            <p>
                "Vaastu" es una palabra sáscrita que significa vivienda y "shastra” ciencia. 
                palabra compuesta nacida de la India y que al enlazarla forma el vasstu sastra, 
                mencionando una disciplina en donde su eje fundamental es la arquitectura.
                <br /><br />
                Es así como esta disciplina incorpora en los espacios una armonización que cuenta 
                con la ubicación del sol, los puntos cardinales, los elementos naturales y un gran 
                número de elementos decorativos que permiten a la vivienda y al espacio habitacional 
                arte, diseño, geometría y espacialidad.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: armonizacionImg1,
            },
            {
                id: `img${1}`,
                img: armonizacionImg2,
            }
        ]
    },
    {   
        id: 1,
        delay: 10000,
        name: 'Casa Container',
        ruta: '/casa_container',
        desc: () => (
            <p>
                Casa container es un proyecto pensado en el uso de contenedores para la habitabilidad 
                de una familia pequeña cansada de la cotidianidad de la ciudad y de la arquitectura de 
                los apartamentos actuales. Esta vivienda se sitúa en los alrededores de la ciudad de Bogotá 
                y su plan arquitectónico se fundamenta en lo necesario para vivir y las necesidades 
                específicas del cliente.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: casaContainerImg1},
            {
                id: `img${1}`,
                img: casaContainerImg2},
            {
                id: `img${2}`,
                img: casaContainerImg3}
        ]
    },
    {
        id: 2,
        delay: 12350,
        name: 'Iglesia Yeled',
        ruta: '/iglesia-yeled',
        desc: () => (
            <p>
                Yeled es un proyecto ubicado en la ciudad de Ibagué departamento del Tolima. 
                esta implantación se diseña con la misión primera de que el ciudadano sea la 
                parte fundamental de su funcionamiento. La propuesta cuenta con espacios diferentes 
                de culto, como área de atención médica, servicio a la comunidad, ambiente de distracción, 
                oficinas y punto de encuentro dentro del barrio.
            </p>
        ),
        multimedia: [
            {
                id: `restaurante_b-${0}`,
                img: yeledImg1},
            {
                id: `restaurante_b-${1}`,
                img: yeledImg2},
            {
                id: `restaurante_b-${2}`,
                img: yeledImg3}
        ]
    },
    {
        id: 3,
        delay: 15700,
        name: 'Iglesia Jardin',
        ruta: '/inglesia_jardin',
        desc: () => (
            <p>
                Este equipamiento requería para su remodelación un cambio de sus dos fachadas 
                y distribución interna de los espacios actuales.  Situado en un barrio con 
                diferentes problemáticas fue necesario con un bajo presupuesto dar forma y 
                vida a estos elementos arquitectónicos existentes.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: jardinImg1},
            {
                id: `img${1}`,
                img: jardinImg2},
            {
                id: `img${2}`,
                img: jardinImg3},
            {
                id: `img${3}`,
                img: jardinImg4},
            {
                id: `img${4}`,
                img: jardinImg5},
            {
                id: `img${5}`,
                img: jardinImg6},
            {
                id: `img${6}`,
                img: jardinImg7},
        ]
    },
    {
        id: 4,
        delay: 27000,
        name: 'Iglesia Luna Park',
        ruta: '/inglesia_luna-park',
        desc: () => (
            <p>
                Los espacios ocupados normalmente cambian de uso con el tiempo, 
                este proyecto requería de una distribución de las áreas internas 
                con el objetivo de lograr una óptima sensación en los espacios 
                internos, para tal caso fue necesario plantear tres factores. 
                <br /><br />
                a). interacción de las personas con las áreas a ocupar 
                <br />
                b). Distribución de las áreas 
                <br />
                c). iluminación dentro del nuevo diseño.  
                <br /><br />
                El diseño final permite recuperar la iluminación natural de las 
                ventanas y generar con ello, amplitud y los demás beneficios propios 
                de esta en la arquitectura.

            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: lunaParkImg1},
            {
                id: `img${1}`,
                img: lunaParkImg2},
            {
                id: `img${2}`,
                img: lunaParkImg3},
        ]
    },
    {
        id: 5,
        delay: 4500,
        name: 'Iglesia Palermo',
        ruta: '/inglesia_palermo',
        desc: () => (
            <p>
                La propuesta se fundamenta en el cambio de imagen de la una Iglesia que recoge 
                a una gran parte de sus feligreses en centro de la ciudad, el diseño se fundamenta 
                en la comunión entre un auditorio y un templo, contemplando factores de diseño como 
                amplitud del escenario, elementos acústicos, decorativos en madera y cambio de 
                estructura existente.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: palermoImg1},
            {
                id: `img${1}`,
                img: palermoImg2},
            {
                id: `img${2}`,
                img: palermoImg3},
            {
                id: `img${3}`,
                img: palermoImg4},
            {
                id: `img${4}`,
                img: palermoImg5},
            {
                id: `img${5}`,
                img: palermoImg6},
            {
                id: `img${6}`,
                img: palermoImg7},
            {
                id: `img${7}`,
                img: palermoImg8},
            {
                id: `img${8}`,
                img: palermoImg9},
            {
                id: `img${9}`,
                img: palermoImg10},
            {
                id: `img${10}`,
                img: palermoImg11},
            {
                id: `img${11}`,
                img: palermoImg12},
            {
                id: `img${12}`,
                img: palermoImg13},
            {
                id: `img${13}`,
                img: palermoImg14},
            {
                id: `img${14}`,
                img: palermoImg15},
        ]
    },
    {
        id: 6,
        delay: 39000,
        name: 'Museo de Artes Contemporaneas',
        ruta: '/museo_artes',
        desc: () => (
            <p>
                Dentro de la arquitectura definir lo que es bello y lo que no lo es dependerá 
                de cada punto de vista del observador, lo que para una persona puede ser 
                absolutamente bello, para otro no lo será y no despertará algún interés, sin embargo, 
                existe el sentido del buen gusto, y es este el que permite definir la belleza arquitectónica.
                <br /> <br />
                El sentido del buen gusto depender entonces de la cultura, educación y entorno, 
                para ello es necesario el diseño y la creación de espacios que permitan a la 
                comunidad encontrarse con el arte.
            </p>
        ),
        multimedia: [
            {
                id: `museoArte${0}`,
                img: museoArteImg1},
            {
                id: `museoArte${1}`,
                img: museoArteImg2},
            {
                id: `museoArte${2}`,
                img: museoArteImg3},
            {
                id: `museoArte${3}`,
                img: museoArteImg4},
            {
                id: `museoArte${4}`,
                img: museoArteImg5},
            {
                id: `museoArte${5}`,
                img: museoArteImg6},
            {
                id: `museoArte${6}`,
                img: museoArteImg7},
        ]
    },
    {
        id: 7,
        delay: 16800,
        name: 'Patio Fenesponal',
        ruta: '/patio_fenesponal',
        desc: () => (
            <p>
                Esta remodelación permite entender que las exigencias del cliente deben ser entendidas 
                por medio de un programa arquitectónico en el cual se permita orientar la idea, la función 
                y el uso del espacio que permita obtener un producto final.
                <br /> <br />
                Patio o terraza es una remodelación que descubre un área olvidada por el afán y 
                la ocupación del mismo trabajo. La idea inicial como cambio de cubierta por 
                mantenimiento paso a ser una adecuación y remodelación que incorpora la idea del 
                cliente, el entorno en que se desarrolla el proyecto y finalmente incorporar a 
                la arquitectura existente.
            </p>
        ),
        multimedia: [
            {   
                id: `patio_Fenesponal-${0}`,
                img: fenesponaImg1
            },
            {   
                id: `patio_Fenesponal-${1}`,
                img: fenesponaImg2
            },
            {   
                id: `patio_Fenesponal-${2}`,
                img: fenesponaImg3
            },
            {   
                id: `patio_Fenesponal-${3}`,
                img: fenesponaImg4
            },
            {   
                id: `patio_Fenesponal-${4}`,
                img: fenesponaImg5
            },
            {   
                id: `patio_Fenesponal-${5}`,
                img: fenesponaImg6
            },
            {   
                id: `patio_Fenesponal-${6}`,
                img: fenesponaImg7
            },
            {   
                id: `patio_Fenesponal-${7}`,
                img: fenesponaImg8
            },
            {   
                id: `patio_Fenesponal-${8}`,
                img: fenesponaImg9
            }
        ] 
    },
    {
        id: 8,
        delay: 22680,
        name: 'Recepción Lobby',
        ruta: '/recepcion-lobby',
        desc: () => (
            <p>
                La entrada desde el exterior de este proyecto se planteó con una sencilla 
                división para disminuir el ruido e independizar las reas de acuerdo con su 
                orden de uso e importancia, así nació esta idea, donde la división arquitectónica 
                con un detalle único en madera logra separar el   espacio de lobby de un área privada 
                en la que el sonido y la estética del módulo, tendrían gran importancia en el diseño.
            </p>
        ),
        multimedia: [
            {
                id: `recepcion_lobby-${0}`,
                img: recepcionimg1},
            {
                id: `recepcion_lobby-${1}`,
                img: recepcionimg2},
            {
                id: `recepcion_lobby-${2}`,
                img: recepcionimg3},
            {
                id: `recepcion_lobby-${3}`,
                img: recepcionimg4},
            {
                id: `recepcion_lobby-${4}`,
                img: recepcionimg5},
            {
                id: `recepcion_lobby-${5}`,
                img: recepcionimg6},
            {
                id: `recepcion_lobby-${6}`,
                img: recepcionimg7},
        ] 
    },
    {
        id: 9,
        delay: 32050,
        name: 'Restaurante Brazeiro',
        ruta: '/restaurante-brazeiro',
        desc: () => (
            <p>
                Remodelación de restaurante Brazeiro ubicado en la ciudad de Bogotá D.C
                Centro comercial el Edén, es un proyecto en donde se construyó un espacio 
                adecuado para área de cocina bodega, cuartos fríos, mezanine, área de restaurante y terraza.  
                El proyecto conto con norma de higiene alimentaria, certificación Retie y diseños estructurales.

            </p>
        ),
        multimedia: [
            {
                id: `restaurante_b-${0}`,
                img: brazeiroImg1},
            {
                id: `restaurante_b-${1}`,
                img: brazeiroImg2},
            {
                id: `restaurante_b-${2}`,
                img: brazeiroImg3},
            {
                id: `restaurante_b-${3}`,
                img: brazeiroImg4},
            {
                id: `restaurante_b-${4}`,
                img: brazeiroImg5}
        ]
    }
]

export default proyectsData;