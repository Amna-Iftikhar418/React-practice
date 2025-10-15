import Header from "./Common/Header";
import "./About.css"; 

export function About() {
  return (
    <>
      <Header />
      <section className="about">
        <div className="about-container">
          <h1>About Us</h1>
          <p className="about-intro">
            We are passionate developers building modern web applications with
            React, JavaScript, and the latest technologies. Our mission is to
            deliver high-quality software and share knowledge with the world.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To create impactful digital solutions that make life easier and
                businesses more successful.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                Deliver user-friendly, scalable, and innovative applications
                while continuously learning and growing as a team.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Values</h3>
              <p>
                Commitment, Innovation, and Collaboration are at the heart of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
