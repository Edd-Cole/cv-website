import "../website-styles.css";
import gameImage from "../files/images/2048_image.png";

const Frontend = () => {
    return (
    <div class="body">
        <h2>2048 Game - Solo Project</h2>
        <p>This was an attempt at building the well-renowned game.</p>
        <p>The app is built in React.js </p>
        <p>The repo can be found by following this <a href="https://github.com/Edd-Cole/Game-2048" target="_blank">link</a>.</p>
        <p>Want to give the game a play? Try it <a href="https://6167f351c6f53c0007526bb3--sleepy-mcclintock-e0b8bf.netlify.app/" target="_blank">here</a>!</p>
        <img class="img" src={gameImage} style={{height: "400px", width: "auto"}} />
        <br /><br />
    </div>
    )
}

export default Frontend;