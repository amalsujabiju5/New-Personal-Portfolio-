import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b637975-59f2-4786-b95a-ff238b16727b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="contactpage">
      <section id="section-wrapper">
        <div className="form-wrap">
          <form action="#" method="POST" onSubmit={onSubmit}>
            <h2 className="form-title">Contact Me</h2>
            <div className="form-fields">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="fname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
