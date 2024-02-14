import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./main.css";

const Main = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header>
        <ul className="FLEX">
            
          <li className="menu">
            <Link to="/" state={{ from: location.pathname }}>
              Home
            </Link>
          </li>
          <li className="menu">
            <Link to="/users" state={{ from: location.pathname }}>
              Users
            </Link>
          </li>
          <li className="menu">
            <Link to="/posts" state={{ from: location.pathname }}>
              Posts
            </Link>
          </li>
          <li className="menu">
            <Link to="/posts" state={{ from: location.pathname }}>
              Mesage
            </Link>
          </li> <li className="menu">
            <Link to="/posts" state={{ from: location.pathname }}>
              Profile
            </Link>
          </li>
        </ul>
        <hr />
      </header>
      <Outlet />
    </>
  );
};

export default Main;
