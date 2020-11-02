import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  const { showId } = useContext(IdProviderContext);
  const {
    fetchSeriesById,
    fetchEpisodesById,
    fetchStaffById,
    fetchSeasonsById,
  } = useContext(DetailContext);
  // delegate these fetch calls to Context level and export functions

  return (
    <div>
      <nav className="sub-nav">
        <Link
          onClick={() => fetchSeriesById(showId)}
          key={showId + "main"}
          to={"/shows/" + showId}
        >
          Main
        </Link>{" "}
        |
        <Link
          onClick={() => fetchSeasonsById(showId)}
          key={showId + "seasons"}
          to={"/shows/" + showId + "/seasons"}
        >
          Seasons
        </Link>{" "}
        |
        <Link
          onClick={() => fetchEpisodesById(showId)}
          key={showId + "episodes"}
          to={"/shows/" + showId + "/episodes"}
        >
          Episodes
        </Link>{" "}
        |
        <Link
          onClick={() => fetchStaffById(showId)}
          key={showId + "staff"}
          to={"/shows/" + showId + "/staff"}
        >
          Staff
        </Link>{" "}
      </nav>
    </div>
  );
};
export default SubNavBar;
