import { useForm } from "../hooks/useForm";
import Message from "./Message";
import Loader from "./Loader";
import "./Form.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The Name field is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The Name field only accepts letters and blank spaces";
  }

  if (!form.email.trim()) {
    errors.email = "The Email field is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The Email field is incorrect";
  }

  if (!form.company.trim()) {
    errors.company = "The Company field is required";
  }

  if (!form.message.trim()) {
    errors.message = "The Message field is required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "The Message field must not exceed 255 characters";
  }

  return errors;
};

const Form = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  let styles = {
    color: "dc3545",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 0
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.company}
          required
        />
        {errors.company && <p style={styles}>{errors.company}</p>}
        <textarea
          name="message"
          cols="50"
          rows="5"
          placeholder="Message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.message}
        ></textarea>
        {errors.message && <p style={styles}>{errors.message}</p>}
        <input type="submit" value="Submit" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="The data has been sent." bgColor="#198754" />
      )}
    </div>
  );
};

export default Form;
