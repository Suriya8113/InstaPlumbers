import "./WhyCustomers.css";

const WhyCustomers = () => {
  return (
    <div className="wc-container">
      <div className="wc-left-section" data-aos="fade-left">
        <div className="wc-plumber-image">
          <img src="/Assets/Our experience.png" alt="Our Experience" />
        </div>
      </div>

      <div className="wc-right-section" data-aos="fade-up">
        <span className="wc-tag">OUR EXPERIENCE</span>

        <h1 className="wc-main-heading">Why Customers Love InstaPlumbers</h1>

        <p className="wc-subheading">
          We're built around speed, transparency, and trust—here's why thousands
          of customers choose us.
        </p>

        <div className="wc-features">
          <div className="wc-feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="wc-icon-wrapper">
              <img src="/Assets/Available 247.svg" alt="" />
            </div>

            <div className="wc-feature-content">
              <h3>Available 24/7</h3>
              <p>Plumbing emergencies don't wait, and neither do we.</p>
            </div>
          </div>

          <div className="wc-feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="wc-icon-wrapper">
              <img src="/Assets/Up-Front, Transparent Pricing.svg" alt="" />
            </div>

            <div className="wc-feature-content">
              <h3>Up Front, Transparent Pricing</h3>
              <p>No guesswork. No hidden fees.</p>
            </div>
          </div>

          <div className="wc-feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="wc-icon-wrapper">
              <img src="/Assets/Immediate Response.svg" alt="" />
            </div>

            <div className="wc-feature-content">
              <h3>Immediate Response</h3>
              <p>
                We respond instantly. Book in seconds, get matched with a plumber
                fast.
              </p>
            </div>
          </div>
        </div>

        <button className="wc-cta-button" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Book Your Plumber Now</button>
      </div>
    </div>
  );
};

export default WhyCustomers;
