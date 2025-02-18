import React, { useState } from "react";
import axios from "axios";

const Email = () => {
  const [data, setdata] = useState({
    "email": "", // Changed to "mail" to match backend field name
    "subject": "",
    "code": "",
  });
  const [message, setMessage] = useState("");

  const update = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const fun = () => {
    console.log(data)
    axios.post("http://localhost:5000/Email-sending", data)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to send the email.");
      });
  };

  return (
    <>
      <input type="email" name="email" placeholder="Enter your email" onChange={update}/>
      <input type="text" name="subject" placeholder="Enter subject" onChange={update}/>
      <input type="text" name="code" placeholder="Enter code" onChange={update}/>
      <button onClick={fun}>Send</button>
      {message && <p>{message}</p>}
    </>
  );
};

export default Email;