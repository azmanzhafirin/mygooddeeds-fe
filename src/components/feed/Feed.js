import React from "react";
import Feedbanner from "../../assets/images/feed-placeholder.jpeg";


function Feed(props){
    return(
    <li className="list">
    <div className="feed-banner">
      <img src={Feedbanner} alt="feedbanner" />
      <div className="t-donations">55</div>
    </div>
    <div className="feed-details">
      <h6>{props.title}</h6>
      <p className="desc">
        {props.description}
      </p>

      <div className="donations-details">
        <span className="t-raised">RM {props.totalDonation.toLocaleString()}</span>
      </div>
      <div className="donate-wrapper">
        <div className="donate-btn">Donate</div>
      </div>
    </div>
  </li>
  );
}

export default Feed;