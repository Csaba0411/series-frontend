import React, { useContext } from "react";
import Card from "../components/Card";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";

const Shows = (props) => {
  const {
    series,
    inputValue,
    setInputValue,
    fetchSearchBySearchValue,
  } = useContext(DetailContext);

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  const getInput = () => {
    fetchSearchBySearchValue(inputValue);
  };

  return (
    <div className="mainCont">
      <form className="search-form">
        <input type="text" onChange={getValue} />
        <Link to={"/shows/search/" + inputValue}>
          <button onClick={getInput}>Search</button>
        </Link>
      </form>
      <div className="box">
        {series.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Shows);
