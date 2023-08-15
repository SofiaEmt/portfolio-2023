import './Styles/style.css'

import { Route, Routes } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

import Home from './Pages/home';
import About from './Pages/About';

import('./assets/fonts/PPNeueMontreal-Bold.woff');
import('./assets/fonts/PPNeueMontreal-Book.woff');
import('./assets/fonts/PPNeueMontreal-Thin.woff');

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
