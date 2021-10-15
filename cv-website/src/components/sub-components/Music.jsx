import "../website-styles.css";
import carried from "../audios/carried_away.mp3";
import gone from "../audios/Gone.mp3";
import laced from "../audios/laced_peach.mp3";
import carriedAcoustic from "../audios/carried_away_acoustic.mp3";

const Music = () => {
    return (
        <div class="body">
        <h2>Music</h2>
        <p>I have been playing the guitar since the age of 16 where I taught myself. In the coming years I taught myself basic music production, too. I spent a lot of my free time in my university years writing and composing music that I enjoyed.<br /><br />Below,
            I have listed some of my favourite songs that I have written over the years!<br /><br />I still write, but no where near as much as I used to.
        </p>
        <h3>Carried Away</h3>
        <p>One of the first songs I ever wrote. This is everyone's favourite, and mine too. Upbeat, happy and very catchy. I still work on this song when inspiration hits. It's 7 years old!</p>
        <audio src={carried} controls></audio>
        <br />
        <h3>Gone</h3>
        <p>One of my more recent songs. I was inspired to write this after hearing this type of structure in some songs. It's built as an entire crescendo up to the final chorus where it is really meant to leave the listener with chills.<br /><br />I'm sure
            you'll appreciate the static melody whilst the song evolves around it.
        </p>
        <audio src={gone} controls></audio>
        <br />
        <h3>Laced Peach</h3>
        <p>I have written some quite melancholy and poignant songs, too. Laced Peach is a good example of that where the guitar rings lonely for most of the song. Laced Peach always hits me from the moment that moment the first guitar note plays.<br /><br />Personally,
            I think it is one of my more beautiful songs.
        </p>
        <audio src={laced} controls></audio>
        <br />
        <h3>Carried Away (Acoustic)</h3>
        <p>Carried Away is my favourite song for a reason. And, if you have listened to all 3 beforehand, I'm sure this will be a good way to end the music section.<br /><br />We can't leave on a sombre note, so enjoy the acoustic version of Carried Away!</p>
        <audio src={carriedAcoustic} controls></audio>
        <br /><br />
    </div>
    )
}

export default Music;