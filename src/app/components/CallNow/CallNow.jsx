import "./CallNow.css";


const CallNow = () => {


    return (

        <section className="callnow-section" data-aos="fade-up" data-aos-duration="1000">
            <div className="callnow-container">

                {/* LEFT IMAGE */}
                <div className="callnow-image" data-aos="zoom-in" data-aos-duration="1000">
                    <img src="/Assets/map1.png" alt="map" />
                </div>

                {/* RIGHT BLUE CARD */}
                <div className="callnow-content" data-aos="zoom-in" data-aos-duration="1000">
                    <h2>Call an InstaPlumber <br />Now</h2>
                    <p>We have local plumbers near you—ready to assist 24/7, day or night.</p>

                    <button className="callnow-btn">CALL A PLUMBER NOW</button>
                </div>

            </div>
        </section>
    );

};



export default CallNow;