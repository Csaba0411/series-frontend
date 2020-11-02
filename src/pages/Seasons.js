import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Season from "../components/Season";
import SubNavBar from "../components/SubNavBar";

const Seasons = () => {
  const { seasons } = useContext(DetailContext);

  const seasonsforseries = seasons ? seasons : [];

  return (
    <div className="mainCont">
      <SubNavBar />
      <div className="box">
        {seasonsforseries.map((season, index) => (
          <Season key={season.id} index={index} season={season} />
        ))}
      </div>
    </div>
  );
};
export default Seasons;
