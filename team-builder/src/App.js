import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";

function App() {
  const [teammates, setTeammates] = useState([
    {
      firstname: "John",
      lastname: "Doe",
      email: "jondoe@gmial.com",
      role: "unknown"
    }
  ]);

  return (
    <div className="App">
      <h1>Register Team Member</h1>

      <Form teammates={teammates} setTeammates={setTeammates}/>

      {teammates.map((teammate, index) => (
        <div className="teammate-card" key={index}>
          <h2>
            {teammate.firstname} {teammate.lastname}
          </h2>
          <h3>{teammate.email}</h3>
          <h4>{teammate.role}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;