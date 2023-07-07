// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 ">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";

import letschat from "../assets/portfolio/Letschat.jpg";
import blogApp from "../assets/portfolio/blogApp.png";

import textutils from "../assets/portfolio/textutils.png";
import leetcode from "../assets/leetcode.jpg";
import gfg from "../assets/gfg.jpg";
import hackerrank from "../assets/hackerrank.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: letschat,
      title: "MERN Chat App",
      code: "https://github.com/Kisna2512/Mern_Let-s_Chat_App.git",
      demo: "https://github.com/Kisna2512/Mern_Let-s_Chat_App/blob/main/README.md",
    },
    {
      id: 2,
      src: blogApp,
      title: "Blog Web App",
      code: "https://github.com/Kisna2512/Insightful-Pages.git",
      demo: "https://github.com/Kisna2512/Insightful-Pages/blob/main/README.md",
    },
    {
      id: 3,
      src: textutils,
      title: "React Js text Editor",
      code: "https://github.com/Kisna2512/Text-utils.git",
      demo: "https://text-utils-krishna.netlify.app/",
    },
    // {
    //   id: 4,
    //   src: todolist,
    //   title : "React Js ToDo List App",
    //   code:"https://github.com/Yash4119/React_Js-ToDo-App",
    //   demo:"https://todo-app-yash-ambekar.netlify.app/"
    // }
  ];

  const profiles = [
    {
      id: 1,
      title: "Leetcode",
      src: leetcode,
      href: "https://leetcode.com/kisna/",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      title: "Geeks For Geeks",
      src: gfg,
      href: "https://auth.geeksforgeeks.org/user/krishnakotgire12369/practice",
      style: "shadow-green-300",
    },
    {
      id: 3,
      title: "Hackerrank",
      src: hackerrank,
      href: "https://www.hackerrank.com/krishnakotgire11?hr_r=1",
      style: "shadow-green-600",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-50 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* structure for one category */}
        <div className="pb-8 mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
        </div>
        {/* Structure of a Card */}
        <div className="mb-10">
          <p className=" font-bold text-3xl inline  border-b-4 border-gray-500 mb-10">
            Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, demo, title }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-md ">
              <img
                src={src}
                alt="_blank"
                className="rounded-md duration-300 hover:scale-105 h-40 w-full"
              />
              <div className="text-xl font-bold py-2 border-b-2 border-gray-500 justify-center items-center text-center">
                {title}
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 font-bold m-2 duration-200 hover:scale-105">
                  <a href={code} className="hover:text-red-400">
                    Code
                  </a>
                </button>
                <button className="w-1/2 px-6 py-1 font-bold m-2 duration-200 hover:scale-105">
                  <a href={demo} className="hover:text-green-400">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Structure of a Card */}
        <div className="mb-10 mt-10">
          <p className=" font-bold text-3xl inline  border-b-4 border-gray-500 mb-10">
            Coding Profiles
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-0">
          {profiles.map(({ id, src, href, style }) => (
            <div key={id} className={`shadow-md rounded-md ${style}`}>
              <img
                src={src}
                alt="_blank"
                className="rounded-md duration-300 h-40 w-full hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 font-bold m-4 duration-200 hover:scale-105">
                  <a href={href} alt="_blank">
                    Visit
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
