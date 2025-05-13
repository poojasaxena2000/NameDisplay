// import Homepage from './components/Homepage'
// function App() {
//   return (
//     <div>
//       <Homepage/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  const containerStyle = {
    width: "400px",
    margin: "50px auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "bold",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const displayStyle = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Full Name Display</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div style={displayStyle}>
          <h3>Full Name: {fullName}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
