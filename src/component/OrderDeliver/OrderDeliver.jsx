import React from "react";
import "./OrderDeliver.css";
import videoscreen from "../../assets/svg/videoscreen.svg";
import downloadicon from "../../assets/svg/downloadicon.svg";
import Dfb from "../../assets/svg/Dfb.svg";
import Dinstra from "../../assets/svg/Dinstra.svg";
import Dyoutube from "../../assets/svg/Dyoutube.svg";
import Dtwitter from "../../assets/svg/Dtwitter.svg";
import Dshare from "../../assets/svg/Dshare.svg";
const OrderDeliver = () => {
  return (
    <div className="container-fangram">
      <div className="orderCard">
        <div className="mainContent">
          <div className="orderLeft">
            <div className="bgorder">
              <img src={videoscreen} alt="missing" className="Dvdscreen" />
            </div>
          </div>
          <div className="orderRight">
            <h4>Sunny Leone</h4>
            <p className="scriptorder">Script</p>
            <p className="descriptionorder">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="downloadbtn">
              Download{" "}
              <img src={downloadicon} alt="missing" className="downloadicon" />
            </button>
            <div className="socialicons">
              <img src={Dfb} alt="missing" className="social_icons"/>
              <img src={Dinstra} alt="missing" className="social_icons"/>
              <img src={Dyoutube} alt="missing" className="social_icons"/>
              <img src={Dtwitter} alt="missing" className="social_icons"/>
              <img src={Dshare} alt="missing" className="social_icons"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliver;
