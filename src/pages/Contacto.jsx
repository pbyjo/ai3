/* Components */
import MenuDesktop from '@components/MenuDesktop';
import Maps from '@components/Maps';

/* Containers */
import Layout from '@containers/Layout';

const Contacto = () => {
    return (
        <Layout>
            <section className="contacto__section">
                <MenuDesktop />
                <div className="contacto__container">
                    <div className="contacto__container-data">
                        <h3>Teléfono:</h3>
                        <a 
                            href="https://api.whatsapp.com/send?phone=573155153029&text=Hola, vi su contacto en la página web y estoy interesado en..."
                            target='_blank'
                        >
                            315 515 3029
                        </a>
                        <h3>Envíanos un email:</h3>
                        <p>ai3.Correspondencia@gmail.com</p>
                        <p>Ingeniero.ai3studio@gmail.com</p>

                        <h3>Nosostros te escribimos 📨:</h3>
                        <div>
                            <input required type="email" placeholder='Correo' />
                            <button type='submit'>Enviar</button>
                        </div>
                    </div>
                    <Maps />
                </div>
            </section>
        </Layout>
    )
}

export default Contacto;