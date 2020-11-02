import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import StaffCard from "../components/StaffCard";
import SubNavBar from "../components/SubNavBar";

const Staff = () => {
  const { cast } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <SubNavBar /> <br />
      <div className="box">
        {cast.map((staff, index) => (
          <StaffCard key={staff.person.id} index={index} staff={staff.person} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Staff);
