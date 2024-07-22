import React from "react";
import "./BookingDetail.css";
import user from "../../assets/svg/userimg.svg";
import line from "../../assets/svg/devideline.svg";
import copy from "../../assets/svg/copyicon.svg";
import RangeSlider from "./RangeSlider";
import AskQuestion from "../AskQuestion/AskQuestion";
const BookingDetail = () => {
  return (
    <div className="container-fangram">
      <div className="mainBookingCard">
        <h2>Booking details page</h2>
        <div className="detailcard">
          <div className="userProfile">
            <img src={user} alt="missing" />
          </div>
          <div className="username">
            <h4>Sunny Leone</h4>
            <div className="requestData">
              <h6 className="leftreq">Request For</h6>
              <h6 className="rightreq">Recorder Video</h6>
            </div>
            <div className="requestData">
              <h6 className="leftreq">Booking Date</h6>
              <h6 className="rightreq">19 Oct, 2023</h6>
            </div>
            <div className="requestData">
              <h6 className="leftreq">Script</h6>
            </div>
          
          </div>
          <div className="devideline">
            <img src={line} alt="" />
          </div>
          <div className="userorderid">
            <div className="requestData">
              <h6 className="leftreq">Order Id</h6>
              <h6 className="rightreq">630114</h6>
            </div>
            <div className="requestData">
              <h6 className="leftreq">Transaction Id</h6>
              <h6 className="rightreq" style={{display:'flex', alignItems:'center', gap:'6px'}}>Pay_12234561 <img src={copy} alt="missing" style={{cursor:'pointer'}}/></h6>
            </div>
          </div>
          <div className="devideline">
            <img src={line} alt="" />
          </div>
          <div className="userorderid">
            <div className="requestData">
              <h6 className="leftreq">Occasion</h6>
              <h6 className="rightreq">All The Best</h6>
            </div>
            <div className="requestData">
              <h6 className="leftreq">Booking For</h6>
              <h6 className="rightreq" >Danish Rehman</h6>
            </div>
          </div>
          <div className="detailDes">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
             <div className="SliderRange"> 
             <RangeSlider />
             </div>
            </div>
        </div>
      </div>
      <AskQuestion />
    </div>
  );
};

export default BookingDetail;
