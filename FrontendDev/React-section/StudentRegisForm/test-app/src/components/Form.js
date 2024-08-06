import React, { useState } from "react";

const Form = () => {
  //Manage the input state

  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("Science");
  const [consent, setConsent] = useState("");

  //Handle change
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleCouseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.value);
  };

  //Handle Submit
  const handleSubmit = (e) => {
    //orevent the browser default
    e.preventDefault();
    console.log({
      studentName,
      age,
      course,
      consent,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={studentName} onChange={handleNameChange} />
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />

        <label>course:</label>
        <select value={course} onChange={handleCouseChange}>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>

          <option value="SST">SST</option>
        </select>

        <label>Consent:</label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        ></input>
      </div>
      <button type="Submit">Submit</button>
    </form>
  );
};

export default Form;
