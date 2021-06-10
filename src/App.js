import "./styles.css";
function SongPlayer(props) {
  return (
    <section>
      <h1>Music Player</h1>
      <img
        width="250"
        height="250"
        alt="Song cover"
        scr={props.song.coverUrl}
      ></img>
      <audio controls>
        <source src={props.song.audioUrl} />
      </audio>
    </section>
  );
}
export default function App() {
  const currentSong = {
    audioUrl: "/src/assets/muzyczka.mp3",
    coverUrl:
      "https://plusmusic.pl/presenter/image/5498183.gif?pid=5498183&type=www&no=1&scale=50",
    title: "Wojownicy Wódy",
    artis: "Figo Fagot"
  };

  return (
    <div className="App">
      <SongPlayer song={currentSong} />
    </div>
  );
}
