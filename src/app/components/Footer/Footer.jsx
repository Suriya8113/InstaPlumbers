import "./Footer.css";


const Footer = () =>{

    return(

        <section className="footer-section" data-aos="fade-in">

  <div className="footer-container">

    {/* LEFT LOGO BLOCK */}
    <div className="footer-left">
      <img src="/Assets/logo2.svg" className="footer-logo" />

      <p className="footer-info">
        Created with ❤ in London <br />
        Registered in England & Wales <br />
        Company No. 999888577 <br />
        ICO Registration No. A88976543 <br />
        ISO27001 Compliant
      </p>

      <div className="footer-socials">
        <img src="/Assets/fb.svg" alt="fb" />
        <img src="/Assets/youtube.svg" alt="yt" />
        <img src="/Assets/x.svg" alt="x" />
      </div>

      </div>


    {/* CENTER CTA BLOCK */}
    <div className="footer-center-container">
    <div className="footer-cta">
        <div className="footer-cta-top">
      <h2>Need a Plumber Right Now?</h2>
      <p>
        We've got professionals on-call 24/7 across London. Get fast,
        affordable plumbing help today.
      </p>
            <div className="footer-cta-buttons">
        <button className="footer-find-btn">
          <img src="/Assets/loacaton.svg" className="icon" />
          Find a Plumber Near Me
        </button>

        <button className="footer-call-btn">
          <img src="/Assets/call.svg" className="icon" />
          0800-123-4567
        </button>
      </div>
      </div>




    </div>

          <hr className="footer-line" />

    {/* RIGHT LINKS */}
    <div className="footer-links">

      <div className="footer-col">
        <h4>Useful Link</h4>
        <a href="#home">Home</a>
<a href="#how-it-works">How It Works</a>
<a href="#services">Services</a>
<a href="#pricing">Pricing</a>
<a href="#faqs">FAQs</a>
<a href="#contact">Contact</a>

      </div>

      <div className="footer-col">
        <h4>Legal Links</h4>
        <a>Privacy & Cookie Policy</a>
        <a>Terms & Conditions</a>
        <a>Service Terms & Conditions</a>
        <a>Complaints Policy</a>
        <a>Other Policy</a>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <a>334 Stamford Street</a>
        <a>London, SE1 9NQ, UK</a>
      </div>

    </div>
  </div>


  </div>

   <hr className="footer-line" />
    <p className="footer-copy">
    © MyCompany Name Ltd. All Rights Reserved.
  </p>

</section>


    );

};

export default Footer;