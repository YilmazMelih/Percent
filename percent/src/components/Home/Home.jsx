import React, { useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import Button from '../Button/Button';
import adjustVideo from '../../assets/video/adjust/adjust.mp4';
import contrastVideo from '../../assets/video/contrast/contrast.mp4';

const Home = () => {
  const [activeAnimation, setActiveAnimation] = useState(0);
  const [style, setStyle] = useState({});
  const heroRef = useRef(null);

  const fonts = ['FZHANWZKJW', 'HYQiHeiX4-35W', 'Sen-Regular'];

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    setStyle({
      transform: `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
    });
  };

  const animationProps = {
    wrapper: "h1",
    speed: 40,
    className: "hero-title",
    repeat: 0, // We handle the loop manually
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero-section"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="typography-lines">
          <div className="line ascender"><span>Ascender</span></div>
          <div className="line cap-height"><span>Cap Height</span></div>
          <div className="line x-height"><span>X Height</span></div>
          <div className="line baseline"><span>Baseline</span></div>
          <div className="line descender"><span>Descender</span></div>
        </div>
        <div className="hero-content" style={style}>
          {activeAnimation === 0 && (
            <TypeAnimation
              {...animationProps}
              style={{ fontFamily: fonts[0] }}
              sequence={[
                'Intuitive',
                2000,
                () => setActiveAnimation(1),
              ]}
            />
          )}
          {activeAnimation === 1 && (
            <TypeAnimation
              {...animationProps}
              style={{ fontFamily: fonts[1] }}
              sequence={[
                'Creative',
                2000,
                () => setActiveAnimation(2),
              ]}
            />
          )}
          {activeAnimation === 2 && (
            <TypeAnimation
              {...animationProps}
              style={{ fontFamily: fonts[2] }}
              sequence={[
                'Systematic',
                2000,
                () => setActiveAnimation(0),
              ]}
            />
          )}
        </div>
        <div className="button-container">
          <Button onClick={() => alert('Get Started Clicked!')}>Get Started</Button>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="video-demo-section">
        <h2>See It in Action</h2>
        <div className="video-container">
          <div className="video-item">
            <div className="video-wrapper">
              <video autoPlay loop muted playsInline>
                <source src={adjustVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-description">
              <h4>Adjust</h4>
              <p>By allowing circle manipulation (changing the circle width and location), the user is able to update glyph forms.</p>
            </div>
          </div>
          <div className="video-item">
            <div className="video-wrapper">
              <video autoPlay loop muted playsInline>
                <source src={contrastVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-description">
              <h4>System</h4>
              <p>Percent makes it less intimidating to try font design for designers and encourages creative exploration as well as learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>The Problem with Font Tools</h2>
        <p>Most professional type creation tools require deep knowledge of typefaces, Bezier curves, and complex workflows. This steep learning curve can stifle creativity before it even begins.</p>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <h2>Our Innovative Approach</h2>
        <p>We are making Percent to make it easier to begin designing fonts. Instead of drawing each glyph from scratch, users manipulate circles to change the letterform. This helps you understand the system of typography, not just individual shapes.</p>
      </section>

    </div>
  );
};

export default Home;
