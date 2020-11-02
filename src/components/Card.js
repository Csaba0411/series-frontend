import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IdProviderContext } from "../contexts/IdProviderContext";
import "../style/Style.css";

const Card = (props) => {
  const { setshowId } = useContext(IdProviderContext);

  return (
    <section className="main-container">
      <div className="location" id="home">
        <div className="mbox">
          <Link
            onClick={() => setshowId(props.show.id)}
            to={"/shows/" + props.show.id}
          >
            <img src={props.show.image.medium} alt={props.show.name} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
