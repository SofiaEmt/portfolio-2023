import Popup from 'reactjs-popup';
import hubspotPreview from '../../assets/Hubspot_demo.mp4';
import { useEffect, useRef } from 'react';

const Hubspot = () => {
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
                    <section className='popup hub'>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <h1>Hubspot site</h1>
                        <p>This is a template site created in Hubspot/HubL. The design was not created by me and the project was done during my internship period at KAN. </p>
                        <p>The site, however, is <span>completely built and coded by me</span>, with different user friendly settings that gives the client lots of freedom to customize the site and the modules in it. For example: change of different themes colors + dark/light mode, fully functional search bar, possible to switch from mega menu to smaller block menu, fully responsible UI etc.</p>
                        <ul>
                            <li>Hubspot/HubL</li>
                            <li>TailwindsCSS</li>
                            <li>Javascript</li>
                            <li>Alpine.js</li>
                            <li>HTML</li>
                        </ul>

                        <div className='img_wrapper'>
                            <video 
                                style={{ width: "1000px", margin: "0 auto" }}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={hubspotPreview}
                                ref={videoEl}
                            />

                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Hubspot;