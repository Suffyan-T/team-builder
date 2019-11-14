import React, { useState } from "react";

const Form = props => {
  // console.log(props);

  const initialForm = {
    firstname: "",
    lastname: "",
    email: "",
    role: ""
  };

  const [team, setTeam] = useState(initialForm);

  const handleChange = event => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeammates([...props.teammates, team]);

    resetForm(event);
  };

  const resetForm = event => {
    event.preventDefault();

    setTeam(initialForm);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={team.firstname}
          />
          <br></br>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={team.lastname}
          />
          <br></br>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={team.email}
          />
          <br></br>
          <input
            type="text"
            name="role"
            placeholder="Team Role"
            onChange={handleChange}
            value={team.role}
          />
          <br></br>
          <button type="submit">Register!</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;