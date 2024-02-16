import React from "react";

function Contact() {
  return (
    <div id="contact">
      <form
        action="https://formspree.io/f/mwkgvddz"
        method="POST"
        style={{
          margin: "auto",
          background: "#fff",
          clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 90%)",
        }}
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
    </div>
  );
}

export default Contact;
