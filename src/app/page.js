import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Services from "./components/Services/Services";
import CallNow from "./components/CallNow/CallNow.jsx";
import Location from "./components/Location/Location";
import WhyCustomers from "./components/WhyCustomers/WhyCustomers";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import FAQ from "./components/FAQ/FAQ";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="whychoose">
        <WhyChoose />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="call">
        <CallNow />
      </section>

      <section id="location">
        <Location />
      </section>

      <section id="why-customers">
        <WhyCustomers />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faqs">
        <FAQ />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <Footer />


    </>
  );
};
