import Header from "./Common/Header";
import "./Home.css";

export function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="home-content">
          <h1>Welcome to My Website</h1>
          <p>
            This is a demo homepage built with React. Explore our blog, learn
            more about us, or get in touch!
          </p>
         
        </div>
      </section>
    </>
  );
}
