import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import Contacto from './containers/pages/Contacto'
import CommingSoon from "./containers/pages/ComingSoon"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path="*" element={<Error404 />} />

          {/* Home Display*/}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/comingsoon" element={<CommingSoon />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
