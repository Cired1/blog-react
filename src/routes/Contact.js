import Form from "../components/Form";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-section-title">Contact us</h2>
      <p className="contact-form-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
        volutpat lorem. Vestibulum nisi lacus, hendrerit eu lacus sit amet,
        fringilla pretium purus.Nam ut mollis erat.
      </p>
      <Form />
    </section>
  );
};

export default Contact;
