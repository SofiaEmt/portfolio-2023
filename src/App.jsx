import { useState} from 'react'
/* import './App.css' */
import './Styles/style.css'

import { Route, Routes } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import 'reactjs-popup/dist/index.css';

import Home from './Pages/home';
import About from './Pages/About';
import gsap from "gsap";

/* import Routes from 'react-dom';
import Route from 'react-dom' */

import('./assets/fonts/PPNeueMontreal-Bold.woff');
import('./assets/fonts/PPNeueMontreal-Book.woff');
import('./assets/fonts/PPNeueMontreal-Thin.woff');

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

{/*     <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
 */}
      
{/*       <h1>HEJ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
    </>
  );
}

export default App;
