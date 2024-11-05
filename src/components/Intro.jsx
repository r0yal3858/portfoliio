import "./Intro.css";
import selfImg from "./self.webp";
import SocialLinks from "./SocialLinks";
import doc from "./Bhanu_Koppolu.pdf";
import dev from "./dev.webp";

const Intro = () => {
  return (
    <>
      <div className="intro__container">
        <img
          src={selfImg}
          className="responsive"
          height="400px"
          width="400px"
        />
        <div className="intro">
          <p className="intro__name">Hello, I'm Bhanu </p>
          <p className="intro__description">
            A passionate Full Stack Software Developer having an experience of
            designing and building Web and Mobile applications with Express /
            Reactjs / Nodejs /MongoDB and some other cool libraries and
            frameworks.
          </p>
          <SocialLinks />
          <div className="intro__links">
            <a href="#contact">Contact Me</a>
            <a href={doc} target="_blank">
              My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="intro__2">
        <div className="intro__2--container">
          <p className="intro__2--name">What I do</p>
          <p className="intro__2--description">
            FULL STACK DEVELOPER Who is looking oppurtunity to develop web
            applications. Experienced in Js in MERN and MEAN stack.
          </p>
          <div className="techStack">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML 5</p>
            </div>
            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="fa-brands fa-react"></i>
              <p>React JS</p>
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              <p>JavaScript</p>
            </div>
            <div>
              <i className="fa-solid fa-database"></i>
              <p>MongoDB</p>
            </div>
            <div>
              <i className="fa-brands fa-python"></i>
              <p>Python</p>
            </div>
            <div>
              <i className="fa-brands fa-aws"></i>
              <p>AWS</p>
            </div>
            <div>
              <i className="fa-brands fa-node"></i>
              <p>Node JS</p>
            </div>
            <div>
              <i className="fa-brands fa-npm"></i>
              <p>NPM</p>
            </div>
          </div>
          <p className="intro__2--description">
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications <br></br> ⚡ Integration of third party
            services such as Firebase/ AWS
          </p>
        </div>
        <img src={dev} className="responsive" height="400px" width="400px" />
      </div>
    </>
  );
};

export default Intro;
