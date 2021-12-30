import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-wrapper'>
            <div>
                <button className='cancel' >CANCEL</button>
            </div>
            <div>
                <button className='prev'>PREV</button>
                <button className='next'>NEXT</button>
            </div>
            </div>
        </footer>
    );
};

export default Footer;