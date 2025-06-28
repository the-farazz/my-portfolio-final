import "./intro.css";
// import { Link } from "react-scroll";
import image from "../../assets/image.png";
import hireMe from "../../assets/hireme.png";
import resume from "../../assets/faraz_BSCS_Resume.pdf";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {"I'm "}<span className="introName">{"Faraz Alam"}</span>
          <br />
        {" Software Engineer"}
        </span>
        <p className="introPara">
        {"  I am a skilled Web Developer with experience in "}<br/>
          {"creating user friendly websites."}
        </p>
        <a className="btnImg" href={resume} download="Resume">
          <button className="btn">
            <img src={hireMe} alt="" />
            <div>{"Resume"}</div>
          </button>
        </a>
      </div>
      <div className="imageDiv">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Intro;
