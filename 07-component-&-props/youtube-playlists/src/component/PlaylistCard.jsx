const DefaultImage = "/yt-pl.png";

export default function PlayListCard(props) {
  const { playlist } = props;
  return (
    <article className="bg-white shadow-sm border border-slate-200 rounded-xl w-80 overflow-hidden text-slate-800">
      <img
        src={playlist.image || DefaultImage}
        alt={playlist.title}
        className="m-auto w-40 h-40 object-center aspect-video"
      />

      <div className="flex flex-col gap-1 bg-red-500 px-4 py-3 text-white">
        <h3 className="font-semibold text-sm leading-snug">{playlist.title}</h3>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm line-clamp-4 leading-relaxed">
          {playlist.description}
        </p>

        <a
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start bg-red-500 mt-2 px-3.5 py-2 rounded-md text-white text-sm"
        >
          <strong className="font-bold text-2xl leading-none">
            {playlist.videoCount}
          </strong>
          <span className="text-white/80 text-sm"> videos</span>
        </a>
      </div>
    </article>
  );
}
