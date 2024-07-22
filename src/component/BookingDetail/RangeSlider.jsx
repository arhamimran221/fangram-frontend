import React, { useState } from 'react';
import { Slider } from 'antd';
import './BookingDetail.css';

const RangeSlider = () => {
  const [progressValue, setProgressValue] = useState(0);

  const marks = {
    0: 'Note Placed',
    25: 'Note Placed',
    50: 'Delivered',
    75: 'Received',
    100: 'Completed',
  };

  const handleSliderChange = (value) => {
    setProgressValue(value);
  };

  const railStyle = {
    background: 'transparent',
    borderTop: '2px dashed #4B4B4B', // Customize the dashed line style
  };

  return (
    <div  className="mainSliderCard" >
      <Slider
        marks={marks}
        step={null}
        dots
        value={progressValue}
        onChange={handleSliderChange}
        railStyle={railStyle}
      />
    </div>
  );
};

export default RangeSlider;
