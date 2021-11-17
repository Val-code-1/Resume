import React from "react";
import "./Contact.css";
// rafce
const Contact = () => {
  return (
    <div id="contact">
      <h3 id="header">
        If you are interested in contacting me about a
        position or any questions feel free
      </h3>
      <form
        action="mailto:reit.ben@gmail.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        Name:
        <br />
        <input type="text" size="39" name="Contact-Name" />
        <br />
        <br />
        Email:
        <br />
        <input
          type="email"
          size="39"
          name="Contact-Email"
        />
        <br />
        <br />
        Message:
        <br />
        <textarea
          name="Contact-Message"
          rows="16"
          cols="40"
        ></textarea>
        <br />
        <br />
        <button type="submit" id="submit" value="Submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
