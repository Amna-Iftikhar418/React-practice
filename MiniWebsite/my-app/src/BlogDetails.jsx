import { useParams, Link } from "react-router-dom";
import { sampleListings } from "./Data/Blog";
import Header from "./Common/Header";
import "./BlogDetails.css";

export function BlogDetails() {
  const { id } = useParams();
  const blog = sampleListings[id];

  if (!blog) {
    return (
      <>
        <Header />
        <div className="not-found">
          <h2>Blog not found</h2>
          <Link to="/blog" className="back-btn">Back to Blogs</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="blog-details">
        <h1 className="blog-title">{blog.title}</h1>
        <img src={blog.image.url} alt="blog" className="blog-image" />
        <p className="blog-description">{blog.description}</p>
        <Link to="/blog" className="back-btn">Back to Blogs</Link>
      </div>
    </>
  );
}
