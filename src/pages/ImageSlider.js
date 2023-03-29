import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../slider.css';
import '../main.css'

const ImageSlider = ({ leftImage, leftText, rightImage, rightText }) => {
  const [isLeftVisible, setIsLeftVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsLeftVisible((prevVisible) => !prevVisible);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container" style={{ zIndex: '-1' }}>
      <div className="slider-half left-slide">
        <SwitchTransition>
          <CSSTransition
            key={isLeftVisible}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="slide-left"
          >
            <div className="slide pr-1">
              {isLeftVisible ? (
                <img src={leftText} alt="left" className="img" />
              ) : (
                <img src={leftImage} alt="left" className="img" />

              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className="slider-half right-slide">
        <SwitchTransition>
          <CSSTransition
            key={isLeftVisible}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames="slide-right"
          >
            <div className="slide pl-1">
              {isLeftVisible ? (
                                <img src={rightImage} alt="right" className="img" />

              ) : (
                <img src={rightText} alt="left" className="img" />

              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default ImageSlider;
