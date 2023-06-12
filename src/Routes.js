import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'

import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import Contacto from './containers/pages/Contacto'
import CommingSoon from "./containers/pages/ComingSoon"
//Ver rutas que pueden tener animaciones
import { AnimatePresence } from 'framer-motion'

const Routess = () => {
    //TODA LA CONFIGURACON SE LA PUSE AL LAYOUT
    //Para detectar el cambio de pantalla y hacer transicion
    const location = useLocation()

    return(
        //Idicamos con el key pathname es el url en la linea de Routes
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Display*/}
                <Route path="*" element={<Error404 />} />
                {/* Home Display*/}
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="/comingsoon" element={<CommingSoon />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Routess