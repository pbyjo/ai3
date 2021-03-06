import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

/* Páginas */
import Home from '@pages/Home';
import Equipo from '@pages/Equipo';
import Proyectos from '@pages/Proyectos';
import MyGallery from '@pages/MyGallery';
import Blog from '@pages/Blog';
import Contacto from '@pages/Contacto';
import NotFound from '@pages/NotFound';


const MyRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/proyectos' element={<Proyectos />} />
                <Route exact path='/interiorismo' element={<MyGallery />} />
                <Route exact path='/ideas' element={<Blog />} />
                <Route exact path='/nosotros' element={<Equipo />} />
                <Route exact path='/contacto' element={<Contacto />} />
                <Route path="*" element={<NotFound />} />
            </Routes> 
        </BrowserRouter>
    ) 
}

export default MyRoutes;