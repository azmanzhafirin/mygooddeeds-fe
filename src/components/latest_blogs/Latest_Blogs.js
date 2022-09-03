import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Feedbanner from "../../assets/images/feed-placeholder.jpeg";

//Import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Latest_Blogs.scss";

function Latest_Blogs() {
  return (
    <div className="latest_blogs">
      <div className="container">
        <div className="title-wrapper">
          <div className="title-h2">
            <h2>Our Recent Blogs</h2>
          </div>
          <p className="title-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <ul className="blogs-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            //navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={4}
          >
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="list">
                <div className="blog-banner">
                  <img src={Feedbanner} alt="blogs" />
                </div>
                <div className="blog-details">
                  <h6 className="blog-title">Dale Olsson Memorial Fund</h6>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default Latest_Blogs;
