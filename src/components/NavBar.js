import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";
import { DetailContext } from "../contexts/DetailProvider";
import Login from "./Login";

const NavBar = () => {
  const { fetchSeries, fetchPersons, fetchFavorite } = useContext(
    DetailContext
  );

  return (
    <header>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/shows" onClick={() => fetchSeries()}>
          TV Series
        </Link>
        <Link to="/staff" onClick={() => fetchPersons("first")}>
          Staff
        </Link>
        <Link to="/channels">Channels</Link>
        <Link onClick={() => fetchFavorite()} to="/favorites">
          Favorites
        </Link>
        <Link to="/register">Register</Link>
        <Login />
      </nav>
    </header>
  );
};
export default NavBar;
