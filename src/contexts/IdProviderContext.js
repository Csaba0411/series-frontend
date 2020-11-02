import React, { useState, createContext } from "react";

export const IdProviderContext = createContext();

export const IdProvider = (props) => {
  const [showId, setshowId] = useState();
  const [staffId, setStaffId] = useState([]);
  const [seasonNum, setseasonNum] = useState([]);
  return (
    <IdProviderContext.Provider
      value={{
        showId,
        setshowId,
        staffId,
        setStaffId,
        seasonNum,
        setseasonNum,
      }}
    >
      {props.children}
    </IdProviderContext.Provider>
  );
};
