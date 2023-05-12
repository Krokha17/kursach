import React from "react";
import Navbar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import Footer from "../components/Footer";
import { ListGroup, Button } from "react-bootstrap/";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="header">
          <h1>Создай свою пекарню</h1>
          <div className="list-group">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Ты получишь:
              </ListGroup.Item>
              <ListGroup.Item as="li">Стабильный доход</ListGroup.Item>
            </ListGroup>
            <Button className="button" variant="success">
              Открыть франшизу
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
