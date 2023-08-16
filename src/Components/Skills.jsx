import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';


const Skills = () => {


    const allSkills = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".right", {duration: .7, opacity: 0, ease:"expo.out", x:-100, stagger:0.05});
            gsap.from(".left", {duration: .7, opacity: 0, ease:"expo.out", x:100, stagger:0.05});
        }, allSkills);

        return () => ctx.revert();
        
    }, []);

    return (
        <>
        <section className='skills_wrapper'>
        <div className='skills'>
            <ul ref={allSkills} className="">
                <li className='skill_item left'>HTML</li>
                <li className='skill_item left'>CSS</li>
                <li className='skill_item left'>Javascript</li>
                <li className='skill_item right'>React</li>
                <li className='skill_item right'>Next.js</li>
                <li className='skill_item right'>Hubspot/HubL</li>
                <li className='skill_item left'>Wordpress Gutenberg</li>
                <li className='skill_item left'>Theme.json</li>
                <li className='skill_item right'>PHP</li>
                <li className='skill_item right'>Sass</li>
                <li className='skill_item right'>TailwindCSS</li>
                <li className='skill_item left'>Client communication</li>
                <li className='skill_item left'>Project Management</li>
                <li className='skill_item right'>Figma</li>
                <li className='skill_item right'>UX & UI</li>
                <li className='skill_item left'>Agile development methods</li>
                <li className='skill_item right'>Scrum master experience</li>
                <li className='skill_item left'>Communication & concept development</li>
                <li className='skill_item right'>SEO & SEM</li>
                <li className='skill_item left'>Content marketing</li>
                <li className='skill_item right'>Conversion tracking</li>
                <li className='skill_item right'>Node.js</li>
            </ul>
        </div>
        </section>

    
        </>
    );
}

export default Skills;