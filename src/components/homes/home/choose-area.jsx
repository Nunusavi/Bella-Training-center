import Link from "next/link";
import React from "react";

const choose_data = {
  bg_img: "/assets/img/bg/suit-bg-02.png",
  experiences_years: "23",
  title: "Why Choose Us",
  sub_title: (
    <>
      Why You Choose Us? 
      <br />
     Bella Training Institute 
    </>
  ),
  des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',

  choose_list: [
    { title: "Increasing Your Learning Skills" },
    { title: "High Quality Standard of Teaching " },
    { title: "Professional and Qualified Trainers" },
    { title: "Finish Your Course, Get Certificate" },
  ],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
  choose_data;
const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pt-90 pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 ml-25">
                <div className="tpchoose-img-text d-none d-md-block">
                  <img src={bg_img} alt="choose-img" />
                  <ul>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Flexible Learning Schedule</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Affordable Fees</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title mb-25">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul>
                    {choose_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
