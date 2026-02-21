import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage("Message sent successfully!");
  }

  return (
    <section style={{ padding: "40px" }}>

      <h2>Contact</h2>

      <p>Email: swetha@email.com</p>

      <p>Phone: 9876543210</p>

      <button onClick={handleClick}>
        Send Message
      </button>

      {message && <p>{message}</p>}

    </section>
  );
}

export default Contact;