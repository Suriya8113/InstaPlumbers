import "./Services.css";


const Services = () => {

    return (



      <section className="services" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="services-title">Our Core Services</h2>

      <div className="services-grid">
    
        <div className="service-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
          <img src="/Assets/Plumbing.png" alt="Plumbing" className="service-banner" />

          <div className="service-content">
            <div className="service-tag">
              <img src="/Assets/Plumbing1.svg" alt="img" />
            </div>

            <h3 className="service-title">Plumbing</h3>

            <p className="service-desc">
              Fixing everything from dripping taps to major pipe bursts and blocked toilets—fast and reliable.
            </p>

            <a className="service-link">LEARN MORE</a>
          </div>
        </div>

        <div className="service-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <img src="/Assets/Drainage.png" alt="Drainage" className="service-banner" />

          <div className="service-content">
            <div className="service-tag">
              <img src="/Assets/Drainage2.svg" alt="img" />
            </div>

            <h3 className="service-title">Drainage</h3>

            <p className="service-desc">
              We clear blocked drains, overflowing systems, and bad smells with expert care and modern tools.
            </p>

            <a className="service-link">LEARN MORE</a>
          </div>
        </div>

        <div className="service-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
          <img src="/Assets/Heating.png" alt="Heating" className="service-banner" />

          <div className="service-content">
            <div className="service-tag">
              <img src="/Assets/Heating3.svg" alt="img" />
            </div>

            <h3 className="service-title">Heating</h3>

            <p className="service-desc">
              Expert repairs and installations for radiators, boilers, and central heating systems to keep your home warm.
            </p>

            <a className="service-link">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>


    );

};

export default Services;