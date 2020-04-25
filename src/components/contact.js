import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>Name</label>
        <input name="name" placeholder="Name" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
