import "./website-styles.css"; 
import headshot from "./files/headshot2.JPG";

const Header = () => {

    return(
        <div class="header">
            <div class="introPara">
                <h1>Edd Kleszcz</h1>
                <h2>Junior Developer</h2>
            </div>
            <img src={headshot}  />
        </div>
    )
}

export default Header;