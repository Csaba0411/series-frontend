import React, { useContext, useState, useEffect } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import axios from "axios";

function StaffDetails() {
  const { staffId } = useContext(IdProviderContext);

  const [personDetail, setPersonDetail] = useState([]);
  const [personCastCredit, setPersonCastCredit] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/staff/${staffId}`, {
        credentials: "same-origin",
        headers: {
          Authorization: "Bearer " + document.cookie.split("=")[1],
        },
      })
      .then((response) => {
        setPersonDetail(response.data);
      });
  }, [staffId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/staff/castcredit/${staffId}`, {
        credentials: "same-origin",
        headers: {
          Authorization: "Bearer " + document.cookie.split("=")[1],
        },
      })
      .then((response) => {
        setPersonCastCredit(response.data);
      });
  }, [staffId]);

  const pic = personDetail.image ? personDetail.image : [];
  return (
    <div className="mainCont">
      <br />
      <div className="details">
        <p>{personDetail.name}</p>
        <div className="card">
          <p>{personDetail.birthday}</p>
          <p>{personDetail.deathday}</p>
          <p>{personDetail.gender}</p>
          <p>{personCastCredit._embedded}</p>
        </div>
        <img alt={personDetail.name} src={pic.medium} />
      </div>
    </div>
  );
}

export default React.memo(StaffDetails);
