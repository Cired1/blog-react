import "./Share.css";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Share = () => {
  return (
    <ul className="share-list">
      <li className="share-list-item">
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
          <FaTwitter />
          Share on Twitter
        </a>
      </li>
      <li className="share-list-item">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
          Share on Facebook
        </a>
      </li>
    </ul>
  );
};

export default Share;
