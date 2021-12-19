import "./About.css";
import { FaBook, FaLightbulb, FaInbox } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <img src="https://placeimg.com/1200/400/tech" alt="Banner" />
      <h2 className="about-section-title">About</h2>
      <h3 className="about-section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
        volutpat lorem.
      </h3>
      <div>
        <p>
          Nam ut mollis erat. Vestibulum non fringilla nunc, vitae scelerisque
          enim. Nam vulputate vel lorem eget ultrices. Fusce varius magna ipsum,
          efficitur mattis nunc efficitur vel. Suspendisse eu sollicitudin urna.
          Cras purus nulla, euismod sit amet mauris id, sollicitudin ultrices
          arcu. Praesent nec varius libero, eu accumsan massa. Mauris rutrum
          tortor eget dolor efficitur interdum. Nullam tristique sed dui
          tristique dapibus. Sed efficitur finibus tellus, et vulputate arcu. In
          hac habitasse platea dictumst.
        </p>
        <p>
          Nam ut mollis erat. Vestibulum non fringilla nunc, vitae scelerisque
          enim. Nam vulputate vel lorem eget ultrices. Fusce varius magna ipsum,
          efficitur mattis nunc efficitur vel. Suspendisse eu sollicitudin urna.
          Cras purus nulla, euismod sit amet mauris id, sollicitudin ultrices
          arcu. Praesent nec varius libero, eu accumsan massa. Mauris rutrum
          tortor eget dolor efficitur interdum. Nullam tristique sed dui
          tristique dapibus. Sed efficitur finibus tellus, et vulputate arcu. In
          hac habitasse platea dictumst.{" "}
        </p>
      </div>

      <img src="https://placeimg.com/1200/400/arch" alt="Banner" />

      <section className="about-skills">
        <div className="about-skill">
          <div className="about-skill-title">
            <FaBook />
            <h3>Storytelling</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            volutpat lorem. Vestibulum nisi lacus, hendrerit eu lacus sit amet,
            fringilla pretium purus.Nam ut mollis erat. Vestibulum non fringilla
            nunc, vitae scelerisque enim. Nam vulputate vel lorem eget ultrices.
            Fusce varius magna ipsum, efficitur mattis nunc efficitur vel.
            Suspendisse eu sollicitudin urna. Cras purus nulla, euismod sit amet
            mauris id, sollicitudin ultrices arcu. Praesent nec varius libero,
            eu accumsan massa.
          </p>
        </div>
        <div className="about-skill">
          <div className="about-skill-title">
            <FaLightbulb />
            <h3>Design + craft</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            volutpat lorem. Vestibulum nisi lacus, hendrerit eu lacus sit amet,
            fringilla pretium purus.Nam ut mollis erat. Vestibulum non fringilla
            nunc, vitae scelerisque enim. Nam vulputate vel lorem eget ultrices.
            Fusce varius magna ipsum, efficitur mattis nunc efficitur vel.
            Suspendisse eu sollicitudin urna. Cras purus nulla, euismod sit amet
            mauris id, sollicitudin ultrices arcu. Praesent nec varius libero,
            eu accumsan massa.
          </p>
        </div>
        <div className="about-skill">
          <div className="about-skill-title">
            <FaInbox />
            <h3>Technology</h3>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            volutpat lorem. Vestibulum nisi lacus, hendrerit eu lacus sit amet,
            fringilla pretium purus.Nam ut mollis erat. Vestibulum non fringilla
            nunc, vitae scelerisque enim. Nam vulputate vel lorem eget ultrices.
            Fusce varius magna ipsum, efficitur mattis nunc efficitur vel.
            Suspendisse eu sollicitudin urna. Cras purus nulla, euismod sit amet
            mauris id, sollicitudin ultrices arcu. Praesent nec varius libero,
            eu accumsan massa.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
