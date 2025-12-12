"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="ts-section" data-aos="zoom-in">
      {/* HEADER */}
  <div className="ts-container">
      <div className="ts-header">
        <div className="ts-badge">TESTIMONIALS</div>

        <div className="ts-title-row">
          <h2>What Our Customers Say</h2>

          <div className="ts-nav-buttons">
            <button className="ts-prev-btn">❮</button>
                        <button className="ts-next-btn">❯</button>

          </div>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
       modules={[Navigation, Autoplay]}
  navigation={{
    nextEl: ".ts-next-btn",
    prevEl: ".ts-prev-btn",
  }}
  spaceBetween={30}
  slidesPerView={2}
  breakpoints={{
    320: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
  }}
  loop={true}
  observer={true}
  observeParents={true}
    autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={3000}

  onSwiper={(swiper) => {
    setTimeout(() => swiper.update(), 100);
  }}
  className="ts-swiper"
>
        {/* CARD 1 */}
        <SwiperSlide>
          <div className="ts-card">
            <div className="trap">
              <div className="blue-trapezium"></div>
              <div className="blue-trapezium"></div>
            </div>

            <p className="ts-text">
              Was here in under 15 minutes to fix my leak at midnight!
            </p>

            <div className="ts-user">
              <div>
                <h4>Sarah, Shoreditch</h4>
                <span>CLIENT, USA</span>
              </div>
              <img src="/Assets/client 1.png" className="ts-avatar" />
            </div>
          </div>
        </SwiperSlide>

        {/* CARD 2 */}
        <SwiperSlide>
          <div className="ts-card">
            <div className="trap">
              <div className="blue-trapezium"></div>
              <div className="blue-trapezium"></div>
            </div>

            <p className="ts-text">
              "I booked online and my boiler was repaired in an hour.
              Impressive response time!"
            </p>

            <div className="ts-user">
              <div>
                <h4>Arnold Wilson</h4>
                <span>CLIENT, USA</span>
              </div>
              <img src="/Assets/client 2.png" className="ts-avatar" />
            </div>
          </div>
        </SwiperSlide>

                {/* CARD 1 */}
        <SwiperSlide>
          <div className="ts-card">
            <div className="trap">
              <div className="blue-trapezium"></div>
              <div className="blue-trapezium"></div>
            </div>

            <p className="ts-text">
              Was here in under 15 minutes to fix my leak at midnight!
            </p>

            <div className="ts-user">
              <div>
                <h4>Sarah, Shoreditch</h4>
                <span>CLIENT, USA</span>
              </div>
              <img src="/Assets/client 1.png" className="ts-avatar" />
            </div>
          </div>
        </SwiperSlide>

        {/* CARD 2 */}
        <SwiperSlide>
          <div className="ts-card">
            <div className="trap">
              <div className="blue-trapezium"></div>
              <div className="blue-trapezium"></div>
            </div>

            <p className="ts-text">
              "I booked online and my boiler was repaired in an hour.
              Impressive response time!"
            </p>

            <div className="ts-user">
              <div>
                <h4>Arnold Wilson</h4>
                <span>CLIENT, USA</span>
              </div>
              <img src="/Assets/client 2.png" className="ts-avatar" />
            </div>
          </div>
        </SwiperSlide>



      </Swiper>

      



      {/* BOTTOM LOGOS */}
      <div className="ts-divider"></div>

      <div className="ts-logos" data-aos="zoom-in">
        <img src="/Assets/image 4.png" />
        <img src="/Assets/image3.png" />
        <img src="/Assets/image 2.png" />
        <img src="/Assets/image 1.png" />
        <img src="/Assets/image3.png" />
      </div>

      </div>
    </section>
  );
};

export default Testimonials;
