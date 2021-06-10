import "./styles.css";
import soundFile from "./assets/muzyczka.mp3";

function SongPlayer(props) {
  return (
    <section>
      <h1>Posłuchaj se</h1>
      <div>
        <img
          width="250"
          height="250"
          position="center"
          alt="Song cover"
          src={props.song.coverUrl}
        ></img>
      </div>
      <audio controls>
        <source src={props.song.audioUrl} />
      </audio>
    </section>
  );
}
export default function App() {
  const currentSong = {
    audioUrl: soundFile,
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
