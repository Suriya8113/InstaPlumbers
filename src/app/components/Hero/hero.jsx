import "./hero.css";

const Hero = () => {




    return (

        <section className="hero" >
            <div className="hero-left" data-aos="fade-left">
                <h1 className="hero-title" >
                    Plumbing Emergency?
                    <br />
                    <span>Get Help in Minutes.</span>
                </h1>

                <p className="hero-subtext" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
                    Book a trusted, local plumber near you—available 24/7 with instant
                    response and up-front pricing. No delays. No surprises.
                </p>

                <div className="hero-buttons" >
                    <button className="btn-outline" >Get Instant Help</button>
                    <button className="btn-primary" ><a href="#call">Book a Plumber Now</a></button>
                </div>
            </div>

            <div className="hero-right" data-aos="fade-up">
                <img src="/Assets/hero.png" alt="Plumber working" />
            </div>
        </section>                                                      


    );


};

export default Hero;