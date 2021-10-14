import "./website-styles.css";

const Contact = () => {
    return (
        <div class="body">
        <h1>Contact Me</h1>
        <form class="centre" action="mailto:edd_kleszcz@hotmail.co.uk" method="POST" enctype="multipart/form-data" name="ContactForm">
            <label for="postName">Name: *</label><br />
            <input id="postName" type="text" size="20" name="ContactName" placeholder="John Smith" required /><br /><br />
            <label for="postEmail">Email: *</label><br />
            <input id="postEmail" type="text" size="50" name="ContactCompany" pattern="\w+@\w+\..*[a-z]" maxlength="30" placeholder="johnsmith@gmail.com" required /><br /><br />
            <label for="postMessage">Message: *</label>
            <textarea id="postMessage" rows="20" cols="150" name="ContactMessage" placeholder="Hi, I'm very interested in having a chat with you..." required></textarea><br /><br />
            <input id="sendEmail" class="contactSubmit" type="submit" value="Send"></input>
        </form>
        <br /><br />
    </div>

    )
}

export default Contact;