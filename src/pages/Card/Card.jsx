import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Card.css";

const Card = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));
  const navigate = useNavigate();

  const onBtnClick = () => navigate(-1);

  if (!course) {
    return <div className="card-not-found">Курс не найден</div>;
  }

  return (
    <div className="card-container">
      <div className="card-item">
        <img className="card-item-image" onClick={onBtnClick} src={course.src} alt={course.alt} />
        <div className="card-item-content">
          <h2 className="card-item-title">{course.name}</h2>
          <p className="card-item-description">{course.description}</p>
          <p className="card-item-price">Цена: {course.price}</p>
          <p className="card-item-details">Продолжительность: {course.year}</p>
          <p className="card-item-details">Время: {course.time}</p>
          <p className="card-item-details">Количество мест: {course.count}</p>
          <p className="card-item-details">
            Рейтинг: {course.star} {course.half ? "☆" : "★"}
          </p>
          <p className="card-item-details">Размер: {course.size}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
