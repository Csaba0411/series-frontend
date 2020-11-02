import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";

const Main = () => {
  const { main } = useContext(DetailContext);
  return (
    <div>
      <p>{main.main.name}</p>
    </div>
  );
};

export default React.memo(Main);
