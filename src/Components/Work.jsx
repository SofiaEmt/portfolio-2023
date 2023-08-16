import email from '../assets/email.svg';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

const Work = () => {
    const Cards = useRef(); 

    useLayoutEffect(() => {


        let ctx = gsap.context(() => {
            gsap.from(".one", {duration: 1.5, opacity: 0, ease:"expo.out",  x:-30, stagger: .05});   
            gsap.from(".two", {duration: 1.5, opacity: 0, ease:"expo.out",  x:30, stagger: .05})    
        }, Cards);

        return () => ctx.revert();
        
    }, []);

    return (
        <>
        <section ref={Cards} className="wrapper">
            <div className="card one">
                <h3>Client work at Hyper Island</h3>
                <ul>
                    <li>Figma prototyping and development ideation</li>
                    <li>Website development with <span>React</span></li>
                    <li>Git and Bitbucket for development</li>
                </ul>
            </div>
            <div className="card one">
                <h3>Internship KAN Stockholm</h3>
                <ul>
                    <li>Client communication</li>
                    <li><span>Next.js</span> development</li>
                    <li><span>Hubspot CMS</span> module based website development</li>
                </ul>
            </div>
            <div className="card blue two">
            <h3>KAN Stockholm</h3>
                <ul>
                    <li>Hubspot CMS full website development</li>
                    <li>Wordpress Gutenberg custom block building</li>
                    <li>Theme.json site configuration for Wordpress Gutenberg</li>
                    <li>Use of GPT-based AI for more cost-efficient problem solving</li>
                </ul>
            </div>
            <div className="card two">
                <h3>What's next?</h3>
                <figure>
                    <img src={email} alt="Email me!"/>
                </figure>
                <p><a href="mailto:sofia.emteryd@gmail.com" className='email'>sofia.emteryd@gmail.com</a></p>
            </div>
        </section>
        </>
    )
};

export default Work