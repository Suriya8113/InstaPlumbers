import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-container" data-aos="fade-in">
      <div className="blog-box">
        <div className="blog-badge">
          <span>RECENT BLOG</span>
        </div>
        <div className="blog-header">
          <h2 className="blog-title">From the InstaPlumbers Blog</h2>
          <button className="view-btn">VIEW ALL POST</button>
        </div>

        <div className="blog-list">

          {/* CARD 1 */}
          <div className="blog-card" data-aos="zoom-in">
            <img src="/Assets/Top 5 Signs You Need a Plumber –  Before It’s Too Late.png" alt="blog" className="blog-img" />

            <span className="blog-date">16 OCT 2024</span>

            <h3 className="blog-card-title">
              Top 5 Signs You Need a Plumber – Before It's Too Late
            </h3>

            <p className="blog-meta">
              PLUMBER / ANAIS EMMERICH
            </p>
          </div>

          {/* CARD 2 */}
          <div className="blog-card" data-aos="zoom-in">
            <img src="/Assets/Boiler Not Working_ Try These  Quick Fixes First.png" alt="blog" className="blog-img" />

            <span className="blog-date">16 OCT 2024</span>

            <h3 className="blog-card-title">
              Boiler Not Working? Try These Quick Fixes First
            </h3>

            <p className="blog-meta">
              SPECIAL REPAIRS / ANAIS EMMERICH
            </p>
          </div>

          {/* CARD 3 */}
          <div className="blog-card" data-aos="zoom-in">
            <img src="/Assets/How to Unblock a Drain – Safely and  Effectively.png" alt="blog" className="blog-img" />

            <span className="blog-date">16 OCT 2024</span>

            <h3 className="blog-card-title">
              How to Unblock a Drain – Safely and Effectively
            </h3>

            <p className="blog-meta">
              HANDYMAN / MARC RATKE
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Blog;
