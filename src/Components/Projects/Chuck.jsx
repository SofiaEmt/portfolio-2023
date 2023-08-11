import Popup from 'reactjs-popup';

import glcOne from '../../assets/glc_2.png';
import glcTwo from '../../assets/chuck_1.png';
import glcThree from '../../assets/glc_3.png';
import glcFour from '../../assets/glc_4.png';

import { useEffect, useRef } from 'react';

const Chuck = () => {
    return (
        <Popup trigger={<button className='overlay'></button>} model nested>
                {close => ( 
                    <section className='popup chuck'>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <h1>Good Luck Chuck</h1>
                        <p>A fun and experimental school project where me and a group of classmates worked with Phaser 3 to create a top-down shooter game.</p>
                        <ul>
                            <li>Javascript</li>
                            <li>Phaser 3</li>
                            -
                            <li>
                                <a href="https://github.com/BenCiantar/zombie-game-project" target="_blank" rel="noreferrer noopener">Project on Github</a>
                            </li>
                        </ul>

                        <div className='img_wrapper'>
                                <figure className=''>
                                    <img src={glcOne} />
                                </figure>
                                <figure className=''>
                                    <img src={glcTwo} />
                                </figure>
                                <figure className=''>
                                    <img src={glcThree} />
                                </figure>
                                <figure className=''>
                                    <img src={glcFour} />
                                </figure>
                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Chuck;