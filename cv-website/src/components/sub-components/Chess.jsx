import "../website-styles.css";

const Chess = () => {
    return(
        <div class="body">
        <h2>Chess</h2>
        <p>Definitely one of my favourite games ever! The strategy, the tactics, that feeling you get when your have an overpowering position... it's a game that can make you feel like you own the universe or are a child back in year 1.<br /><br />My best
            achievement to date within the game is defeating a FIDE (official chess body) rated International Master (second strongest title anyone can acquire). I played 4 games and won 2 and lost 2. I'm certain I was very lucky!<br /><br />Below, I
            have a few games of mine that you can look through if you like, just in case you're interested as well.<br /><br />First game, I'm black. Second, I'm white.
        </p>
        <br />
        <iframe width={600} height={371} src="https://lichess.org/study/embed/3qGPvvf2/c7fUKPmb" frameborder={0} />
        <iframe width={600} height={371} src="https://lichess.org/study/embed/3qGPvvf2/ZuL6merf" frameborder={0} />
        <br /><br /><small style={{left:"250px", position:"relative"}}>Games courtesy of lichess.org</small>
        <br /><br />
    </div>
    )
}

export default Chess;