import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to News Buddy!</h1>
          <p>
            Your ultimate source for the latest news and updates. Whether it's breaking news,
            sports highlights, entertainment buzz, or in-depth analysis of global events,
            News Buddy keeps you informed.
          </p>
          <p>
            Explore our website to discover a wide range of topics curated just for you. From
            politics to technology, culture to science, we deliver the news that matters.
          </p>
          <a href="/news" className="btn btn-primary">
            Explore News
          </a>
        </div>
      </section>

      <section className="categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          <div className="category">
            <h3>Politics</h3>
            <p>Stay updated on the latest political developments around the world.</p>
          </div>
          <div className="category">
            <h3>Sports</h3>
            <p>Get the latest scores, highlights, and analysis from the world of sports.</p>
          </div>
          <div className="category">
            <h3>Entertainment</h3>
            <p>Discover the latest celebrity news, movies, and entertainment trends.</p>
          </div>
          <div className="category">
            <h3>Technology</h3>
            <p>Explore cutting-edge technology news and innovations shaping our future.</p>
          </div>
          <div className="category">
            <h3>Gaming</h3>
            <p>Stay updated on the latest gaming news, reviews, and trends.</p>
            </div>
            <div className="category">
            <h3>Weather</h3>
            <p>Explore weather forecasts, climate news, and environmental updates.</p>
            </div>

        </div>
      </section>

      <section className="about">
        <h2>About News Buddy</h2>
        <div className="about-content">
          <div className="about-item">
            <h3>Our Team</h3>
            <p>
              Meet our dedicated team of experienced journalists and editors who are passionate
              about delivering accurate and comprehensive news coverage.
            </p>
          </div>
          <div className="about-item">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide unbiased, timely, and reliable news that empowers our
              readers to make informed decisions and understand the world around them.
            </p>
            <p>
              We strive to uphold the highest standards of journalism ethics and integrity in
              every story we publish.
            </p>
          </div>
          <div className="about-item">
            <h3>Our Values</h3>
            <p>
              At News Buddy, we value transparency, accuracy, and diversity in our reporting.
              We are committed to serving our audience with news that is truthful, balanced,
              and impactful.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
