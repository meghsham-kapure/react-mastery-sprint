import PlaylistCard from "./component/PlaylistCard.jsx";

import PLAYLIST_DATA from "./data/playlists.js";

export default function App() {
  let i = 0;
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {PLAYLIST_DATA.map((playlist) => (
          <PlaylistCard playlist={playlist} key={i++} />
        ))}
      </div>
    </>
  );
}
