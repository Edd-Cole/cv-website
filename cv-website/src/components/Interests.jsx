import "./website-styles.css";
import carried from "./audios/carried_away.mp3";
import gone from "./audios/Gone.mp3";
import laced from "./audios/laced_peach.mp3";
import carriedAcoustic from "./audios/carried_away_acoustic.mp3";

const Interests = () => {
    return (
        <div class="body">
        <h1>Interests</h1>
        <h2>Public Speaking</h2>
        <p>I had been a member of Toastmasters international for 2 years between July 2017 and June 2020. I had been a vital part of the club taking on 2 leadership positions.As financial officer, I kept a record of the clubs accounts, ensured timely
            payments into and from the account, and managed the relationship with the venue where we hosted our meetings.<br /><br />In addition, I was the Sergeant-at-Arms where I was responsible for the safe keeping of the equipment and managing any
            stock checks and orders as needed.<br /><br />During my time, I became a highly competent speaker within the club where I competed within the yearly international competition. It was here that I defeated the reigning champion and progressed
            through the competition. Unfortunately, the competition was postponed due to Covid-19.<br /><br />Below is my speech that knocked out the champ.
        </p>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/GxUJlksxLck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <h2>Gym</h2>
        <p>Monday - Friday, at 6am. Listen closely and you will hear my alarm clock ringing.<br /><br /> That's the time I'm up, and heading off to the gym to get a workout in before I start my day. I have a very specific goal in mind when I go and I'll
            make sure I hit it!<br /><br /> I have only been going again since April 2021, so I'm still at the start of my journey. But the consistency is there.
        </p>
        <h2>Chess</h2>
        <p>Definitely one of my favourite games ever! The strategy, the tactics, that feeling you get when your have an overpowering position... it's a game that can make you feel like you own the universe or are a child back in year 1.<br /><br />My best
            achievement to date within the game is defeating a FIDE (official chess body) rated International Master (second strongest title anyone can acquire). I played 4 games and won 2 and lost 2. I'm certain I was very lucky!<br /><br />Below, I
            have a few games of mine that you can look through if you like, just in case you're interested as well.<br /><br />First game, I'm black. Second, I'm white.
        </p>
        <br />
        <iframe width={600} height={371} src="https://lichess.org/study/embed/3qGPvvf2/c7fUKPmb" frameborder={0}></iframe>
        <iframe width={600} height={371} src="https://lichess.org/study/embed/3qGPvvf2/ZuL6merf" frameborder={0}></iframe>
        <br /><br /><small style={{left:"250px", position:"relative"}}>Games courtesy of lichess.org</small>
        <h2>Reading</h2>
        <p>I love my fantasy books, I think it is such a great genre to get lost in. I love how we can create an entirely new world with our imagination. Where magic can exist, where bizarre creatures can exist and where tantalising puzzles exist.<br /><br />I'm
            currently digesting the opus magnum of Robert Jordan, <em>The Wheel of Time</em> Series, which is incredible. Other series that I love are:</p>
        <ul>
            <li>Mistborn Trilogy - Brandon Sanderson</li>
            <li>Way of King Series - Brandon Sanderson</li>
            <li>Harry Potter Series - J.K. Rowling</li>
            <li>The Old Kingdom Series - Garth Nix</li>
            <li>His Dark Materials - Philip Pullman</li>
        </ul>
        <p>I also have a number of non-fiction books that I love to read too. The big one I'm digesting is:
            <ul>
                <li>Java: The Complete Reference 11th Edition - Herbert Schildt</li>
            </ul>
        </p>
        <h2>Travelling</h2>
        <p>Last but not least, the cliched travelling! As this is getting quite lengthy, I'm going to pop a small list of places I've gone to. I highly recommend destination!</p>
        <ul>
            <li>Sri Lanka</li>
            <li>Thailand</li>
            <li>Jamaica</li>
            <li>Cuba</li>
            <li>Florence {"&"} Milan - Italy</li>
            <li>Antalya - Turkey</li>
        </ul>
    </div>
    )
}

export default Interests;