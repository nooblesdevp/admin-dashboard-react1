import React from "react";

import "./newUser.scss";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input
            type="text"
            min="5"
            max="20"
            placeholder="morgan"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="morgan" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="morgan" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Passowrd</label>
          <input
            type="password"
            min="8"
            max="25"
            placeholder="morgan"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="number" placeholder="morgan" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Addres</label>
          <input type="text" placeholder="Jakarta" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="newUserInputRadio"
            />
            <label htmlFor="Male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="newUserInputRadio"
            />
            <label htmlFor="Female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              className="newUserInputRadio"
            />
            <label htmlFor="Other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
