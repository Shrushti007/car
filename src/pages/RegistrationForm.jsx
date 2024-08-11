import React from 'react';
import "../styles/register.css";

export const RegistrationForm = () => {

  return (
    <div className="main">
      <div className="register">
        <h2>Register Here</h2>
        <form id="register" method="post">
          <label>First Name:</label>
          <br />
          <input type="text" name="fname" id="fname" placeholder="Enter First Name" />
          <br /><br />
          <label>Last Name:</label>
          <br />
          <input type="text" name="lname" id="lname" placeholder="Enter Last Name" />
          <br /><br />
          <label>Address:</label>
          <br />
          <input type="text" name="address" id="address" placeholder="Enter Address" />
          <br /><br />
          <label>Phone Number:</label>
          <br />
          <input type="tel" id="mobilenumber" name="mobilenumber" pattern="[0-9]{10}" placeholder="1234567890" required />
          <br /><br />
          <label>Email:</label>
          <br />
          <input type="email" name="email" id="email" placeholder="Enter Email" />
          <br /><br />
          <label>UserName:</label>
          <br />
          <input type="text" name="username" id="username" placeholder="Enter UserName" />
          <br /><br />
          <label>Password:</label>
          <br />
          <input type="password" name="password" id="password" placeholder="Enter Password" />
          <br /><br />
          <label>Role:</label>
          <br />
          <input type="radio" name="role" id="admin" />
          <span>Admin</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="role" id="customer" />
          <span>Customer</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="role" id="agent" />
          <span>Agent</span>
          <br /><br />
          <input type="submit" value="Submit" name="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

