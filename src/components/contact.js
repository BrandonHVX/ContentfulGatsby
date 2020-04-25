import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        `<input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ContactForm;
