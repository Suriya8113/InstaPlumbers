import "./Location.css";

const Location = () =>{

    return(

<section className="expand-section">
      <div className="expand-container" data-aos="fade-up" data-aos-duration="1000">

        {/* LEFT MAP */}
        <div className="expand-map" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/Assets/map2.png" alt="London Map" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="expand-content" data-aos="zoom-in" data-aos-duration="1000"> 

          <h2>Expanding Across London<br />&amp; Essex</h2>

          <p>
            We're growing fast—now serving all major boroughs across
            London and Essex with trusted, on-call plumbers ready to help 24/7.
          </p>

          {/* ACCORDION SECTION */}
          <div className="expand-list">

            {/* MAIN AREA */}
            <details >
              <summary>Central & North London</summary>

              <div className="checkbox-grid">
                <label><input type="checkbox" defaultChecked /> Camden</label>
                <label><input type="checkbox" defaultChecked /> Islington</label>
                <label><input type="checkbox" defaultChecked /> Westminster</label>
                <label><input type="checkbox" defaultChecked /> Haringey</label>
                <label><input type="checkbox" defaultChecked /> Barnet</label>
                <label><input type="checkbox" defaultChecked /> Enfield</label>
                <label><input type="checkbox" defaultChecked /> Hackney</label>
                <label><input type="checkbox" defaultChecked /> Hammersmith</label>
              </div>
            </details>

            <details>
              <summary>East London</summary>
            </details>

            <details>
              <summary>South London</summary>
            </details>

            <details>
              <summary>West London</summary>
            </details>

          </div>
        </div>

      </div>
    </section>
    );
};



export default Location;


