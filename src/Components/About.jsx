import me from '../assets/me.jpg'
import { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';

const About = () => {

    const profile = useRef();
    const profileImg = useRef();
    const download = useRef();
    const parent = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(profile.current, {duration: 1, opacity: 0, ease:"power3.out",  x:"random(-50, 50)"});
            gsap.from(profileImg.current, {duration: 1.5, opacity: 0, ease:"power3.out",  x:"random(-50, 50)"});
            gsap.from(download.current, {duration: 1, opacity: 0, ease:"expo.out",  y:"-50"})
            gsap.from(".fact_item", {duration: 1, opacity: 0, ease:"expo.out",  x:"-100", stagger: .07})
        }, parent);

        return () => ctx.revert();
        
    }, []);

    return (
        <>
        <section ref={parent} className="about">
            <div className='me'>
                <div className='not_for_full'>
                 <figure ref={profileImg} className="img_field">
                    <img src={me} />
                </figure> 
                <svg className="svg-not_for_full" xmlns="http://www.w3.org/2000/svg" width="191" height="167" viewBox="0 0 191 167" fill="none">
                      <path d="M151.121 164.904C141.365 137.473 134.833 114.26 146.602 88.6127C153.409 73.7764 177.865 49.3491 187.921 77.6271C192.817 91.3934 173.52 94.5054 165.332 95.8618C149.33 98.5125 134.485 98.0246 119.642 87.9995C101.634 75.8359 83.2573 44.7355 88.3462 21.9523C89.8182 15.3624 91.2496 7.29021 97.2219 4.26704C99.3557 3.18692 105.113 0.0179358 107.493 2.36575C113.965 8.74817 116.563 19.7963 112.638 27.4296C105.83 40.6726 84.4542 50.0255 70.6637 50.7038C57.4227 51.3551 49.0021 50.6613 38.0336 39.9487C31.0622 33.14 27.2098 25.3809 21.0778 18.2609C20.1959 17.237 6.5 9.5 1.5 5.50001" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
                    </svg>
                <div ref={profile} className='description'>
                    <p>Welcome to my portfolio!</p>
                    <p>I’m a sauna-bather, avid bookreader and singer-songwriter who likes to sit outside and work if the   weather permits.</p>
                    <p>Currently working as a <strong>Hubspot, Wordpress</strong> and <strong>React</strong> developer who  works daily with <strong>Javascript, PHP, HTML, CSS</strong> and <strong>Node.js</strong>.</p>
                    <p>The frontend development route is something that I’ve gravitated towards for many years and after    being accepted into <span>Hyper Island's Frontend program</span> in 2020 I have not looked back.</p>
                    <p>I’m an adventorous and curious person with a good eye for detail who flourishes in situations were   both my problem-solving skills and creativity can work hand in hand.</p>
                    <p>I’m looking for work! <span>sofia.emteryd@gmail.com</span></p>
                    <Link to="/sofia_emteryd-cv-png" target="_blank" download><button>Download my CV</button></Link>
                </div>
                </div>
                <div ref={download} className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="191" height="167" viewBox="0 0 191 167" fill="none">
                      <path d="M151.121 164.904C141.365 137.473 134.833 114.26 146.602 88.6127C153.409 73.7764 177.865 49.3491 187.921 77.6271C192.817 91.3934 173.52 94.5054 165.332 95.8618C149.33 98.5125 134.485 98.0246 119.642 87.9995C101.634 75.8359 83.2573 44.7355 88.3462 21.9523C89.8182 15.3624 91.2496 7.29021 97.2219 4.26704C99.3557 3.18692 105.113 0.0179358 107.493 2.36575C113.965 8.74817 116.563 19.7963 112.638 27.4296C105.83 40.6726 84.4542 50.0255 70.6637 50.7038C57.4227 51.3551 49.0021 50.6613 38.0336 39.9487C31.0622 33.14 27.2098 25.3809 21.0778 18.2609C20.1959 17.237 6.5 9.5 1.5 5.50001" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
                    </svg>
                    <Link to="/sofia_emteryd-cv.png" target="_blank" download><button>Download my CV</button></Link>
                </div>
            </div>
            <div className='facts'>
                <div className='facts_title'></div>
                    <p className='fact_item van'>Transformed and rebuilt a van into a <span>camper</span> and roadtripped through Europe</p>
                    <p className='fact_item sauna'>Regularly <span>sauna</span> bathes!</p>
                    <p className='fact_item fun'>Am quite the fun coworker!</p>
            </div>
            



        </section>
        </>
    )
}

export default About;