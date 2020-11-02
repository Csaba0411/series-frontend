import React, { useContext } from "react";
import "../style/Style.css";
import { Link } from "react-router-dom";
import noImage from "../picture/noImage.jpg";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";

const Season = (props) => {
  const { showId } = useContext(IdProviderContext);
  const { fetchSeasonEpisode } = useContext(DetailContext);

  const pic = props.season.image ? props.season.image.original : noImage;

  return (
    <section className="main-container">
      <div className="location" id="home">
        <div className="mbox">
          <Link
            onClick={() => fetchSeasonEpisode(showId, props.season.number)}
            to={"/shows/" + showId + "/seasonepisodes"}
          >
            <img alt={props.season.name} src={pic} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Season;
