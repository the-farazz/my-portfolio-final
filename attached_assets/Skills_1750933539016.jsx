import "./skills.css";
import UIDesign from "./../../assets/ui-design.png";
import WebDesign from "./../../assets/website-design.png";
import AppDesign from "./../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillsPara">
        <div className="skillTitle">What I do</div>
        <span className="skillDesc">
          {`I'm a passionate front-end developer. I work well independently and in teams, aiming to deliver great results.`}
        </span>
      </div>
      <div className="skillsBars">
        
        <div className="skillBar">
          <div className="skillBarImg">
            <img src={WebDesign} alt="" />
          </div>
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
            {`Designing beautiful and user-friendly websites to make businesses stand out online.`}
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarImg">
            <img src={AppDesign} alt="" />
          </div>
          <div className="skillBarText">
            <h2>{"App Design"}</h2>
            <p>
             {"Developing gorgeous mobile applications to ensure seamless usability on phone."}
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarImg">
            <img src={UIDesign} alt="" />
          </div>
          <div className="skillBarText">
            <h2>{`Desktop Design`}</h2>
            <p>
             {`Crafting sleek desktop interfaces for productive and enjoyable experiences.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
