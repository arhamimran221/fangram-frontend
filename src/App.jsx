import React from "react";

import MyAccount from "./component/MyAccount/MyAccount";
import CelebrityOrder from "./component/CelebrityOrder/CelebrityOrder";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import CelebrityScript from "./component/CelebrityScript/CelebrityScript";
import BPromotion from "./component/BusinessPromotion/BPromotion";
import OrderDeliver from "./component/OrderDeliver/OrderDeliver";

import { Route, Routes } from "react-router-dom";
import BookingDetail from './component/BookingDetail/BookingDetail';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/book-detail" element ={<BookingDetail/>}/>
        <Route path="/order-deliver" element={<OrderDeliver />} />
        <Route path="/celebrity-script" element={<CelebrityScript />} />
        <Route path="/celebrity-script-order" element={<CelebrityOrder />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/business-promotion" element={<BPromotion />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
