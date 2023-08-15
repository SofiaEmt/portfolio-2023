import Sudoku from './Projects/Sudoku';
import Hills from './Projects/Hills';
import Chuck from './Projects/Chuck';
import Workout from './Projects/Workout';
import Boye from './Projects/Boye';
import Hubspot from './Projects/Hubspot';

import { gsap } from "gsap";

import { useLayoutEffect } from 'react';

const Projects = () => {

        useLayoutEffect(() => {
            let ctx = gsap.context(() => {
                gsap.set(".card_desc", {opacity: 1})
                gsap.from(".card_desc", {duration:1.5, zoom:1.4, ease: "expo.out", opacity:0, autoAlpha:0});
            
            });
    
            return () => ctx.revert();
            
        }, []); 

    return(
        <section className="wrapper projects">
            <div className="card">

                <span className='sudoku'></span>
                <div className="overlay"></div>
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

            <div className="card">
                <span className="hills"></span>
                <div className="overlay"></div>
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
            <div className="card">
                <span className="workout"></span>
                <div className="overlay"></div>
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
            <div className="card">
                <span className="chuck"></span>
                 <div className="overlay"></div>
                <Chuck /> 
                <article className="card_desc">
                    <h6>Good <br></br>Luck Chuck</h6>
                    <ul className="tech">
                        <li>Phaser3</li>
                        <li>Javascript</li>
                    </ul>
                </article>
            </div>
            <div className="card">
                <span className="hub"></span>
                <div className="overlay"></div>
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
            <div className="card">
                <span className="boye"></span>
                <div className="overlay"></div>
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