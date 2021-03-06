import React, { useEffect, useState } from "react";

import "./Carousel.css";
import CarouselData from "./CarouselData";

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slider">
        <div
          className="inner  "
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="indicators">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className={activeIndex===index ? 'active' : ''}
              >
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
