import blob from '../assets/blob.svg'

const Hero = () => {
    return (
        <section className="hero_comp">
             <figure className="img_field">
                <img src={blob} />
            </figure> 

            <div className="text_field">

                <p>Welcome to my portfolio!</p>
                <p>I'm Sofia, a <strong>Hubspot, Wordpress</strong> and <strong>React</strong> developer
                with experience in <strong>Javascript, PHP, HTML, CSS</strong> and <strong>Node.js</strong>.</p>
                <p>I’m a sauna-bather, bookreader and songwriter who likes to sit outside and work if the weather permits. </p>

                <button>Download my CV</button>

            </div>
        </section>
    );
}

export default Hero;