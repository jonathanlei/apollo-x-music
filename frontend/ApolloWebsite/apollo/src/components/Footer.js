import React from 'react';
import "./Footer.css"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links-container">
                    <Link
                        href="https://www.google.com/"
                        linktext="Apollo for music artists"
                    />
                    <Link
                        href="https://www.google.com/"
                        linktext="Our story"
                    />
                    <Link
                        href="https://www.google.com/"
                        linktext="Contact"
                    />
                </div>

                <NewsLetter />
            </div>
        </div>
    );
}

export default Footer;

function Link(props) {
    const { href, linktext } = props;

    return (
        <div className="footer-links">
            <a href={href}>{linktext}</a>
        </div>
    )
}

function NewsLetter() {
    return (
        <div className="newsletter-section">
            <div className='newsletter-container'>
                <h3 className="SITL-text">
                    Stay in the loop about concerts
                </h3>
                <div>
                    <input type="text" className="email-entry" placeholder="Enter email"></input>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div >
    )
}
