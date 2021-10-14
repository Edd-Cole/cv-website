import { Link } from "react-router-dom";
import "./website-styles.css";

const Navigation = () => {

    return(        
    <div class="menuBar">
    <ul id="menu">
        <li class="menu" href="./home_page.html">
            <Link to="/">
                <p class="highlight">Home</p>
            </Link>
        </li>
        <li class="menu" href="./cv.html">
            <Link to="/cv">
                <p class="highlight">CV</p>
            </Link>
        </li>
        <li class="menu" href="./projects.html">
            <Link to="/projects">
                <p class="highlight">Projects</p>
            </Link>
            <div class="dropMenu">
                <ul>
                    <li>
                        <Link to="/projects/front_end">
                            <p>Front End</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/back_end">
                            <p>Back End</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/full_stack">
                            <p>Full Stack</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/java_projects">
                            <p>Java</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu" href="./interests.html">
            <Link to="/interests">
                <p class="highlight">Interests</p>
            </Link>
            <div class="dropMenu">
                <ul>
                    <li>
                        <Link to="/interests/public_speaking">
                            <p>Public Speaking</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interests/music">
                            <p>Music</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interests/gym">
                            <p>Gym</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interests/chess">
                            <p>Chess</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interests/reading">
                            <p>Reading</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interests/travelling">
                            <p>Travelling</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="menu" href="./blog.html">
            <Link to="/blog">
                <p class="highlight">Blog</p>
            </Link>
        </li>
        <li class="menu" href="./contact.html">
            <Link to="/contact">
                <p class="highlight">Contact</p>
            </Link>
        </li>
    </ul>
</div>
)
}

export default Navigation;