import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import parse from "html-react-parser";
import Share from "../components/Share";
import AuthorCard from "../components/AuthorCard";
import Message from "../components/Message";
import "./Post.css";

const Post = () => {
  let { id } = useParams();

  const { data, error, loading } = useFetch(
    "https://css-tricks.com/wp-json/wp/v2/posts/" + id
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

  let dateFormat = new Date(data.date).toLocaleString();

  return (
    <section className="post-section">
      <h2 className="post-title">{data.title.rendered}</h2>
      <img src={data.featured_media_src_url} alt="Post" />
      <AuthorCard author={data.author} />
      <small>
        <strong>Publication date: </strong>
        {dateFormat}
      </small>
      <article className="post-content">{parse(data.content.rendered)}</article>
      <Share />
    </section>
  );
};

export default Post;
