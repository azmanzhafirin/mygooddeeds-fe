import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Feed.scss";
import Feedbanner from "../../assets/images/feed-placeholder.jpeg";

function Feed() {
  return (
    <div className="Feed">
      <div className="container">
        <div className="title-h2">
          <h2>Featured Topics</h2>
        </div>

        <ul className="feed-wrapper">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <li className="list">
                <div className="feed-banner">
                  <img src={Feedbanner} alt="feedbanner" />
                  <div className="t-donations">55</div>
                </div>
                <div className="feed-details">
                  <h6>Support the Bulla Family</h6>
                  <p className="desc">
                    Jake Bulla was involved in a severe motorcycle accident
                    recently and as a result, was flown to Royal Perth Hospital
                    and was admitted to the Intensive Care Unit.
                  </p>

                  <div className="donations-details">
                    <span className="t-raised">Rm 5,570 raised</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="feed-banner">
                  <img src={Feedbanner} alt="feedbanner" />
                  <div className="t-donations">12</div>
                </div>
                <div className="feed-details">
                  <h6>Dale Olsson Memorial Fund</h6>
                  <p className="desc">
                    Jake Bulla was involved in a severe motorcycle accident
                    recently and as a result, was flown to Royal Perth Hospital
                    and was admitted to the Intensive Care Unit.
                  </p>

                  <div className="donations-details">
                    <span className="t-raised">Rm 1,570 raised</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="feed-banner">
                  <img src={Feedbanner} alt="feedbanner" />
                  <div className="t-donations">4</div>
                </div>
                <div className="feed-details">
                  <h6>Nala Needs Surgery</h6>
                  <p className="desc">
                    Jake Bulla was involved in a severe motorcycle accident
                    recently and as a result, was flown to Royal Perth Hospital
                    and was admitted to the Intensive Care Unit.
                  </p>

                  <div className="donations-details">
                    <span className="t-raised">Rm 4,570 raised</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="feed-banner">
                  <img src={Feedbanner} alt="feedbanner" />
                  <div className="t-donations">17</div>
                </div>
                <div className="feed-details">
                  <h6>Raise money for Tails Chemotherapy Chemotherapy</h6>
                  <p className="desc">
                    Jake Bulla was involved in a severe motorcycle accident
                    recently and as a result, was flown to Royal Perth Hospital
                    and was admitted to the Intensive Care Unit.
                  </p>

                  <div className="donations-details">
                    <span className="t-raised">Rm 9,570 raised</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="feed-banner">
                  <img src={Feedbanner} alt="feedbanner" />
                  <div className="t-donations">35</div>
                </div>
                <div className="feed-details">
                  <h6>Support the Bulla Family</h6>
                  <p className="desc">
                    Jake Bulla was involved in a severe motorcycle accident
                    recently and as a result, was flown to Royal Perth Hospital
                    and was admitted to the Intensive Care Unit.
                  </p>

                  <div className="donations-details">
                    <span className="t-raised">Rm 8,5570 raised</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default Feed;
