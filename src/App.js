import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import { Helmet, HelmetProvider} from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './store'
import Routess from './Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blocksidian | Tickets</title>
        <meta name='description' content='Buy and sell tickets with solidity' />
        <meta name='keywords' content='blocksidian, blockchain' />
        <meta name='robots' content="all" />
        <meta name='author' content='Blocksidian' />
        <meta name='publisher' content='Blocksidian' />
      </Helmet>

      <Provider store={store}>
          <Router>
            <Routess />
          </Router>
        </Provider>
    </HelmetProvider>
    
  );
}

export default App;
