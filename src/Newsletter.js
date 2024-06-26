import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing ${email} to our newsletter!`);
      setEmail("");
    }
  }

  return (
    <>
      <h4 className="text-footer">Subscribe to our newsletter!</h4>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address here"
          value={email}
          onChange={handleInput}
          style={{
            padding: "10px",
            fontSize: "12px",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            margin: "5px",
            padding: "5px",
            backgroundColor:  "rgba(155, 67, 238, 0.507)",
            border: "none",
            color: "white",
            fontSize: "13px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "170px",
            fontWeight: "bold",
          }}
        >
          Subscribe
        </button>
      </form>
    </>
  );
}

export default Newsletter;