import "./website-styles.css";
import cv from "./files/cv1.pdf"

const CV = () => {
    return (
    <div class="body">
        <h1>CV</h1>
        <p>Below is a copy of my CV for you to browse.<br /><br />If you do wish to get in touch, you can reach me using the contact page!</p>
        <br />
        <embed src={cv} type="application/pdf" width="100%" height="900px" style={{marginLeft: "250px"}} />
        <br /><br />
    </div>
    )
}

export default CV;