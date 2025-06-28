import { useRef } from "react";
import "./contact.css";
import linkedInIcon from "../../assets/linkedIn.png";
import githubIcon from "../../assets/github.png";
import twitterIcon from "../../assets/twitter.png";
import emailIcon from "../../assets/email.png";
import emailjs from "@emailjs/browser";

const Contact = () => {


  const handleSubmit = () => {
    
    alert("Your response has been emailed Faraz!");
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xfm2ylx", "template_2w61f53", form.current, {
        publicKey: "REd2YveYe0XT5-tCUTmdx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactPage">

      {/* ref={form} onSubmit={sendEmail} */}
      <div className="contact">
        <div className="contactPara">
          <h2>Contact Me</h2>
          <p>Please fill the contact below to discuss any work opportunity.</p>
        </div>
        <form className="contactForm" onSubmit={sendEmail} ref={form}>
          <input
         
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
         
            type="text"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
          
            name="message"
            className="msg"
            rows="8"
            placeholder="Your Message"
          ></textarea>
          <button onClick={handleSubmit} className="submitButton" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/the-farazz/" target="_blank">
              <img src={linkedInIcon} alt="" />
            </a>
            <a href="https://github.com/the-farazz" target="_blank">
              <img src={githubIcon} alt="" />
            </a>
            <a href="https://twitter.com/the_farazzz" target="_blank">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="mailto:farazalam706@gmail.com" target="_blank">
              <img src={emailIcon} alt="" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
