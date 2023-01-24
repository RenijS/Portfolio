import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInfoChange = (e) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };

  return (
    <div id="contact-sect" className="text-lg mb-9" data-aos="fade-up">
      <h1 className="text-5xl text-center mb-9">Contact Me</h1>
      <div className="flex gap-9 ">
        <div className="w-1/2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex w-full gap-10">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleInfoChange}
                  value={formInfo.firstName}
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleInfoChange}
                  value={formInfo.lastName}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInfoChange}
                value={formInfo.email}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="msg">Message</label>
              <textarea
                name="message"
                id="msg"
                cols="10"
                rows="5"
                onChange={handleInfoChange}
                value={formInfo.message}
                required
              ></textarea>
            </div>
            <button className="w-max bg-blue-200 border border-solid border-gray-300 rounded-lg px-6 py-1">
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-center w-1/2">
          <div className="flex flex-col gap-6">
            <span className="text-2xl">Contact Info</span>
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
