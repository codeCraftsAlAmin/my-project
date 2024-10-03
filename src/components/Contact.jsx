import React from "react";

const Contact = () => {
  return (
    <div className="contact_page">
      <h2>Contact Page</h2>

      {/* mapping */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583813507!2d91.81983560975806!3d24.900058347518424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1727626960690!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* form tag */}
      <div className="container">
        <div className="contact_form">
          <form action="https://formspree.io/f/meojylzp" method="POST">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              required
              autoCapitalize="off"
              placeholder="Enter your message"
              // cols={"30"}
              // rows={"30"}
            ></textarea>

            <input type="submit" value={"send"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
