import Header from "./Common/Header";
import { sampleListings } from "./Data/Blog";
import { Link } from "react-router-dom";
import "./Blog.css";

export function Blog() {
  let data = sampleListings.map((value, i) => {
    return (
      <div key={i} className="blog-card">
        <h5>{value.title}</h5>
        <img src={value.image.url} alt="image" />
        <p>{value.description}</p>
        <Link to={`/blog/${i}`} className="view-btn">View</Link>
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="blog-container">
        <h1 className="blog-heading">Our Blog</h1>
        <div className="blog-grid">{data}</div>
      </div>
    </>
  );
}
