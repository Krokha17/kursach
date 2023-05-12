import { useEffect, useState } from "react";
import {
  Table,
} from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/Domain/Product")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);



  return (
    <div>
        <NavBar />
      <h1>Post:</h1>
      <Table striped bordered hover variant="dark" style={{ width: 600 }}>
        <thead>
          <tr>
            <th>PostId</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => {
            return (
              <tr>
                <td style={{ color: "#1e925e" }}>{post.postId}</td>
                <td>{post.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}
