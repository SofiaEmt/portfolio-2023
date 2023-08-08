import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";

import { useState } from "react";

const UserNav = () => {

    const [hoverText, setHoverText] = useState('Copy email');
    const [emailIcon, setEmailIcon] = useState(<MdEmail />);

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

    return (
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
    )
};


export default UserNav;

