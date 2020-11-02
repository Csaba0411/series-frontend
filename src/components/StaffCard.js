import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IdProviderContext } from "../contexts/IdProviderContext";
import noImage from "../picture/noImage.jpg";

export default function StaffCard(props) {
  const { setStaffId } = useContext(IdProviderContext);
  const pic = props.staff.image ? props.staff.image.medium : noImage;

  return (
    <section className="main-container">
      <h3>{props.staff.name}</h3>
      <div className="location" id="home">
        <div className="mbox">
          <Link
            onClick={() => setStaffId(props.staff.id)}
            to={"/staff/details/" + props.staff.id}
          >
            <img src={pic} alt={props.staff.name} />
          </Link>
        </div>
      </div>
    </section>
  );
}
