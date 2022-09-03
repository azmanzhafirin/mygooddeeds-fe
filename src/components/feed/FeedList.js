import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Feedbanner from "../../assets/images/feed-placeholder.jpeg";
import Feed from "../feed/Feed";

//Import styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./FeedList.scss";


let data = [{
  id : 1,
  title: "Support the Bulla Family",
  description: "Jake Bulla was involved in a severe motorcycle accident recently and as a result, was flown to Royal Perth Hospital and was admitted to the Intensive Care Unit.",
  totalDonation : 5570
},
{
  id : 2,
  title: "Nala Needs Surgery",
  description: "Jake Bulla was involved in a severe motorcycle accident recently and as a result, was flown to Royal Perth Hospital and was admitted to the Intensive Care Unit.",
  totalDonation : 8700
},
{
  id : 3,
  title: "Support the Bulla Family",
  description: "Jake Bulla was involved in a severe motorcycle accident recently and as a result, was flown to Royal Perth Hospital and was admitted to the Intensive Care Unit.",
  totalDonation : 6400
},
{
  id : 4,
  title: "Support the Bulla Family",
  description: "Jake Bulla was involved in a severe motorcycle accident recently and as a result, was flown to Royal Perth Hospital and was admitted to the Intensive Care Unit.",
  totalDonation : 9800
},
{
  id : 5,
  title: "Support the Bulla Family",
  description: "Jake Bulla was involved in a severe motorcycle accident recently and as a result, was flown to Royal Perth Hospital and was admitted to the Intensive Care Unit.",
  totalDonation : 10700
}];

function FeedList() {
  console.log(data)
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
            spaceBetween={30}
            slidesPerView={4}
          >
            
              {data.map(({id, title, description, totalDonation}) =>(
                <SwiperSlide>
                  <Feed key={id} title={title} description={description} totalDonation={totalDonation} />
                </SwiperSlide>
              ))}
            
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default FeedList;
