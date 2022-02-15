/* Containers */
import Layout from '@containers/Layout';
import Articulo from '../components/Articulo';

/* Components */
import MenuDesktop from '@components/MenuDesktop';

/* Data */
import dataBlog from '@data/blog.js';

const Blog = () => {

    return(
        <Layout>
            <section className="blog__section">
                <MenuDesktop />
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