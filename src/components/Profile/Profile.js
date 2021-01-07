import React, { useState } from "react";
import "./Profile.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const Profile = () => {
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleNumber = ({ target }) => {
    setNumber(target.value);
  };
  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };
  const handleCity = ({ target }) => {
    setCity(target.value);
  };
  const handleCountry = ({ target }) => {
    setCountry(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    if (number && city && country && address) {
      store.addNotification({
        title: "Updated!",
        message: "Profile Updated Successfuly",
        type: "success",
        insert: "center",
        container: "center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
          showIcon: true,
        },
      });
    }
  };
  return (
    <div>
      <ReactNotification />
      <div className="title">
        <h2>Update Profile</h2>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value="Faisal Rehman" disabled />
        <br />
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female <br />
        <label htmlFor="father">Father name:</label>
        <input type="text" value="Ghulam Muhammad" id="father" disabled />
        <br />
        <label htmlFor="number">Phone Number</label>
        <input
          type="number"
          name="phone"
          id="number"
          value={number}
          onChange={handleNumber}
          required
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleAddress}
          required
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleCity}
          required
        />
        <br />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={handleCountry}
          required
        />{" "}
        <br />
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          id="email"
          value="bcsf17m019@pucit.edu.pk"
          disabled
        />
        <br />
        <button onClick={handleClick}>Update</button>
      </form>
    </div>
  );
};

export default Profile;
