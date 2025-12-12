import "./HowItWorks.css";


const HowItWorks = () => {


    return (

        <section className="features" data-aos="fade-up" data-aos-duration="1000">
            <div className="container-text">
                <h5>HOW  IT WORKS </h5>
            </div>
            <div className="container">

                <h2 className="title">
                    We're like Uber — but for plumbers.<br />
                    Simple, fast, and reliable.
                </h2>


                <div className="features-grid">
                    <div className="feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
                        <img src="/Assets/1.svg" alt="Select Your Issue" />
                        <h3>Select Your Issue</h3>
                        <p>Choose the problem: Drains, leaks, faucets, or emergencies.</p>
                    </div>


                    <div className="feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
                        <img src="/Assets/2.svg" alt="  View Upfront Pricing" />
                        <h3>View Upfront Pricing</h3>
                        <p>No hidden fees. Transparent pricing with no surprises.</p>
                    </div>


                    <div className="feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
                        <img src="/Assets/3.svg" alt="Book Instantly" />
                        <h3>Book Instantly</h3>
                        <p>Get matched instantly with a certified plumber, anytime.</p>
                    </div>


                    <div className="feature-item" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">
                        <img src="/Assets/4.svg" alt="Track in Real-Time" />
                        <h3>Track in Real-Time</h3>
                        <p>See your plumber's live location and ETA directly.</p>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default HowItWorks;