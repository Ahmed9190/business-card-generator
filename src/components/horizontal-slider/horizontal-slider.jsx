import React from 'react';
import './horizontal-slider.scss';
import arrowLeft from '../../assets/SVG/arrow-left.svg';
import arrowRight from '../../assets/SVG/arrow-right.svg';
import Card from '../card/card';
import { cardColors } from './../../pages/handle-card/handle-card-data';

const HorizontalSliderItem = ({ children }) => (
  <div className="horizontal-slider-item">{children}</div>
);

const HorizontalSlider = () => {
  const HorizontalSliderRef = React.useRef();
  const [scrollData, setScrollData] = React.useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  const onMouseDown = e => {
    setScrollData({ ...scrollData, isScrolling: true, clientX: e.clientX });
  };

  const onMouseUp = e => {
    setScrollData({ ...scrollData, isScrolling: false });
  };

  const onMouseMove = e => {
    const { clientX, scrollX } = scrollData;
    if (scrollData.isScrolling) {
      HorizontalSliderRef.current.scrollLeft = scrollX - (e.clientX - clientX);
      scrollData.scrollX = scrollX - (e.clientX - clientX);
      scrollData.clientX = e.clientX;
    }
  };

  const handleClickArrow = arrowName => {
    if (arrowName === 'left') HorizontalSliderRef.current.scrollLeft -= 20;
    else HorizontalSliderRef.current.scrollLeft += 20;
  };

  return (
    <div className="wrapper">
      <div className="arrows-container">
        <div className="arrow-circle" onClick={() => handleClickArrow('left')}>
          <img src={arrowLeft} alt="arrow-left" height={15} />
        </div>
        <div className="arrow-circle" onClick={() => handleClickArrow('right')}>
          <img src={arrowRight} alt="arrow-right" height={15} />
        </div>
      </div>
      <div
        className="wrapper"
        ref={HorizontalSliderRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
      >
        {Array.from({ length: 30 }).map((x, i) => (
          <HorizontalSliderItem>
            <Card
              cardData={{
                f_name: 'Ahmed',
                l_name: 'Waleed',
                position: 'General manager',
              }}
              color={cardColors[i % 11]}
            />
          </HorizontalSliderItem>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
