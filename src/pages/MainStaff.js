import React, { useContext } from "react";
import StaffCard from "../components/StaffCard";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";

export default function MainStaff() {
  const {
    randomStaff,
    inputName,
    setInputName,
    fetchPersonsByName,
    fetchPersons,
  } = useContext(DetailContext);

  const getName = (e) => {
    setInputName(e.target.value);
  };

  const getInput = () => {
    fetchPersonsByName(inputName);
  };
  return (
    <div>
      <div className="mainCont">
        <form className="search-form">
          <input type="text" onChange={getName} />
          <Link to={"/search/" + inputName}>
            <button onClick={getInput}>Search</button>
          </Link>
        </form>
        <button onClick={() => fetchPersons("prev")}>previous</button>{" "}
        <button onClick={() => fetchPersons("next")}>next</button>
        <div className="box">
          {randomStaff.map((staff, index) => (
            <StaffCard key={staff.id} index={index} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}
