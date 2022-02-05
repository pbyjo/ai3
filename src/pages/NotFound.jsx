/* Assets */
import notFoundImage from '@404/404.png';
import pezImage from '@404/pez.png';
import pezImageSec from '@404/pez2.png';
import textError from '@404/404text.png';

/* Contenedores */
import Layout from '@containers/Layout'

const NotFound = () => {
    return(
        <Layout>
            <section className="notfound__section">
                <figure className="notfound__section-ilustration">
                    <img src={textError} alt="404 Ilustration" />
                    <img src={notFoundImage} alt="404 Ilustration" />
                    <img src={pezImage} alt="404 Ilustration fish" />
                    <img src={pezImageSec} alt="404 Ilustration fish" />
                    <h2>Ups! no hemos encontrado esta página</h2>
                </figure>
            </section>
        </Layout>
    )
}

export default NotFound;