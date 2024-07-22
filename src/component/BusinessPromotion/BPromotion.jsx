import React from 'react'
import NotActive from "../../assets/svg/NotActive.svg";
import Active from "../../assets/svg/Active.svg";
import sliderimg from "../../assets/svg/sliderimg.svg"
import banner from "../../assets/images/BannerImge.png"
import "./BPromotion.css"
const BPromotion = () => {
  return (
    <div className='bpromotion-main'>
        <img src={banner} alt="" />
        <div className="banner-promotion">
         <div className="promote-business">
            <div className="promote-heading">
            Promote your business through <span>celebrity</span>
            </div>
            <div className="promote-des">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</div>
            <div className="fill-form-btn">
            Fill The Form
            </div>
         </div>
         <div className="promote-slider">
          <img src={sliderimg} alt="" />
         </div>
        </div>
        <div className="brands-love-heading">
            <div className="love-heading">Brands which love us</div>
            <div className="love-paginations">
            <div className="pagintions">
              <div className="activeArrow">
                <img src={NotActive} alt="" />
              </div>
              <div className="notactiveArrow">
                <img src={Active} alt="" />
              </div>
            </div>
            </div>
        </div>
      <div className="form-b-promotion">

      </div>
    </div>
  )
}

export default BPromotion
