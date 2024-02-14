import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ courses }) => {
  return (
    <div className="card-container">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <Link to={`/card/${course.id}`} className="card-link">
            <img className="card-image" src={course.src} alt={course.alt} />
          </Link>
          <div className="card-content">
            <h2 className="card-title">{course.name}</h2>
            <p className="card-description">{course.description}</p>
            <p className="card-price">Цена: {course.price}</p>
           <p>
              Рейтинг: {course.star} {course.half ? "" : "★"}
            </p>
            <p className="card-size">Размер: {course.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


