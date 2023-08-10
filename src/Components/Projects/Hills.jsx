import Popup from 'reactjs-popup';
import hillsPreview from '../../assets/thehills_demo.mp4';
import { useEffect, useRef } from 'react';

const Hills = () => {
    const videoEl = useRef(null);
    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <Popup trigger={<button className='overlay'></button>} model nested>
                {close => ( 
                    <section className='popup'>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <h1>The Hills</h1>
                        <p>This is a unique e-commerce/social platform created by me and my friends as a school project at Hyper Island. We used both frontend and backend languages to create a functional product. You can buy, style and sell an apartment in this online space.</p>
                        <ul>
                            <li>HTML</li>
                            <li>Sass</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                        <ul className='github'>
                            <li><a href="https://github.com/iseneld/m8__e-commerce" target="_blank" rel="noreferrer noopener">Frontend on Github</a></li>
                            -
                            <li><a href="https://github.com/iwanast/m8_e-commerce-backend" target="_blank" rel="noreferrer noopener">Backend on Github</a></li>
                        </ul>

                        <div className='img_wrapper'>
                            <video 
                                style={{ maxWidth: "85%", width: "1000px", margin: "0 auto" }}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={hillsPreview}
                                ref={videoEl}
                            />

                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Hills;