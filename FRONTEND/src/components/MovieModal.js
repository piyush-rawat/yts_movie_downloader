import React, { useRef } from "react";
import axios from "axios";

const MovieModal = ({ showMovieModal, setShowMovieModal }) => {
  const {
    title_english,
    year,
    rating,
    genres,
    synopsis,
    language,
    medium_cover_image,
    torrents,
  } = showMovieModal;

  const movieModalRef = useRef();

  const hideModal = () => {
    document.body.style.overflowY = "";
    movieModalRef.current.classList.remove("movie-modal-show");
    movieModalRef.current.classList.add("movie-modal-hide");
    setShowMovieModal(null);
  };

  const trackerList =
    "&tr=udp://open.demonii.com:1337/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://p4p.arenabg.com:1337&tr=udp://tracker.leechers-paradise.org:6969";

  return (
    <div
      ref={movieModalRef}
      className="movie-modal"
      style={{ padding: "10px" }}
    >
      <h1 className="icon-modal-close" onClick={hideModal}>
        &#8592;
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <img className="movie_cover_img" src={medium_cover_image} />
        </div>
        <div style={{ padding: "0 20px 20px 20px", minWidth: 300 }}>
          <h1 style={{ marginBottom: 10 }}>{title_english}</h1>
          <p style={{ marginBottom: 5 }}>{year}</p>
          <p style={{ marginBottom: 5 }}>{genres}</p>
          <p style={{ marginBottom: 5 }}>IMDB {rating}</p>
          <p style={{ marginBottom: 10 }}>
            Available in :{" "}
            {torrents.map((torrent) => (
              <a
                className="btn-download"
                href={`magnet:?xt=urn:btih:${torrent.hash}&dn=${title_english}%20(${year})%20[${torrent.quality}]%20[${torrent.type}]%20[YTSmoviez]${trackerList}`}
                target="_blank"
              >
                {torrent.quality} {torrent.type} [ {torrent.size} ]
              </a>
            ))}
          </p>
          <h3 style={{ marginBottom: 10 }}>Synopsis</h3>
          <p style={{ maxWidth: 300 }}>{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
