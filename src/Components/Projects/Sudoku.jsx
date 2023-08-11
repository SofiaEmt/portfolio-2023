import Popup from 'reactjs-popup';
import sudokuMobile from '../../assets/sudoku3.png'
import sudokuPreview from '../../assets/sudokumovie.mp4';
import sudokuTablet from '../../assets/tablet_sudoku.png'
import { useEffect, useRef } from 'react';

const Sudoku = () => {
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
                        <h1>Sudoku Player</h1>
                        <p>This is a personal project I did at the end of the last module on Hyper Island. I've always been a super fan of playing sudoku. In this project I went back to vanilla Javascript, focusing lots on UI in the design process.</p>
                        <ul>
                            <li>HTML</li>
                            <li>Sass</li>
                            <li>Javascript</li>
                            -
                            <li><a href="https://github.com/SofiaEmt/sudokuinspace" target="_blank" rel="noreferrer noopener">Project on Github</a></li>
                        </ul>

                        <div className='img_wrapper'>
                            <video className="sudoku_vid" 
                                style={{ maxWidth: "75%", width: "1000px", margin: "0 auto" }}
                                playsInline
                                loop
                                muted
                                controls
                                alt="All the devices"
                                src={sudokuPreview}
                                ref={videoEl}
                            />
                                <figure className=''>
                                    <img src={sudokuMobile} />
                                </figure>
                        </div>
                    </section>
                )}
                </Popup>
    )
}

export default Sudoku;