import React, { useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([{ name: "", age: "", email: "" }]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newUsers = [...users];
    newUsers[index][name] = value;
    setUsers(newUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
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
                  style={{ border: "1px solid black" }}
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(event) => handleInputChange(event, index)}
                  required
                />
              </td>
              <td>
                <input
                  style={{ border: "1px solid black" }}
                  type="number"
                  name="age"
                  value={user.age}
                  onChange={(event) => handleInputChange(event, index)}
                  required
                />
              </td>
              <td>
                <input
                  style={{ border: "1px solid black" }}
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
            <td></td>
            <td><br></br>
              <button style={{ padding: "10px", border: "1px solid black", borderRadius: '15px'}} type="submit">Submit</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br></br>
      {formSubmitted && (
        <p style={{ marginRight: "300px"}}>
          Thank you for registering your interest in participating in our
          research. A member of our team will contact you soon.
        </p>
      )}
    </form>
  );
}

export default UserTable;
