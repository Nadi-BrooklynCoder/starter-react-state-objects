//Form.jsx
import { useState } from "react";

export default function Form () {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        zip: "",
        email: "",
        password: "",
      });

    const handleTextChange = (event)  => {
        setUser({
          ...user,
          [event.target.id]: event.target.value,
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
      }

      const resetForm = () => {
        setUser({
            firstName: "",
            lastName: "",
            zip: "",
            email: "",
            password: "", 
        })
      }

      return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name: </label>
  <input
    type="text"
    value={user.firstName}
    onChange={handleTextChange}
    id="firstName"
  />
  <label htmlFor="">Last Name: </label>
  <input
    type="text"
    value={user.lastName}
    onChange={handleTextChange}
    id="lastName"
  />
  <label htmlFor="">ZipCode: </label>
  <input type="number" value={user.zip} onChange={handleTextChange} id="zip" />
  <label htmlFor="">Email :</label>
  <input
    type="email"
    value={user.email}
    onChange={handleTextChange}
    id="email"
  />
  <label htmlFor="">Password: </label>
    <input
    type="password"
    value={user.password}
    onChange={handleTextChange}
    id="password"
  />

  <input type="submit" />
</form>
      )
}