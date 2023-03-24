import React, { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([{ name: "", age: "", email: "" }]);
  const [formSubmitted, setFormSubmitted] = useState({ submitted: false, duration: 0 });

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newUsers = [...users];
    newUsers[index][name] = value;
    setUsers(newUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted({ submitted: true, duration: 5000 });
    console.log("Submitted users:", users);
  };

  useEffect(() => {
    if (formSubmitted.submitted) {
      const timer = setTimeout(() => {
        setFormSubmitted({ submitted: false, duration: 0 });
      }, formSubmitted.duration);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className="user-tablecontainer">
      <form onSubmit={handleSubmit}>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(event) => handleInputChange(event, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={(event) => handleInputChange(event, index)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(event) => handleInputChange(event, index)}
                    required
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">
                <button style={{borderRadius:'15px'}} type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {formSubmitted.submitted && (
        <p className="success-message">
          Thank you for registering your interest in participating in our research. A member of our team will contact you soon.
        </p>
      )}
    </div>
  );
}

export default UserTable;
