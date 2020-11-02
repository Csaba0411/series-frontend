import React from "react";
import "../style/Style.css";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: black;
  width: 50%;
  display: inline-block;
  vertical-align: baseline;
  margin-left: 25%;
  text-align: center;
`;

const CardStyle2 = styled.div`
  background-color: black;
  width: 50%;
  display: inline-block;
  vertical-align: baseline;
  margin-left: 25%;
  text-align: left;
`;

const Episode = (props) => {
  const summary = props.episode.summary.replace("<p>", "");
  const finished = summary.replace("</p>", "");

  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <h2>{props.episode.name}</h2>
      </div>
      <CardStyle>
        <img
          style={{ height: "auto" }}
          alt={props.episode.name}
          src={props.episode.image.medium}
        />
      </CardStyle>
      <CardStyle2>{finished}</CardStyle2>
    </div>
  );
};

export default React.memo(Episode);
