import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  function handleForm(e) {
    if (
      name.length < 4 ||
      age.length < 2 ||
      message.length < 4 ||
      email.length < 6 ||
      address.length < 5
    ) {
      alert("please enter valid data");
    } else {
      alert("submitted");
      setConfirm("Data has been submitted!");
    }
    e.preventDefault();
  }

  function handleName(e) {
    const item = e.target.value;
    if (item.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }

  function handleEmail(e) {
    const item = e.target.value;
    if (item.length < 6) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }
  function handleAge(e) {
    const item = e.target.value;
    if (item.length < 2) {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }
    setAge(item);
  }
  function handleAddress(e) {
    const item = e.target.value;
    if (item.length < 5) {
      setAddressErr(true);
    } else {
      setAddressErr(false);
    }
    setAddress(item);
  }
  function handleMessage(e) {
    const item = e.target.value;
    if (item.length < 4) {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
    setMessage(item);
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleName}
        />
        {nameErr ? <small style={{ color: "red" }}>name not valid</small> : ""}
        <input
          type="text"
          placeholder="enter your email"
          onChange={handleEmail}
        />
        {emailErr ? (
          <small style={{ color: "red" }}>email not valid</small>
        ) : (
          ""
        )}
        <input
          type="number"
          placeholder="enter your age"
          min="21"
          max="40"
          onChange={handleAge}
        />
        {ageErr ? <small style={{ color: "red" }}>age not valid</small> : ""}
        <input
          type="address"
          placeholder="enter your address"
          onChange={handleAddress}
        />
        {addressErr ? (
          <small style={{ color: "red" }}>address not valid</small>
        ) : (
          ""
        )}
        <input type="text" placeholder="message..." onChange={handleMessage} />
        {messageErr ? (
          <small style={{ color: "red" }}>message not valid</small>
        ) : (
          ""
        )}
        <button type="submit" className="btn1">
          Submit Data
        </button>
        <h5 style={{ color: "red" }}>{confirm}</h5>
      </form>
    </div>
  );
}

export default Contact;
