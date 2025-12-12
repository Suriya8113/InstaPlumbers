import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="whychoose">

      <div className="why-left" >
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Why Choose <br /> InstaPlumbers?
        </h1>

        <button className="learnmore-btn" data-aos="fade-up" data-aos-duration="1000">Learn More</button>
      </div>




      <div className="why-right" >

        <div className="item" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/Assets/5yr-exp.svg" alt="5yr-Experience" />
          <p>Min. 5 Years<br />Experience</p>
        </div>

        <div className="item" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/Assets/Vetted & Verified.svg" alt="Vetted & Verified" />
          <p>Vetted &<br />Verified</p>
        </div>

        <div className="item" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/Assets/Fully  Insured.svg" alt="Fully Insured" />
          <p>Fully<br />Insured</p>
        </div>

      </div>

    </section>


  );
};

export default WhyChoose;
