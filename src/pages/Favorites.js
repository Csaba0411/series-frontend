import React, { useContext } from "react";
import Card from "../components/Card";
import { DetailContext } from "../contexts/DetailProvider";

const Shows = (props) => {
  const { series } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <div className="box">
        {series.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Shows);
