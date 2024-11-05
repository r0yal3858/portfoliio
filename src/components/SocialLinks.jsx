import "./SocialLinks.css";
import linkedin from "./linkedin.png";
import github from "./github.png";
import gmail from "./gmail.png";
import codepen from "./codepen.png";
const SocialLinks = () => {
  return (
    <div className="links__container">
      <div className="links">
        <a
          href="https://www.linkedin.com/in/bhanu-srinivasa-koppolu-5b5856184"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin logo" height="50px" width="50px" />
        </a>
        <a href="https://github.com/r0yal3858" target="_blank">
          <img src={github} alt="linkedin logo" height="50px" width="50px" />
        </a>
        <a href="https://codepen.io/r0yal3858/pens/" target="_blank">
          <img src={codepen} alt="linkedin logo" height="50px" width="50px" />
        </a>
        <a
          onClick={async (e) => {
            e.preventDefault();
            try {
              await navigator.clipboard.writeText(
                "bhanuroyal.koppolu@gmail.com"
              );
              window.alert("Email has been copied to clipboard");
            } catch (e) {
              window.alert("Error while copying email");
              setEmail("bhanuroyal.koppolu@gmail.com");
            }
          }}
        >
          <img src={gmail} alt="linkedin logo" height="50px" width="50px" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
