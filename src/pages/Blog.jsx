/* Containers */
import Layout from '@containers/Layout';
import Articulo from '../components/Articulo';

/* Data */
import dataBlog from '@data/blog.js';

const Blog = () => {

    return(
        <Layout>
            <section className="blog__section">
                <div className="blog__section-head">
                    <h1>ARTICULOS</h1>
                </div>

                <div className="blog__container">
                    {
                        dataBlog.map((article) => (
                            <Articulo 
                                title={article.title}
                                id={article.id}
                                autor={article.autor}
                                date={article.date}
                                description={article.description}
                                text={article.text}
                                labels={article.labels}
                                key={article.id}
                            />
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}

export default Blog;