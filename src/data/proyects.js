/*---- Assets ----*/

/* Iglesia Palermo */
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

/* Armonización de espacios */
import armonizacionImg1 from '@proyectos/armonizacion/armonizacion_img1.jpg';

/* Casa Container */
import casaContainerImg1 from '@proyectos/casa_container/casaContainer_img1.jpg';
import casaContainerImg2 from '@proyectos/casa_container/casaContainer_img2.jpg';

/* Iglesia Jardin */
import jardinImg1 from '@proyectos/iglesia_jardin/iglesiaJardin_img1.png'
import jardinImg2 from '@proyectos/iglesia_jardin/iglesiaJardin_img2.png'
import jardinImg3 from '@proyectos/iglesia_jardin/iglesiaJardin_img3.png'
import jardinImg4 from '@proyectos/iglesia_jardin/iglesiaJardin_img4.png'

/* Iglesia Luna Park */
import lunaParkImg1 from '@proyectos/iglesia_lunaPark/lunaPark_img1.png'
import lunaParkImg2 from '@proyectos/iglesia_lunaPark/lunaPark_img2.jpg'
import lunaParkImg3 from '@proyectos/iglesia_lunaPark/lunaPark_img3.jpg'

/* Iglesia Luna Park */
import museoArteImg1 from '@proyectos/museo_artes/museoArte_img1.jpg'
import museoArteImg2 from '@proyectos/museo_artes/museoArte_img2.jpg'
import museoArteImg3 from '@proyectos/museo_artes/museoArte_img3.jpg'
import museoArteImg4 from '@proyectos/museo_artes/museoArte_img4.jpg'
import museoArteImg5 from '@proyectos/museo_artes/museoArte_img5.jpg'
import museoArteImg6 from '@proyectos/museo_artes/museoArte_img6.jpg'
import museoArteImg7 from '@proyectos/museo_artes/museoArte_img7.jpg'

/* Patio Fenesponal */
import fenesponaImg1 from '@proyectos/patio_fenesponal/fenesponal_img1.png'
import fenesponaImg2 from '@proyectos/patio_fenesponal/fenesponal_img2.png'
import fenesponaImg3 from '@proyectos/patio_fenesponal/fenesponal_img3.png'
import fenesponaImg4 from '@proyectos/patio_fenesponal/fenesponal_img4.png'
import fenesponaImg5 from '@proyectos/patio_fenesponal/fenesponal_img5.jpg'
import fenesponaImg6 from '@proyectos/patio_fenesponal/fenesponal_img6.jpg'
import fenesponaImg7 from '@proyectos/patio_fenesponal/fenesponal_img7.jpg'
import fenesponaImg8 from '@proyectos/patio_fenesponal/fenesponal_img8.png'

/* Recepción Lobby */
import recepcionimg1 from '@proyectos/recepcion_lobby/recepcionLobby_img1.jpg'
import recepcionimg2 from '@proyectos/recepcion_lobby/recepcionLobby_img2.jpg'
import recepcionimg3 from '@proyectos/recepcion_lobby/recepcionLobby_img3.jpg'
import recepcionimg4 from '@proyectos/recepcion_lobby/recepcionLobby_img4.jpg'
import recepcionimg5 from '@proyectos/recepcion_lobby/recepcionLobby_img5.jpg'

/* Restaurante Brazeiro */
import brazeiroImg1 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img1.jpg'
import brazeiroImg2 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img2.jpg'
import brazeiroImg3 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img3.jpg'
import brazeiroImg4 from '@proyectos/restaurante_brazeiro/restauranteBrazeiro_img4.jpg'

/*---- Proyects ----*/
const proyectsData = [
    {
        id: 0,
        delay: 8000,
        name: 'Iglesia Palermo',
        ruta: '/inglesia_palermo',
        desc: () => (
            <p>La propuesta se fundamenta en el cambio de imagen de la una Iglesia
            que recoge a una gran parte de sus feligreses en centro de la ciudad, el
            diseño se fundamenta en la comunión entre un auditorio y una templo,
            contemplando factores de diseño como amplitud del escenario, elementos
            acústicos, decorativos en madera , cambio de estructura existente.</p>
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
                img: palermoImg12}
        ]
    },
    {
        id: 1,
        delay: 15700,
        name: 'Iglesia Jardin',
        ruta: '/inglesia_jardin',
        desc: () => (
            <p>
                Este equipamiento requería para su remodelación un cambio de sus dos fachadas\
                y distribución interna de los espacios actuales.  Situada en un barrio con diferentes\
                problemáticas era necesario con un bajo presupuesto dar forma y vida a estos elementos\
                arquitectónicos existentes.
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
        ]
    },
    {
        id: 2,
        delay: 27000,
        name: 'Iglesia Luna Park',
        ruta: '/inglesia_luna-park',
        desc: () => (
            <p>
                Los espacios ocupados normalmente cambian de uso con el tiempo y la necesidad,
                en este caso la distribución de las áreas sería la solución para cumplir con una 
                óptima sensación entre la interacción de las personas con el espacio. No se debe 
                olvidar que recuperar la iluminación natural de las ventanas genera una sensación 
                de amplitud sin olvidar los beneficios innatos propios de la luz natural en la arquitectura. 
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
        id: 3,
        delay: 39000,
        name: 'Museo de Artes Contemporaneas',
        ruta: '/museo_artes',
        desc: () => (
            <p>
                Dentro de la arquitectura definir lo que es bello y lo que no lo es dependerá 
                de cada punto de vista de una construcción, lo que para una persona puede ser 
                absolutamente bello, para otro no despertará ningún interés, sin embargo, 
                existe el sentido del buen gusto este permitirá encontrar algunos puntos de 
                lo que se podrá definir la belleza arquitectónica.
                <br /> <br />
                El sentido del buen gusto dependerá de la cultura, educación y entorno, 
                para ello es necesario el diseño y la creación de espacios que permitan a 
                la comunidad disfrutar del arte.
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
        id: 4,
        delay: 45000,
        name: 'Armonización de espacios',
        ruta: '/armonizacion_espacios',
        desc: () => (
            <p>
                Conocido también solo como Vastu, es una palabra sánscrita 
                "vastu" significa vivienda y "shastra" ciencia. Proviene de 
                la India y tiene por eje la arquitectura.
                <br /> <br />
                Permite así a los espacios incorporar una armonización del mismo
                tomando en cuenta o como eje fundamental los puntos cardinales
                como demás elementos naturales y decorativos dar una sensación al
                espacio habitacional. En resumen, el Vastu Shastra es el arte del diseño,
                la geometría y la espacialidad.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: armonizacionImg1,
            },
            {
                id: `img${1}`,
                img: armonizacionImg1,
            }
        ]
    },
    {   
        id: 5,
        delay: 10000,
        name: 'Casa Container',
        ruta: '/casa_container',
        desc: () => (
            <p>
                Casa container es un proyecto pensado en el uso de contenedores para la habitabilidad
                de una familia pequeña cansada de la cotidianidad de la ciudad y de las formas de los
                apartamentos actuales. Esta vivienda se sitúa en los alrededores de la ciudad de Bogotá
                y su plan arquitectónico se forma con las necesidades del cliente de tener lo necesario
                para vivir.
            </p>
        ),
        multimedia: [
            {
                id: `img${0}`,
                img: casaContainerImg1},
            {
                id: `img${1}`,
                img: casaContainerImg2},
        ]
    },
    {
        id: 6,
        delay: 16800,
        name: 'Patio Fenesponal',
        ruta: '/patio_fenesponal',
        desc: () => (
            <p>
                Esta remodelación permite entender que las necesidades del 
                cliente deben en su mayoría ser entendidas por medio de un 
                programa arquitectónico en el cual se permita orientar la idea, 
                la función, uso del espacio y exhortar a pensar en el verdadero producto final.
                <br /> <br />
                Patio o terraza es una remodelación que descubre un área olvidada por el afán 
                y la ocupación del mismo trabajo. La idea inicial como cambio de cubierta 
                por mantenimiento paso a ser una adecuación y remodelación que incorpora 
                la verdadera necesidad del cliente como del entorno en que se desarrolla tal. 
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
            }
        ] 
    },
    {
        id: 7,
        delay: 22680,
        name: 'Recepción Lobby',
        ruta: '/recepcion-lobby',
        desc: () => (
            <p>
                La entrada desde el exterior de este proyecto se planteó con una sencilla división
                que permitiera reducir el ruido e independizar las áreas de acuerdo con su orden de 
                uso e importancia, así nació esta división con un detalle único en madera que permite 
                tener una separación del espacio, pero sin ser ajena a la misma área, objetivo logrado 
                con el uso de un vidrio de seguridad en medio de ella.
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
        ] 
    },
    {
        id: 8,
        delay: 32050,
        name: 'Restaurante Brazeiro',
        ruta: '/restaurante-brazeiro',
        desc: () => (
            <p>
                Remodelación de restaurante BRAZEIRO ubicado en la ciudad de Bogotá D.C
                Centro comercial EL EDEN, Se plantea un espacio adecuado para área de cocina,
                bodega, cuartos fríos, mezanine, área de restaurante y terraza.
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
                img: brazeiroImg4}
        ]
    }
]

export default proyectsData;