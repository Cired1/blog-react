import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ id, imageURL, title }) => {
  return (
    <article className="article-card-preview">
      <Link to={"posts/" + id}>
        {imageURL ? (
          <img src={imageURL} alt="Article" />
        ) : (
          <img src="https://placeimg.com/210/150/tech" alt="Article" />
        )}
        <h4 className="article-card-title">{title}</h4>
      </Link>
    </article>
  );
};

export default ArticleCard;
