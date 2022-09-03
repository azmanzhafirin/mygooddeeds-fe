import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";

//Import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Count.scss";

function Count() {
  return (
    <div className="count">
      <div className="container">
        <ul className="count-wrapper">
          <Swiper spaceBetween={30} slidesPerView={4}>
            <SwiperSlide>
              <li className="list">
                <h3>
                  <CountUp end={120} duration={4} />+
                </h3>
                <p>Project Done</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <h3>
                  <CountUp end={4300} duration={4} />+
                </h3>
                <p>Worldwide Volunteer</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <h3>
                  <CountUp end={16} duration={4} />+
                </h3>
                <p>Active Event</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <h3>
                  $<CountUp end={54} duration={4} />M
                </h3>
                <p>Charity in last year</p>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default Count;
