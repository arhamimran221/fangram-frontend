import React from "react";
import celebrityImage from "../../assets/svg/OrderImg.svg";
import TickMark from "../../assets/svg/TickMark.svg";
import star from "../../assets/svg/Star.svg";
import profileBooking from "../../assets/svg/ProfileBooking.svg";
import bookingDivider from "../../assets/svg/DividerBooking.svg";
import precentage from "../../assets/svg/precentagebook.svg";
import InstaIcon from "../../assets/svg/InstaBooking.svg";
import plusIcon from "../../assets/svg/plus.svg";
import fangramBooking from "../../assets/svg/FangranBooking.svg";
import HDbooking from "../../assets/svg/HDbooking.svg";
import checkIcon from "../../assets/svg/checkBooking.svg";
import PhoneInput from "react-phone-number-input";
import moneyBack from "../../assets/svg/MoneyBack.svg"
import help from "../../assets/svg/HelpIcon.svg"
import secure from "../../assets/svg/Secure.svg"
import "./CelebrityScript.css"
import "react-phone-number-input/style.css";
const { useState, useEffect } = React;
const Confirm = () => {
  const [value, setValue] = React.useState();

  return (
    <div className="confirm-main">
      <div className="personilize-sec">
        <div className="personilzeheading">PERSONALIZED VIDEO FROM</div>
        <div className="responsive-maincard-order">
          <div className="celebrityImageOrder">
            <img src={celebrityImage} alt="" />
          </div>
          <div className="celebrity-description-order">
            <div className="celebrity-name-order">
              <h1>Sunny Leone</h1>
              <img src={TickMark} />
              <div className="celebrity-rating">
                <img src={star} />
                4.7(12)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="booking-details-main">
        <div className="booking-detail-sec">
          <div className="booking-detail-head">YOUR BOOKING DETAILS</div>

          <div className="celebrity-profile">
            <div className="celebrity-image-pro">
              <img src={profileBooking} alt="" />
            </div>
            <div className="cel-descript">
              <div className="cel-name">Sunny Leone</div>
              <div className="cel-summary">Summary</div>
              <div className="summary-des">
                Hi, nayan what's up? Hope you are doing great in this festive
                season of Diwali. It's me Sunny Leone wishing you a very happy &
                prosperous Diwali from monika. May, the occasion of Diwali light
                up new hopes and opportunities in your life and fulfill all your
                dreams & desires. Have a good day bye-bye.
              </div>
            </div>
          </div>
          <div className="border-booking-page"></div>
          <div className="booking-strip">
            <div className="strip-name">Diwali</div>
            <div className="strip-price">
              ₹10450 <span>₹11000</span>
            </div>
          </div>
          <div className="booking-strip">
            <div className="strip-name">
              <img src={precentage} alt="" />
              <span>₹550 </span>saved
            </div>
            <div className="strip-price" style={{color:"rgba(0, 129, 21, 1)"}}>Limited Offer</div>
          </div>
          <div className="border-booking">
            <img src={bookingDivider} alt="" />
          </div>
          <div className="eligible">You're eligible for a FREE gift!</div>
          <div className="dm-insta">
            <div className="left-insta">
              <div className="insta-icon">
                <img src={InstaIcon} alt="" />
              </div>
              <div className="insta-heading">
                DM On Instagram Get Unlocked
              <span> ₹0 <span style={{color:"rgba(126, 126, 126, 1)",textDecoration:"line-through"}}>₹1499</span> Free</span>{" "}
              </div>
            </div>
            <div className="right-insta">
              <div className="add-order">Want to add this to your order?</div>
              <div className="plus-icon">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-booking">
            <img src={bookingDivider} alt="" />
          </div>
          <div className="eligible">Level Up Your Surprise</div>
          <div className="remove-logo">
              <div className="fangram-icon">
                <img src={fangramBooking} alt="" />
              </div>
              <div className="fan-heading">
              <div className="fangram-heading">Remove the FanRang Logo <span>₹625</span></div>
              <div className="heading-des">
                Remove the logo and show off in your circle<span>Free</span>
              </div>
              </div>
          </div>
          <div className="remove-logo">
              <div className="fangram-icon">
                <img src={HDbooking} alt="" />
              </div>
              <div className="fan-heading">
              <div className="fangram-heading">Get Full Hd Videos <span>₹250</span></div>
              <div className="heading-des">
              Display this video on the big Screen<span style={{color:"rgba(0, 129, 21, 1)"}}>ADD</span>
              </div>
              </div>
          </div>
          <div className="border-booking">
            <img src={bookingDivider} alt="" />
          </div>
          <div className="eligible">OFFERS</div>
          <div className="check-booking">
              <div className="fangram-icon">
                <img src={checkIcon} alt="" />
              </div>
              <div className="coupenhead">
              <div className="coupen-heading">"SMILES" coupon applied <span>Remove</span></div>
              <div className="coupen-des">Save another ₹550 on this order <span >View All Offers</span></div>
              </div>
            </div>
          
          <div className="border-booking">
            <img src={bookingDivider} alt="" />
          </div>
          <div className="eligible">YOUR DETAILS</div>
          <div className="booking-input">
            <label htmlFor="">
              Billing number <sup>*</sup>
            </label>
            <PhoneInput
              international
              value={value}
              onChange={setValue}
              placeholder="Enter phone number"
              inputProps={{
                autoFocus: true,
              }}
              className="phone-booking"
              countrySelectProps={{}}
              
            />
          </div>
          <div className="booking-input">
            <label htmlFor="">
              Billing email id <sup>*</sup>
            </label>
            <input type="email" placeholder="Enter Your Email Address" className="input-billing"/>
          </div>
          <div className="reciept-send">
            *Your receipt & order updates will be sent here!
          </div>
          <div className="border-booking">
            <img src={bookingDivider} alt="" />
          </div>
          <div className="eligible">BILLING SUMMARY</div>
          <div className="personel-vd">
            <div className="left-personel">Personalized Video</div>
            <div className="left-personel">₹11000</div>
          </div>
          <div className="add-ones">
            <div className="left-add">
              <img src={precentage} alt="" />
              Add-ons
            </div>
            <div className="right-add">+₹2250</div>
          </div>
          <div className="add-ones">
            <div className="left-add">
              <img src={precentage} alt="" />
              Coupon Discount
            </div>
            <div className="right-add">-₹550</div>
          </div>
          <div className="border-total"></div>
          <div className="prime-account">
            Prime Amount<span>₹99</span>
          </div>
          <div className="border-total"></div>
          <div className="prime-account">
            Prime Discount<span>-₹1650</span>
          </div>
          <div className="border-total"></div>
          <div className="total-price">
            Total <span>₹11149</span>
          </div>
          <div className="secure-payment">
            <div className="secure-payments-des">
              Secure and fast payments via Card, UPI, Netbanking and more By
              continuing, you agree to our terms
            </div>
            <div className="proceed">
              <button>Proceed To Pay</button>
            </div>
          </div>

        </div>

          <div className="svg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="43"
            viewBox="0 0 335 43"
            fill="none"
          >
            <path
              d="M1.36878 41.4973L7.02309 36.1273C7.9188 35.2768 9.10859 34.8024 10.3458 34.8024C11.5831 34.8024 12.7729 35.2768 13.6686 36.1273L17.508 39.7583C18.4037 40.6088 19.5935 41.0833 20.8308 41.0833C22.068 41.0833 23.2578 40.6088 24.1535 39.7583L27.9789 36.1273C28.8769 35.2759 30.0691 34.8011 31.3087 34.8011C32.5483 34.8011 33.7404 35.2759 34.6384 36.1273L38.4638 39.7583C39.3595 40.6088 40.5493 41.0833 41.7866 41.0833C43.0238 41.0833 44.2136 40.6088 45.1094 39.7583L48.9347 36.1273C49.8328 35.2759 51.0249 34.8011 52.2645 34.8011C53.5041 34.8011 54.6962 35.2759 55.5942 36.1273L59.4196 39.7583C60.3153 40.6088 61.5052 41.0833 62.7424 41.0833C63.9797 41.0833 65.1695 40.6088 66.0652 39.7583L69.9045 36.1273C70.8002 35.2768 71.99 34.8024 73.2273 34.8024C74.4646 34.8024 75.6544 35.2768 76.5501 36.1273L80.3755 39.7583C81.2712 40.6088 82.461 41.0833 83.6982 41.0833C84.9355 41.0833 86.1253 40.6088 87.021 39.7583L90.8604 36.1273C91.7561 35.2768 92.9459 34.8024 94.1831 34.8024C95.4204 34.8024 96.6102 35.2768 97.5059 36.1273L101.331 39.7583C102.229 40.6097 103.421 41.0846 104.661 41.0846C105.901 41.0846 107.093 40.6097 107.991 39.7583L111.816 36.1273C112.712 35.2768 113.902 34.8024 115.139 34.8024C116.376 34.8024 117.566 35.2768 118.462 36.1273L122.301 39.7583C123.197 40.6088 124.387 41.0833 125.624 41.0833C126.861 41.0833 128.051 40.6088 128.947 39.7583L132.772 36.1273C133.668 35.2768 134.858 34.8024 136.095 34.8024C137.332 34.8024 138.522 35.2768 139.418 36.1273L143.257 39.7583C144.153 40.6088 145.342 41.0833 146.58 41.0833C147.817 41.0833 149.007 40.6088 149.902 39.7583L153.728 36.1273C154.626 35.2759 155.818 34.8011 157.058 34.8011C158.297 34.8011 159.489 35.2759 160.387 36.1273L164.213 39.7583C165.108 40.6088 166.298 41.0833 167.535 41.0833C168.773 41.0833 169.963 40.6088 170.858 39.7583L174.684 36.1273C175.582 35.2759 176.774 34.8011 178.013 34.8011C179.253 34.8011 180.445 35.2759 181.343 36.1273L185.169 39.7583C186.064 40.6088 187.254 41.0833 188.491 41.0833C189.729 41.0833 190.918 40.6088 191.814 39.7583L195.653 36.1273C196.549 35.2768 197.739 34.8024 198.976 34.8024C200.213 34.8024 201.403 35.2768 202.299 36.1273L206.124 39.7583C207.02 40.6088 208.21 41.0833 209.447 41.0833C210.684 41.0833 211.874 40.6088 212.77 39.7583L216.609 36.1273C217.505 35.2768 218.695 34.8024 219.932 34.8024C221.169 34.8024 222.359 35.2768 223.255 36.1273L227.08 39.7583C227.978 40.6097 229.17 41.0846 230.41 41.0846C231.65 41.0846 232.842 40.6097 233.74 39.7583L237.565 36.1273C238.461 35.2768 239.651 34.8024 240.888 34.8024C242.125 34.8024 243.315 35.2768 244.211 36.1273L248.05 39.7583C248.946 40.6088 250.135 41.0833 251.373 41.0833C252.61 41.0833 253.8 40.6088 254.696 39.7583L258.521 36.1273C259.417 35.2768 260.606 34.8024 261.844 34.8024C263.081 34.8024 264.271 35.2768 265.166 36.1273L269.006 39.7583C269.902 40.6088 271.091 41.0833 272.329 41.0833C273.566 41.0833 274.756 40.6088 275.651 39.7583L279.477 36.1273C280.375 35.2759 281.567 34.8011 282.806 34.8011C284.046 34.8011 285.238 35.2759 286.136 36.1273L289.962 39.7583C290.857 40.6088 292.047 41.0833 293.284 41.0833C294.522 41.0833 295.711 40.6088 296.607 39.7583L300.433 36.1273C301.331 35.2759 302.523 34.8011 303.762 34.8011C305.002 34.8011 306.194 35.2759 307.092 36.1273L310.917 39.7583C311.813 40.6088 313.003 41.0833 314.24 41.0833C315.477 41.0833 316.667 40.6088 317.563 39.7583L321.402 36.1273C322.298 35.2768 323.488 34.8024 324.725 34.8024C325.962 34.8024 327.152 35.2768 328.048 36.1273L333.632 41.4973C334.082 41.9232 334.443 42.4339 334.693 42.9997H334.973V-455.042H-0.0273438V42.9997H0.251877C0.518829 42.4291 0.898732 41.918 1.36878 41.4973Z"
              fill="#FFFDFC"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="43"
            viewBox="0 0 335 43"
            fill="none"
          >
            <path
              d="M1.36878 41.4973L7.02309 36.1273C7.9188 35.2768 9.10859 34.8024 10.3458 34.8024C11.5831 34.8024 12.7729 35.2768 13.6686 36.1273L17.508 39.7583C18.4037 40.6088 19.5935 41.0833 20.8308 41.0833C22.068 41.0833 23.2578 40.6088 24.1535 39.7583L27.9789 36.1273C28.8769 35.2759 30.0691 34.8011 31.3087 34.8011C32.5483 34.8011 33.7404 35.2759 34.6384 36.1273L38.4638 39.7583C39.3595 40.6088 40.5493 41.0833 41.7866 41.0833C43.0238 41.0833 44.2136 40.6088 45.1094 39.7583L48.9347 36.1273C49.8328 35.2759 51.0249 34.8011 52.2645 34.8011C53.5041 34.8011 54.6962 35.2759 55.5942 36.1273L59.4196 39.7583C60.3153 40.6088 61.5052 41.0833 62.7424 41.0833C63.9797 41.0833 65.1695 40.6088 66.0652 39.7583L69.9045 36.1273C70.8002 35.2768 71.99 34.8024 73.2273 34.8024C74.4646 34.8024 75.6544 35.2768 76.5501 36.1273L80.3755 39.7583C81.2712 40.6088 82.461 41.0833 83.6982 41.0833C84.9355 41.0833 86.1253 40.6088 87.021 39.7583L90.8604 36.1273C91.7561 35.2768 92.9459 34.8024 94.1831 34.8024C95.4204 34.8024 96.6102 35.2768 97.5059 36.1273L101.331 39.7583C102.229 40.6097 103.421 41.0846 104.661 41.0846C105.901 41.0846 107.093 40.6097 107.991 39.7583L111.816 36.1273C112.712 35.2768 113.902 34.8024 115.139 34.8024C116.376 34.8024 117.566 35.2768 118.462 36.1273L122.301 39.7583C123.197 40.6088 124.387 41.0833 125.624 41.0833C126.861 41.0833 128.051 40.6088 128.947 39.7583L132.772 36.1273C133.668 35.2768 134.858 34.8024 136.095 34.8024C137.332 34.8024 138.522 35.2768 139.418 36.1273L143.257 39.7583C144.153 40.6088 145.342 41.0833 146.58 41.0833C147.817 41.0833 149.007 40.6088 149.902 39.7583L153.728 36.1273C154.626 35.2759 155.818 34.8011 157.058 34.8011C158.297 34.8011 159.489 35.2759 160.387 36.1273L164.213 39.7583C165.108 40.6088 166.298 41.0833 167.535 41.0833C168.773 41.0833 169.963 40.6088 170.858 39.7583L174.684 36.1273C175.582 35.2759 176.774 34.8011 178.013 34.8011C179.253 34.8011 180.445 35.2759 181.343 36.1273L185.169 39.7583C186.064 40.6088 187.254 41.0833 188.491 41.0833C189.729 41.0833 190.918 40.6088 191.814 39.7583L195.653 36.1273C196.549 35.2768 197.739 34.8024 198.976 34.8024C200.213 34.8024 201.403 35.2768 202.299 36.1273L206.124 39.7583C207.02 40.6088 208.21 41.0833 209.447 41.0833C210.684 41.0833 211.874 40.6088 212.77 39.7583L216.609 36.1273C217.505 35.2768 218.695 34.8024 219.932 34.8024C221.169 34.8024 222.359 35.2768 223.255 36.1273L227.08 39.7583C227.978 40.6097 229.17 41.0846 230.41 41.0846C231.65 41.0846 232.842 40.6097 233.74 39.7583L237.565 36.1273C238.461 35.2768 239.651 34.8024 240.888 34.8024C242.125 34.8024 243.315 35.2768 244.211 36.1273L248.05 39.7583C248.946 40.6088 250.135 41.0833 251.373 41.0833C252.61 41.0833 253.8 40.6088 254.696 39.7583L258.521 36.1273C259.417 35.2768 260.606 34.8024 261.844 34.8024C263.081 34.8024 264.271 35.2768 265.166 36.1273L269.006 39.7583C269.902 40.6088 271.091 41.0833 272.329 41.0833C273.566 41.0833 274.756 40.6088 275.651 39.7583L279.477 36.1273C280.375 35.2759 281.567 34.8011 282.806 34.8011C284.046 34.8011 285.238 35.2759 286.136 36.1273L289.962 39.7583C290.857 40.6088 292.047 41.0833 293.284 41.0833C294.522 41.0833 295.711 40.6088 296.607 39.7583L300.433 36.1273C301.331 35.2759 302.523 34.8011 303.762 34.8011C305.002 34.8011 306.194 35.2759 307.092 36.1273L310.917 39.7583C311.813 40.6088 313.003 41.0833 314.24 41.0833C315.477 41.0833 316.667 40.6088 317.563 39.7583L321.402 36.1273C322.298 35.2768 323.488 34.8024 324.725 34.8024C325.962 34.8024 327.152 35.2768 328.048 36.1273L333.632 41.4973C334.082 41.9232 334.443 42.4339 334.693 42.9997H334.973V-455.042H-0.0273438V42.9997H0.251877C0.518829 42.4291 0.898732 41.918 1.36878 41.4973Z"
              fill="#FFFDFC"
            />
          </svg> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="43"
            viewBox="0 0 335 43"
            fill="none"
          >
            <path
              d="M1.36878 41.4973L7.02309 36.1273C7.9188 35.2768 9.10859 34.8024 10.3458 34.8024C11.5831 34.8024 12.7729 35.2768 13.6686 36.1273L17.508 39.7583C18.4037 40.6088 19.5935 41.0833 20.8308 41.0833C22.068 41.0833 23.2578 40.6088 24.1535 39.7583L27.9789 36.1273C28.8769 35.2759 30.0691 34.8011 31.3087 34.8011C32.5483 34.8011 33.7404 35.2759 34.6384 36.1273L38.4638 39.7583C39.3595 40.6088 40.5493 41.0833 41.7866 41.0833C43.0238 41.0833 44.2136 40.6088 45.1094 39.7583L48.9347 36.1273C49.8328 35.2759 51.0249 34.8011 52.2645 34.8011C53.5041 34.8011 54.6962 35.2759 55.5942 36.1273L59.4196 39.7583C60.3153 40.6088 61.5052 41.0833 62.7424 41.0833C63.9797 41.0833 65.1695 40.6088 66.0652 39.7583L69.9045 36.1273C70.8002 35.2768 71.99 34.8024 73.2273 34.8024C74.4646 34.8024 75.6544 35.2768 76.5501 36.1273L80.3755 39.7583C81.2712 40.6088 82.461 41.0833 83.6982 41.0833C84.9355 41.0833 86.1253 40.6088 87.021 39.7583L90.8604 36.1273C91.7561 35.2768 92.9459 34.8024 94.1831 34.8024C95.4204 34.8024 96.6102 35.2768 97.5059 36.1273L101.331 39.7583C102.229 40.6097 103.421 41.0846 104.661 41.0846C105.901 41.0846 107.093 40.6097 107.991 39.7583L111.816 36.1273C112.712 35.2768 113.902 34.8024 115.139 34.8024C116.376 34.8024 117.566 35.2768 118.462 36.1273L122.301 39.7583C123.197 40.6088 124.387 41.0833 125.624 41.0833C126.861 41.0833 128.051 40.6088 128.947 39.7583L132.772 36.1273C133.668 35.2768 134.858 34.8024 136.095 34.8024C137.332 34.8024 138.522 35.2768 139.418 36.1273L143.257 39.7583C144.153 40.6088 145.342 41.0833 146.58 41.0833C147.817 41.0833 149.007 40.6088 149.902 39.7583L153.728 36.1273C154.626 35.2759 155.818 34.8011 157.058 34.8011C158.297 34.8011 159.489 35.2759 160.387 36.1273L164.213 39.7583C165.108 40.6088 166.298 41.0833 167.535 41.0833C168.773 41.0833 169.963 40.6088 170.858 39.7583L174.684 36.1273C175.582 35.2759 176.774 34.8011 178.013 34.8011C179.253 34.8011 180.445 35.2759 181.343 36.1273L185.169 39.7583C186.064 40.6088 187.254 41.0833 188.491 41.0833C189.729 41.0833 190.918 40.6088 191.814 39.7583L195.653 36.1273C196.549 35.2768 197.739 34.8024 198.976 34.8024C200.213 34.8024 201.403 35.2768 202.299 36.1273L206.124 39.7583C207.02 40.6088 208.21 41.0833 209.447 41.0833C210.684 41.0833 211.874 40.6088 212.77 39.7583L216.609 36.1273C217.505 35.2768 218.695 34.8024 219.932 34.8024C221.169 34.8024 222.359 35.2768 223.255 36.1273L227.08 39.7583C227.978 40.6097 229.17 41.0846 230.41 41.0846C231.65 41.0846 232.842 40.6097 233.74 39.7583L237.565 36.1273C238.461 35.2768 239.651 34.8024 240.888 34.8024C242.125 34.8024 243.315 35.2768 244.211 36.1273L248.05 39.7583C248.946 40.6088 250.135 41.0833 251.373 41.0833C252.61 41.0833 253.8 40.6088 254.696 39.7583L258.521 36.1273C259.417 35.2768 260.606 34.8024 261.844 34.8024C263.081 34.8024 264.271 35.2768 265.166 36.1273L269.006 39.7583C269.902 40.6088 271.091 41.0833 272.329 41.0833C273.566 41.0833 274.756 40.6088 275.651 39.7583L279.477 36.1273C280.375 35.2759 281.567 34.8011 282.806 34.8011C284.046 34.8011 285.238 35.2759 286.136 36.1273L289.962 39.7583C290.857 40.6088 292.047 41.0833 293.284 41.0833C294.522 41.0833 295.711 40.6088 296.607 39.7583L300.433 36.1273C301.331 35.2759 302.523 34.8011 303.762 34.8011C305.002 34.8011 306.194 35.2759 307.092 36.1273L310.917 39.7583C311.813 40.6088 313.003 41.0833 314.24 41.0833C315.477 41.0833 316.667 40.6088 317.563 39.7583L321.402 36.1273C322.298 35.2768 323.488 34.8024 324.725 34.8024C325.962 34.8024 327.152 35.2768 328.048 36.1273L333.632 41.4973C334.082 41.9232 334.443 42.4339 334.693 42.9997H334.973V-455.042H-0.0273438V42.9997H0.251877C0.518829 42.4291 0.898732 41.918 1.36878 41.4973Z"
              fill="#FFFDFC"
            />
          </svg>

          </div>
          <div className="money-back">
          <div className="money-back-icon">
            <img src={moneyBack} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Money-back Guarantee!</div>
            <div className="moneydes">If for some reason, your request could not be completed, we’ll refund your money within 3-5 working days.</div>
          </div>
        </div>
        <div className="money-back">
          <div className="money-back-icon">
            <img src={help} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Need help?</div>
            <div className="moneydes">Reach out to us on WhatsApp or Email for queries. Our support team shall get back to you within 2-3 working days.</div>
          </div>
        </div>
        <div className="money-back">
          <div className="money-back-icon">
            <img src={secure} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Secured & safe payments</div>
            <div className="moneydes">Every transaction is 100% safe. Your payment details are encrypted during the transaction to safeguard your data.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
