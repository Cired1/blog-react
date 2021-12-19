import { useFetch } from "../hooks/useFetch";
import "./AuthorCard.css";

const AuthorCard = ({ author }) => {
  const { data, error, loading } = useFetch(
    "https://css-tricks.com/wp-json/wp/v2/users/" + author
  );

  if (!data) return null;

  return (
    <figure className="profile">
      <h3>{data.name}</h3>
      <img className="profile-image" src={data.avatar_urls["96"]} alt={data.name} />
    </figure>
  );
};

export default AuthorCard;
