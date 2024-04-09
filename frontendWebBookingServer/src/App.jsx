import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [reservations, setReservations] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2huZG9lQHRlc3QuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzEwNDE0NDYyLCJleHAiOjE3MTA1MDA4NjJ9.g1rdmNsOZPb2DEa_ZcoBPDdOlKa5LXYc_fmr4saNWL0";

  useEffect(() => {
    // fetch
    fetch("http://localhost:3000/api/reservations", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReservations(data);
      });
  }, []);

  return (
    <>
      <h1>Simplon - Frontend</h1>
      <p className="paragraph">1ere partie</p>
      <ul>
        {reservations.map((r) => {
          return (
            <li key={r.id}>
              <div>Nombre de clients : {r.number_of_customers}</div>
              <div>Reservé par : {r.reservation_name}</div>
              <div>Note : {r.reservation_note}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
