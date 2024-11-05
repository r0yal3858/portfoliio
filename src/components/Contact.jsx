import "./Contact.css";
import SocialLinks from "./SocialLinks";
import ContactSvg from "./contactme.gif";
const Contact = () => {
  return (
    <div id="contact" className="contact__container">
      <div>
        <div className="contact__info">
          <h1>Contact Me</h1>
          <a href="tel:+15513446259">+1(551)-344-6259</a>
          <a href="mailto:bhanuroyal.koppolu@gmail.com">
            bhanuroyal.koppolu@gmail.com
          </a>
        </div>
        <SocialLinks />
      </div>
      <img
        src={ContactSvg}
        height="400px"
        width="400px"
        className="responsive"
      />
    </div>
  );
};

export default Contact;
