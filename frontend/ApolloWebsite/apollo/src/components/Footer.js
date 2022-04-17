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

                <div className="newletter-section">
                </div>
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
