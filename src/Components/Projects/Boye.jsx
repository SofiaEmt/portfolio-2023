import Popup from 'reactjs-popup';

import boyeOne from '../../assets/boye_2.png'; 
import boyeTwo from '../../assets/boye_3.png'; 

const Boye = () => {
    return (
        <Popup trigger={<button className='overlay'></button>} model nested>
                {close => ( 
                    <section className='popup chuck'>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <h1>Karin Boye Poems</h1>
                        <p>An experimental personal project I created while practising Next.js. I created a json file I used to collect the poetry data, looped through this, and then outputted this on the site using Next functionality for more efficient rendering.</p>
                        <ul>
                            <li>Next.js</li>
                            <li>CSS</li>
                            <li>API</li>
                            -
                            <li>
                                <a> Project on Github</a>
                            </li>
                        </ul>

                        <div className='img_wrapper'>
                                <figure className=''>
                                    <img src={boyeOne} />
                                </figure>
                                <figure className=''>
                                    <img src={boyeTwo} />
                                </figure>
                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Boye;