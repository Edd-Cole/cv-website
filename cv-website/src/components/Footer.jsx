import "./website-styles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="leftFooter">
                <ul>
                    <a href="./home_page.html">
                        <li>Home</li>
                    </a>
                    <a href="./cv.html">
                        <li>CV</li>
                    </a>
                    <a href="projects.html">
                        <li>Projects</li>
                    </a>
                    <a href="./interests.html">
                        <li>Interests</li>
                    </a>
                    <a href="./blog.html">
                        <li>Blog</li>
                    </a>
                    <a href="contact.html">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
            <div className="rightFooter">
                <p>Searching for a Junior Development<br />or Data Science role.</p>
                <a href="https://www.linkedin.com/in/eddkleszcz/" className="fa fa-linkedin" style={{color: "white"}}> </a>
            </div>
        </div>
    )
}

export default Footer;