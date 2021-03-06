import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CV from "../../../images/Matthew_Searle_CV.pdf";
import "../../../styles.css";
import avatar from "../../../images/avatar.png";

export default function Navbar() {
  return (
    <header className="background md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
        <nav className="md:mr-auto flex flex-wrap items-center text-3xl justify-center">
          <img
            src={avatar}
            alt="an illustation of matt"
            width="150"
            class="image-radius"
          />
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#F59595" : "#FFFFFF",
            })}
            to="/"
            className="mr-5 pr-3 icon1 sm:text-5xl text-3xl font-medium title-font nav_link"
            activeClassName="underline"
          >
            Matt Searle
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#F59595" : "#FFFFFF",
            })}
            to="/about"
            className="mr-5 px-3 icon1 nav_link"
            activeClassName="underline"
            exact
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#F59595" : "#FFFFFF",
            })}
            to="/contact"
            className="mr-5 px-3 icon1 nav_link"
            activeClassName="underline"
          >
            Contact
          </NavLink>
          <a href={CV} className="mr-5 px-3 nav_link text">
            CV
          </a>
        </nav>
        <div class="flex">
          <a
            href="https://github.com/matthewsearle01"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none mt-4 md:mt-0 icon1"
          >
            <FaGithub size={42} />
          </a>
          <a
            href="https://www.linkedin.com/in/matthewsearle01"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none mt-4 md:mt-0 icon1"
          >
            <FaLinkedin size={42} />
          </a>
          <a
            href="mailto:matthewsearle01@gmail.com"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none mt-4 md:mt-0 icon1"
          >
            <MdEmail size={42} />
          </a>
        </div>
      </div>
    </header>
  );
}
