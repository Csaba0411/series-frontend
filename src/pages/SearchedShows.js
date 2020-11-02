import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Card from "../components/Card";

export default function SearchedShows() {
  const { searchValue } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <div className="box">
        {searchValue.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
    </div>
  );
}
