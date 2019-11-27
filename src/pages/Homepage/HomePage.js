import React from 'react';
import './Homepage.css';
import { Redirect } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import AwesomeSlider from 'react-awesome-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import 'react-awesome-slider/dist/styles.css';
import armenia from '../../images/armenia.jpg';
import greece from '../../images/greece.jpg';
import KoyaPond from '../../images/KoyaPond.jpg';

const Homepage = ({ authenticated }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src={armenia} />
      <div data-src={greece} />
      <div data-src={KoyaPond} />
    </AutoplaySlider>
  );

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  const scrollToBottom = () => {
    Scroll.animateScroll.scrollToBottom();
  };

  return (
    <>
      {authenticated === null && (
        <Redirect to={{ pathname: '/auth', state: { authenticated } }} />
      )}
      <div className="home-main">
        <NavigationBar />
        <div className="home-content">
          <div className="home-slider">{slider}</div>
          <div className="home-scrolldown">
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={scrollToBottom}
              size="2x"
            />
          </div>
          <div className="home-recommend">
            <div className="home-background">
              <div className="home-inner">
                <article className="home-feature">
                  <span className="feature__image">
                    <img className="feature__img" src={armenia} alt="armenia" />
                  </span>
                  <div className="feature__content">
                    <h2>
                      Integer vitae libero acrisus egestas placerat sollicitudin
                    </h2>
                    <p>
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      libero, faucibus adipiscing, commodo quis, gravida id,
                      est.
                    </p>
                    <ul className="feature__action">
                      <li>
                        <a className="feature__btn" href="/">
                          More
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="home-feature">
                  <span className="feature__image">
                    <img className="feature__img" src={greece} alt="greece" />
                  </span>
                  <div className="feature__content">
                    <h2>
                      Integer vitae libero acrisus egestas placerat sollicitudin
                    </h2>
                    <p>
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      libero, faucibus adipiscing, commodo quis, gravida id,
                      est.
                    </p>
                    <ul>
                      <li>
                        <a className="feature__btn" href="/">
                          More
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="home-scrollup">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={scrollToTop}
                  size="2x"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
