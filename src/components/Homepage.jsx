import React, { useState } from 'react';
// import './App.css';

function Homepage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError('Both fields are required.');
      setFullName('');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold mb-4">Enter Your Full Name</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Submit
          </button>
        </form>

        {/* Display 'Full Name Display' on initial render and update with user input */}
        <div className="mt-4 p-4 bg-gray-100 text-gray-700 rounded-lg">
          Full Name Display: {fullName || "N/A"}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
