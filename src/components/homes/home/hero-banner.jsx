import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
   return (
      <>
         <section className="banner-area fix p-relative">
            <div className="banner-bg" style={{ backgroundColor: 'rgb(139, 30, 39)' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="hero-content" style={{ animation: 'slideInLeft 1s ease-out' }}>
                           <span>Learn New Skills & Popular Courses</span>
                           <h2 className="hero-title mb-35">For Every Student, Every <i>Classroom</i>.</h2>
                           <p>Dramatically supply transparent deliverables before backward<br />comp internal or "organic"
                              sources. Competently leverage other.</p>
                           <div className="tp-banner-btn">
                              <Link href="/course-list" className="tp-btn">Explore Courses</Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-6 mt-200">
                     <img src="/assets/img/banner/p2.png" alt="banner-shape" className="" style={{ animation: 'slideIn 1s ease-out' }}/>
                     </div> 
                     <div className="banner-shape d-none d-lg-block">
                     </div>
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
               @keyframes slindInLeft{
                  from{
                     transform: translateY(100%);
                     opacity: 0;
                  }
                  to{
                     transform: translateY(0);
                     opacity: 1;
                  }
               }
         `}</style>
      </>
   );
};

export default HeroBanner;