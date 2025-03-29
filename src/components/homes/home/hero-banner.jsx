import Link from "next/link";
import React, { useState, useEffect } from "react";

const slogans = [
  "Your story, your vision—master the art of filmmaking.",
  "Every story deserves to be seen—learn to bring yours to life.",
  "Lights, camera, storytelling—master the craft of cinema.",
  "Your vision, our training—become a cinematic storyteller.",
  "Film is the language of dreams—learn to speak it fluently.",
  "Every frame tells a story—become a master of visual storytelling.",
  "Your creativity, our expertise—turn your passion into film.",
  "From script to screen—learn to create unforgettable cinema.",
  "Unleash your storytelling power—film the future.",
  "The world needs your story—learn to tell it through film.",
  "From imagination to the big screen—unlock your filmmaking potential.",
  "Write it. Film it. Master it.",
  "Every filmmaker starts with a story—start yours today.",
  "Storytelling is an art—learn to paint with film.",
  "Every frame tells a story—learn to make yours unforgettable.",
];

const HeroBanner = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="banner-area fix p-relative">
        <div
          className="banner-bg"
          style={{ backgroundColor: "rgb(139, 30, 39)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div
                  className="hero-content"
                  style={{ animation: "slideInLeft 1s ease-out" }}
                >
                  <span>Learn New Skills & Popular Courses</span>
                  <h2 className="hero-title mb-35">
                    For Every Student, Every <i>Classroom</i>.
                  </h2>
                  <p
                    key={currentSlogan}
                    style={{ animation: "fadeIn 1s ease-in-out" }}
                  >
                    {slogans[currentSlogan]}
                  </p>
                  <div className="tp-banner-btn">
                    <Link href="/course-list" className="tp-btn">
                      Explore Courses
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 mt-200">
                <img
                  src="/assets/img/banner/p2.png"
                  alt="banner-shape"
                  className=""
                  style={{ animation: "slideIn 1s ease-out" }}
                />
              </div>
              <div className="banner-shape d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default HeroBanner;
