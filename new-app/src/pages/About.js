import React from "react";
import NavBar from "../components/NavBar";
import "../styles/About.css";
import img from "../img/cake.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <h1>О нас</h1>
        </div>
        <div className="box-with-img">
          <div className="box-main">
            <div>
              <p>
                Пекарня — это предприятие, изготавливающее хлебобулочные изделия
                и осуществляющее розничные продажи. Концепция мини-пекарни — это
                выпечка свежего хлеба по уникальным рецептурам, а также создание
                домашней и теплой атмосферы, в которой посетители смогут поесть,
                «не отходя от кассы». Целевая аудитория пекарни — жители
                соседних домов, а также люди, которые следят за своим здоровьем
                и предпочитают хлеб без искусственных добавок.
              </p>
            </div>
          </div>
        </div>
        <img className="img" src={img}></img>
      </div>
      <Footer />
    </>
  );
};

export default About;
