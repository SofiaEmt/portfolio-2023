import Popup from 'reactjs-popup';
import sudokuMobile from '../assets/sudoku3.png'
import sudokuPreview from '../assets/sudokumovie.mp4';
import sudokuTablet from '../assets/tablet_sudoku.png'
import Sudoku from './Projects/Sudoku';
import Hills from './Projects/Hills';
import Chuck from './Projects/Chuck';
import Workout from './Projects/Workout';
import Boye from './Projects/Boye';
import Hubspot from './Projects/Hubspot';

import sudokuBg from '../assets/sudoku1.png';
import workoutBg from '../assets/workout_1.jpg';
import chuckBg from '../assets/chuck_1.png';
import hillsBg from '../assets/hills.jpeg';
import boyeBg from '../assets/boye_1.png';
import hubspotBg from '../assets/hubspot_1.png';

import { gsap } from "gsap";

import { useLayoutEffect, useRef } from 'react';

const Projects = () => {

    const projectCards = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".card_desc", {duration: .5, zoom:1.5, ease: "power1.out", opacity:0, stagger:0.05});
        }, projectCards);

        return () => ctx.revert();
        
    }, []);

    

    return(
        <section ref={projectCards} className="wrapper projects">
            <div className="card gradient">
                <figure><img src={sudokuBg} /></figure>
                <Sudoku />
                <article className="card_desc">
                    <h6>Sudoku Player</h6>
                    <ul className="tech">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>Javascript</li>
                    </ul>
                </article>
            </div>

            <div className="card gradient">
                <div className="overlay"></div>
                <figure><img src={hillsBg} /></figure>
                <Hills />
                <article className="card_desc">
                    <h6>The Hills</h6>
                    <ul className="tech">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>Javascript</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                    </ul>
                </article>
            </div>
            <div className="card gradient">
                <div className="overlay"></div>
                <figure><img className="full" src={workoutBg} /></figure>
                <Workout />
                <article className="card_desc">
                    <h6>Workout<br></br>Generator </h6>
                    <ul className="tech">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>Javascript</li>
                    </ul>
                </article>
            </div>
            <div className="card gradient">
                <div className="overlay"></div>
                <figure><img src={chuckBg} /></figure>
                <Chuck />
                <article className="card_desc">
                    <h6>Good <br></br>Luck Chuck</h6>
                    <ul className="tech">
                        <li>Phaser3</li>
                        <li>Javascript</li>
                    </ul>
                </article>
            </div>
            <div className="card gradient">
                <div className="overlay"></div>
                <figure><img className="full" src={hubspotBg} /></figure>
                <Hubspot />
                <article className="card_desc">
                    <h6>Full <br></br>Hubspot site</h6>
                    <ul className="tech">
                        <li>Hubspot/HubL</li>
                        <li>HTML</li>
                        <li>TailwindCSS</li>
                        <li>Alpine.js</li>
                        <li>Javascript</li>
                    </ul>
                </article>
            </div>
            <div className="card gradient">
                <div className="overlay"></div>
                <figure><img className="full" src={boyeBg} /></figure>
                <Boye />
                <article className="card_desc">
                    <h6>Karin Boye <br></br>Poetry</h6>
                    <ul className="tech">
                        <li>Next.js</li>
                        <li>CSS</li>
                        <li>API</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Projects;