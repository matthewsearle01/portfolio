import React from "react";

export default function About() {
  return (
    <section id="about" class="bg-white flex flex-col py-4">
      <div className="container mx-auto">
        <div class="flex flex-col">
          <h1 class="sm:text-4xl text-2xl font-bold title-font mt-5 mb-4 ">
            About Me
          </h1>
        </div>
        <div class="">
          <p class="py-3 text-xl">
            Hi, I’m Matt - a software developer from London with a passion for
            all things code!
          </p>
          <p class="py-3 text-xl">
            I’ve always had a love of technology and after after discovering
            programming I was hooked from my very first "Hello, world!". The
            excitement I feel when learning new technologies, the challenge and
            buzz I get when I solve a tricky problem, and the satisfaction of
            seeing my code realised as a working application, all led me to take
            the leap and commit to embarking on a life as a developer, studying
            on an intensive 16 week coding bootcamp at
            <a href="https://io-academy.uk/" class="underline icon1">
              {" "}
              iO Academy.
            </a>
          </p>
          <p class="py-3 text-xl">
            During this time I have worked hard on best practices and approaches
            to development, and vastly expanded my understanding of contemporary
            software frameworks and databases.
          </p>
          <p class="py-3 text-xl">
            I'm confident working with a range of technologies including HTML,
            CSS/SASS, JavaScript, React, Bootstrap and Tailwind on the front
            end, and for backend I've been using PHP, Node.js, MySQL and
            MongoDB. I've been paired each day with people of all abilities and
            taken great satisfaction from the Academy's culture of accelerated
            learning and focus on writing clear and concise code. I'm constantly
            learning new skills and I'm incredibly excited to see where life as
            a developer can take me.
          </p>
          <p class="py-3 text-xl">
            Outside of coding I can be found in record shops digging for rare
            vinyl, making music by sampling those records, and visiting
            independent cinemas with friends.
          </p>
        </div>
      </div>
    </section>
  );
}
