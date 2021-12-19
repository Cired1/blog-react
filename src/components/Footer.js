import "./Footer.css";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">CSS Blog</h2>
      <small className="footer-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit
        ut, nam beatae odit doloribus, similique quisquam deserunt officiis
        nulla ipsa laborum voluptas impedit asperiores error deleniti nesciunt
        veniam nemo?
      </small>
      <ul className="list-social">
        <li>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </li>
        <li>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
        </li>
        <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </li>
        <li>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        </li>
      </ul>
      <small>© 2021 CSS Blog</small>
    </footer>
  );
};

export default Footer;
