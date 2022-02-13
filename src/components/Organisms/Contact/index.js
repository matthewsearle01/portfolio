import React from "react";
import mail from "../../../images/mail.svg";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="about" class="bg-white flex flex-col py-4">
      <div className="container mx-auto">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mt-5 mb-4">
            Get In Touch
          </h1>
          <p class="py-5 text-xl">
            If you would like to work with me, I would love to hear from you!
            The best way to get in touch is via email, or you can check out my
            social links below as well.
          </p>
          <div class="flex flex-wrap self-center pt-10 sm:p-5">
            <div class="self-center">
              <div class="flex py-3">
                <MdEmail size={40} />
                <p class="py-1 text-2xl px-3">matthewsearle01@gmail.com</p>
              </div>
              <div class="flex py-3">
                <FaLinkedin size={40} />
                <a
                  href="https://www.linkedin.com/in/matthewsearle01"
                  class="py-1 text-2xl px-3 flex"
                >
                  LinkedIn
                </a>
              </div>
              <div class="flex py-3">
                <FaGithub size={40} />
                <a
                  href="https://github.com/matthewsearle01"
                  class="py-1 text-2xl px-3"
                >
                  GitHub
                </a>
              </div>
            </div>
            <img
              src={mail}
              alt="a paper aeroplane"
              width="400"
              class="self-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
