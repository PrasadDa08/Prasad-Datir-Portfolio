import React from "react";

function Contact() {
  return (
    <form
      action="https://formspree.io/f/mwkgvddz"
      method="POST"
      style={{ margin: "auto" }}
    >
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Phone:
        <input type="number" name="phone" />
      </label>
      <label>
        Message:
        <textarea name="message" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
