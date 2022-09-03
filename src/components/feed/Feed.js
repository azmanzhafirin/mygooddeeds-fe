import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Feedbanner from "../../assets/images/feed-placeholder.jpeg";

//Import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Feed.scss";

function Feed() {
  return (
    <div className="Feed">
      <div className="container">
        <div className="title-wrapper">
          <div className="title-h2">
            <h2>Ongoing Campaigns</h2>
          </div>
          <p className="title-content">
            You can help lots of people by donating little.
          </p>
        </div>

        <ul className="feed-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            //navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={4}
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
                  <div className="donate-wrapper">
                    <div className="donate-btn">Donate</div>
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
