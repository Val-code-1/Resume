import React from "react";
import "./Contact.css";
// rafce
const Contact = () => {
  return (
    <div>
      <form
        action="mailto:reit.ben@gmail.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        Name:
        <br />
        <input type="text" size="19" name="Contact-Name" />
        <br />
        <br />
        Email:
        <br />
        <input type="email" name="Contact-Email" />
        <br />
        <br />
        Message:
        <br />
        <textarea
          name="Contact-Message"
          rows="6"
          cols="20"
        ></textarea>
        <br />
        <br />
        <button type="submit" value="Submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
