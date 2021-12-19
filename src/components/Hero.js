import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Message from "../components/Message";
import "./Hero.css";

const Hero = () => {
  const { data, error, loading } = useFetch(
    "https://css-tricks.com/wp-json/wp/v2/posts/357405"
  );

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  const { id, title, featured_media_src_url } = data;

  return (
    <section className="hero-section">
      <Link to={"/posts/" + id}>
        <figure>
          <img src={featured_media_src_url} alt="Banner" />
        </figure>
        <h2>{title.rendered}</h2>
      </Link>
    </section>
  );
};

export default Hero;
