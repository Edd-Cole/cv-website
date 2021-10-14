import "./website-styles.css";

const Home = () => {
    return(
        <div class="body">
            <h1>About me</h1>
            <h2>Who Am I?</h2>
            <p>I am an aspiring Developer/Data Scientist with a keen interest in Java {"&"} Python. I have a BSc (Hons) Mathematics degree after which I procured, I went into sales. Having been in sales for a few years and learnt many things that I am happy
                with, I wish to return back into an area which is a natural forte.
            </p>
            <h2>What Are My Skills?</h2>
            <h3>Tech Stack:</h3>
            <table>
                <tr>
                    <th>Front End</th>
                    <th>Back End</th>
                    <th>Others</th>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>Node.js</td>
                    <td>PostgreSQL</td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>Express.js</td>
                    <td>Ubuntu</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>Java</td>
                    <td>Git/GitHub</td>
                </tr>
                <tr>
                    <td>React.js</td>
                    <td>RESTful API's</td>
                    <td>CI/CD</td>
                </tr>
                <tr>
                    <td>Spring</td>
                    <td>MVC</td>
                </tr>
                <tr>
                    <td></td>
                    <td>JUnit</td>
                </tr>
            </table>
            <h3>Other Skills:</h3>
            <table>
                <tr>
                    <th>Coding</th>
                    <td>--{">"} 14 weeks with Northcoders and 6 months learning Java through <em>Java 11 Reference</em> by <em>Herbert Schildt</em>,</td>
                </tr>
                <tr>
                    <th>Public Speaking</th>
                    <td>--{">"} checkout the <a href="./sub_pages/public_speaking.html">Public Speaking</a> page!</td>
                </tr>
                <tr>
                    <th>Maths</th>
                    <td>--{">"} BSc (Hons) Mathematics from Leeds University,</td>
                </tr>
                <tr>
                    <th>Selling</th>
                    <td>--{">"} 3 years within a sales environment,</td>
                </tr>
            </table>
            <br /><br />
        </div>
    )
}

export default Home;