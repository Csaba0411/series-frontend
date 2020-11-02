import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import StaffCard from "../components/StaffCard";

export default function SearchedShows() {
  const { searchedPersons } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <div className="box">
        {searchedPersons.map((staff, index) => (
          <StaffCard key={staff.id} index={index} staff={staff.person} />
        ))}
      </div>
    </div>
  );
}
