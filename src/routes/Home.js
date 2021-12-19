import { useFetch } from "../hooks/useFetch";
import ArticleCard from "../components/ArticleCard";
import Hero from "../components/Hero";
import Message from "../components/Message";
import "./Home.css";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://css-tricks.com/wp-json/wp/v2/posts?per_page=12"
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

  return (
    <section className="home-section">
      <h2 className="home-articles-title">Post of the day</h2>
      <Hero />
      <section className="home-articles">
        <h2 className="home-articles-title">Posts</h2>
        <div className="grid">
          {data && data.map((post) => (
            <ArticleCard
              key={post.id}
              id={post.id}
              imageURL={post.featured_media_src_url}
              title={post.title.rendered}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
