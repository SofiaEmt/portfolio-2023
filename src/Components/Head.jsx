import hello from '../assets/hello_banner.svg';
import circle from '../assets/circle.svg'
import anime from 'animejs';

const Head = () => {
    return (
        <>
        <section className="head">
            <figure className="img_container">
                <img className="img" src={hello} target="_blank" />
            </figure> 
            <p className='desc'>A <strong>frontend developer</strong> led into this field by the urge of living freely and doing inspiring work</p>

           
        </section>
        </>
    )
};

export default Head;