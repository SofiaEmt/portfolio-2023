import email from '../assets/email.svg' 

const Work = () => {
    return (
        <>
        <section className="wrapper">
            <div className="card">
                <h3>Client work at Hyper Island</h3>
                <ul>
                    <li>Figma prototyping and development ideation</li>
                    <li>Website development with <span>React</span></li>
                    <li>Git and Bitbucket for development</li>
                </ul>
            </div>
            <div className="card">
                <h3>Internship KAN Stockholm</h3>
                <ul>
                    <li>Client communication</li>
                    <li><span>Next.js</span> development</li>
                    <li><span>Hubspot CMS</span> module based website development</li>
                </ul>
            </div>
            <div className="card blue">
            <h3>KAN Stockholm</h3>
                <ul>
                    <li>Hubspot CMS full website development</li>
                    <li>Wordpress Gutenberg custom block building</li>
                    <li>Theme.json site configuration for Wordpress Gutenberg</li>
                    <li>Use of GPT-based AI for more cost-efficient problem solving</li>
                </ul>
            </div>
            <div className="card">
                <h3>What's next?</h3>
                <figure>
                    <img src={email} alt="Email me!"/>
                </figure>
                <p className='email'>sofia.emteryd@gmail.com</p>
            </div>
        </section>
        </>
    )
};

export default Work