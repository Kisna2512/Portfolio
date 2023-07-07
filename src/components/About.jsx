import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-25">
          Motivated and dedicated Developer Intern with hands-on experience in
          Trade Capture and Risk at Barclays. Developed an efficient Infra
          Management Portal using JavaScript and React.js, while applying strong
          knowledge of data structures and algorithms.
        </p>

        <br />

        <p className="text-xl md-10">
          Proficient problem solver with a track record of successfully tackling
          800+ LeetCode questions. Strong written and verbal communication
          skills, with a keen attention to detail and ability to learn new
          technologies quickly. Seeking a challenging role to contribute to the
          success of an innovative organization.
        </p>
      </div>
    </div>
  );
};

export default About;
