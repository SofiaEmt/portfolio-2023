import { Link } from 'react-router-dom';

import sun from '../assets/sun.svg'
import yarn from '../assets/yarn.svg'
import arrow from '../assets/arrow_down.svg'

const Heading = () => {
    return (
        <>
        <div className="intro">

            <section style={{marginTop: '-1.8rem' }}>
                <figure className="img_container">
                    <img className="img sun" src={sun} target="_blank" />

                    <div className="intro_cont">
                        <span className="intro_p intro--first">A Frontend</span>
                        <span className="intro_p intro--second">Developer led</span>
                        <span className="intro_p intro--third">into this field by</span>
                        <span className="intro_p intro--fourth">the urge of living</span>
                        <span className="intro_p intro--fifth">freely and doing</span>
                        <span className="intro_p intro--sixth">inspiring work.</span>
    {/*                     <figure className="yarn_container">
                            <img className="img" src={yarn} target="_blank"/>
                        </figure> */}
                        
                    </div>

                

                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
                
            </figure> 
        </section>


{/*         <figure className='arrow_container'>
            <img src={arrow} target="_blank" />
        </figure>  */}

{/*         <p>Scroll down why won't you!</p> */}

        </div>
        </>
    )
}

export default Heading;