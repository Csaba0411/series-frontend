import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Episode from "../components/Episode";
import SubNavBar from "../components/SubNavBar";

const Episodes = () => {
  const { episodes } = useContext(DetailContext);

  const episodesforseries = episodes ? episodes : [];

  return (
    <div className="mainCont">
      <SubNavBar />
      <div>
        {episodesforseries.map((episode, index) => (
          <Episode key={episode.id} index={index} episode={episode} />
        ))}
      </div>
    </div>
  );
};
export default Episodes;
