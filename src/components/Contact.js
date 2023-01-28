import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const clearInputs = () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll(".inputField");
    console.log(inputs);
    for (let element of inputs) {
      element.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email Sent");
          clearInputs();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-sect" className="text-lg pb-9 pt-10">
      <h1 className="text-5xl text-center mb-9">Contact Me</h1>
      <div className="flex flex-col-reverse md:flex-row gap-9 ">
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex w-full gap-10">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="inputField"
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="inputField"
                  type="text"
                  name="lastName"
                  id="lastName"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="inputField"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="msg">Message</label>
              <textarea
                className="inputField"
                name="message"
                id="msg"
                cols="10"
                rows="5"
                required
              ></textarea>
            </div>
            <button className="w-max bg-blue-200 border border-solid border-gray-300 rounded-lg px-6 py-1 hover:shadow-md">
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <div className="flex flex-wrap justify-center gap-6 md:flex-col">
            <div>
              <FontAwesomeIcon icon={faLocationDot} /> Melbourne, Australia
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> renijshrestha8@gmail.com
            </div>
            <div className="hover:text-sky-700">
              <a href="https://www.linkedin.com/in/renij-shrestha-a2ab53210/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
            <div className="hover:text-sky-700">
              <a href="https://github.com/RenijS">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </div>
            <div className="hover:text-sky-700">
              <a href="file/" download={"renijShrestha.pdf"}>
                <FontAwesomeIcon icon={faCircleDown} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
