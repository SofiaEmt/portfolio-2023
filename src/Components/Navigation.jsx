import { useState } from "react";

const MyNav = ({onMenuItemClick}) => {

        const [activeMenuItem, setActiveMenuItem] = useState('work');
        const handleMenuItemClick = (menuItem) => {
            setActiveMenuItem(menuItem);
            onMenuItemClick(menuItem);
        }
    return (
        <nav>
            <ul className="main_nav">
                <li className={activeMenuItem === 'work' ? 'active' : ''} onClick={() => handleMenuItemClick('work')}>
                    <div className="text_hover">
                        <span className="textwrapper_b">WORK</span>
                        WORK
                    </div>
                </li>
                <li className={activeMenuItem === 'about' ? 'active' : ''} onClick={() => handleMenuItemClick('about')}>
                    <div className="text_hover">
                        <span className="textwrapper_g">ABOUT</span>
                    ABOUT
                    </div>
                </li>
                <li className={activeMenuItem === 'skills' ? 'active' : ''} onClick={() => handleMenuItemClick('skills')}>
                    <div className="text_hover">
                        <span className="textwrapper_r">SKILLS</span>
                    SKILLS
                    </div>
                </li>
                <li className={activeMenuItem === 'projects' ? 'active' : ''} onClick={() => handleMenuItemClick('projects')}>
                    <div className="text_hover">
                        <span className="textwrapper_y  ">PROJECTS</span>
                    PROJECTS
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default MyNav;
