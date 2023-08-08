import Main from "../Components/Main";
import bgOne from '../assets/bg_dashed-1.svg';
import bgTwo from '../assets/bg_dashed-2.svg';

const Home = () => {
    return (
        <>
            <main>
                 <img className="bg_one" src={bgOne}/> 
                <Main />
                 <img className="bg_two" src={bgTwo}/> 
            </main>
        </>
    )
}

export default Home;