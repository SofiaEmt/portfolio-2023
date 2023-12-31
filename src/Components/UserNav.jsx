import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";

import { useState, useRef } from "react";

const UserNav = () => {

    const [hoverText, setHoverText] = useState('Copy email');
    const [emailIcon, setEmailIcon] = useState(<MdEmail />);
    const [showNav, setShowNav] = useState(false);

    function changeEmailIcon() {
        setEmailIcon(<MdMarkEmailRead/>);
        setHoverText('Email copied!')
        copyToClipBoard;

        setTimeout(() => {
            setEmailIcon(<MdEmail />);
            setHoverText('Copy email')
        }, 10000);
    }

    function copyToClipBoard() {
        navigator.clipboard.writeText('sofia.emteryd@gmail.com');
    }

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <>
        <section className="userNav">
            <ul>
                <li className="email" onClick={changeEmailIcon}>{emailIcon}
                <div className="hoverText">
                    {hoverText}
                </div>
                </li>
                <li><a href="https://linkedin.com/in/sofia-emteryd" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://github.com/SofiaEmt" target="_blank"><BsGithub /></a></li>
            </ul>
        </section>


        <button className={`mobileNav_btn ${showNav && 'open'}`}onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
        </button>
        <section  className={`mobileNav ${showNav && 'active'}`}>
            <ul>
                <li className="email" onClick={changeEmailIcon}>{emailIcon}</li>
                <li><a href="https://linkedin.com/in/sofia-emteryd" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://github.com/SofiaEmt" target="_blank"><BsGithub /></a></li>
            </ul> 
        </section>

        </>
    )
};


export default UserNav;

