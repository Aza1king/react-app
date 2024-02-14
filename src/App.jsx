import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Main, Posts, Users } from "./pages";
import Card from "./pages/Card/Card";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Photoshop - Веб-дизайн",
      price: "$290",
      description:
        "Узнайте секреты привлекательного веб-дизайна с помощью Photoshop! Создавайте продающиеся сайты легко и быстро. Присоединяйтесь прямо сейчас!",
      year: "1 год",
      time: "7:00 - 10:00",
      src: "https://s0.rbk.ru/v6_top_pics/media/img/9/16/756619467602169.jpg",
      cours: "курс",
      count: 25,
      star: 3,
      half: 0,
      size: "15",
      duration: "Продолжительность класса",
    },
    {
      id: 2,
      name: "Illustrator - Графический дизайн",
      price: "$350",
      description:
        "Отточите свои навыки в графическом дизайне с Illustrator! Создавайте продающиеся иллюстрации с легкостью. Присоединяйтесь прямо сейчас!",
      срок: "6 месяцев",
      time: "15:00 - 18:00",
      src: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655dd52aeece0b744ad0048e_655dfa4311aa97744330de27/scale_1200",

      cours: "курс",
      count: 30,
      star: 4,
      half: 0,
      size: "10",
      time: "15:00 - 18:00",
      duration: "Продолжительность класса",
    },
    {
      id: 3,
      name: "After Effects - Анимация",
      price: "$400",
      description:
        "Оживите свои проекты с помощью After Effects! Создавайте захватывающие анимации, которые привлекут внимание вашей аудитории. Присоединяйтесь прямо сейчас!.",
      year: "9 месяцев",
      time: "18:00 - 21:00",
      src: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655dd52aeece0b744ad0048e_655dfa6fc9ae6510cfd3bc63/scale_1200",

      cours: "курс",
      count: 20,
      star: 5,
      half: 0,
      size: "25",
      time: "18:00 - 21:00",
      duration: "Продолжительность класса",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/">
          <Route element={<Home courses={courses} />} path="/" />
          <Route element={<Users />} path="/users" />
          <Route element={<Posts />} path="/posts" />
          <Route element={<Card courses={courses} />} path="/card/:id" />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
