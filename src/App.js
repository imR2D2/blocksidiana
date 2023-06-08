import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import About from './containers/pages/About'
import Blog from './containers/pages/Blog'
import Contacto from './containers/pages/Contacto'

import Portafolio from './containers/pages/portafolio/Portafolio'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path="*" element={<Error404 />} />

          {/* Home Display*/}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />

          {/*Portafolio*/}

          {/*Spline*/}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
