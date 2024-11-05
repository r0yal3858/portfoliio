import Contact from "./Contact";
import Intro from "./Intro";
import "./Home.css";
import { useState, memo } from "react";

const Home = ({ setTime }) => {
  const [academic, setAcademic] = useState(0);
  const [personal, setPersonal] = useState(0);

  const academicProjects = [
    {
      title: "Interview Preperation Portal",
      description: `Led a 4-member team to develop a full-stack web app using React,
                    Express, Node.js, and MongoDB. Implemented an impressive array
                    of features, including interview feedback, preparation blogs,
                    user profile management, user profile based quizzes, progress
                    tracking and interview scheduling. Acquired in-depth expertise
                    in web development, handling both frontend and backend
                    components, resulting in a 360-degree skill set`,
      link: ``,
    },
    {
      title: "Resource Reserve",
      description: ` Developed a full-stack web application using NextJs, Redis, Amazon
            s3 and Firebase coordinating with three more people. This
            application is a simple solution for managing reservations in
            places like universities, apartments and communities which helps
            to reserve recreational spaces like Banquets Halls, Study Halls,
            Sports field etc. Apart from the core features automated
            notifications and administrative tools make managing resources a
            breeze, ensuring optimal utilization and a more satisfying user
            experience`,
      link: `https://github.com/Rushiraj0608/ResourceReserve`,
    },
  ];
  const personalProjects = [
    {
      title: `Music Player`,
      description: `developed a front end application with the help of rapid api which
              displays trending musinc based on region can help create playlist
              of the session of that user`,
      link: ``,
    },
    {
      title: `Marvel Application`,
      description: `using the marvel application`,
      link: ``,
    },
  ];

  return (
    <div className="main">
      <div className="content">
        <Intro />

        <div className="wrapper">
          <div className="project__wrapper">
            <div className="project__container">
              <h1>ACADEMIC PROJECTS</h1>
              <div className="project">
                <button
                  onClick={() => {
                    setAcademic(
                      (academic) =>
                        Math.abs(academic - 1) % academicProjects.length
                    );
                  }}
                  className="controls"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="projectDisplay">
                  <h2>
                    {academicProjects[academic].link.length > 0 ? (
                      <a
                        href={`${academicProjects[academic].link}`}
                        target="_blank"
                      >
                        {`${academicProjects[academic].title} `}
                        <i className="fa-brands fa-github"></i>
                      </a>
                    ) : (
                      academicProjects[academic].title
                    )}
                  </h2>
                  <p>{academicProjects[academic].description}</p>
                </div>
                <button
                  onClick={() => {
                    setAcademic(
                      (academic) => (academic + 1) % academicProjects.length
                    );
                  }}
                  className="controls"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="project__container">
              <h1>PERSONAL PROJECTS</h1>
              <div className="project">
                <button
                  onClick={() => {
                    setPersonal(
                      (personal) =>
                        Math.abs(personal - 1) % personalProjects.length
                    );
                  }}
                  className="controls"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="projectDisplay">
                  <h2>
                    {academicProjects[personal].link.length > 0 ? (
                      <a
                        href={`${academicProjects[academic].link}`}
                        target="_blank"
                      >
                        {`${personalProjects[personal].title} `}
                        <i className="fa-brands fa-github"></i>
                      </a>
                    ) : (
                      personalProjects[personal].title
                    )}
                  </h2>
                  <p>{personalProjects[personal].description}</p>
                </div>
                <button
                  onClick={() => {
                    setPersonal(
                      (personal) => (personal + 1) % personalProjects.length
                    );
                  }}
                  className="controls"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="project__current">
            <h2>What's going on now??</h2>
            <p>
              Currently, working on a developing a React plugin for tensorboard
              server, built on python werkzeug, which caters image editing and
              analyzing tools for ML models. The plugin in also includes
              extraction weights of the CNN model, visualizing feature maps,
              visualizing filters etc.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default memo(Home);
