import Popup from 'reactjs-popup';

import wgOne from '../../assets/wg_1.jpg';
import wgTwo from '../../assets/wg_2.jpg';
import wgThree from '../../assets/wg_3.png';

import { useEffect, useRef } from 'react';

const Workout = () => {
    return (
        <Popup trigger={<button className='overlay'></button>} model nested>
                {close => ( 
                    <section className='popup chuck'>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <h1>Workout Generator</h1>
                        <p>I found that the workout generator's that exist online had bad UI and were difficult to use. I wanted to create a website where you only had to click once to get a good and heavy workout generated for you. So that's what I did!</p>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>SCSS</li>
                            -
                            <li><a href="https://github.com">Project on Github</a></li>
                        </ul>

                        <div className='img_wrapper'>
                                <figure className='wgOne'>
                                    <img src={wgOne} />
                                </figure>
                                <div className='flex'>
                                    <figure className=''>
                                        <img src={wgTwo} />
                                    </figure>
                                    <figure className=''>
                                        <img src={wgThree} />
                                    </figure>
                                </div>
                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Workout;