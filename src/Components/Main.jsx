
import Head from "./Head";
import Work from "./Work";
import MyNav from './Navigation';
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import UserNav from "./UserNav";
import Hero from "./Hero";

function Main() {
    const [activeComponent, setActiveComponent] = useState('work');

    const handleMenuItemClick = (menuItem) => {
        setActiveComponent(menuItem);
    };
    
    const renderActiveComponent = () => {
        switch(activeComponent) {
            case 'work':
                return <Work />;
            case 'about':
                return <About />;
            case 'skills':
                return <Skills />;
            case 'projects':
                return <Projects />;
            default:
                return <Work />;
        }
    }
    return (
        <>
        <UserNav />
        <Head />
        <MyNav onMenuItemClick={handleMenuItemClick} />
        <section className="content">
            {renderActiveComponent()}
        </section>
        </>
    )

}

export default Main;