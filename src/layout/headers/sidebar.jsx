import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/Bella_name_Logo.png" alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
          <MobileMenus />
        </div>
        <div className="sidebar-info">
          <h4 className="mb-15">Contact Info</h4>
          <ul className="side_circle">
            <li>22, Besides Kea-med College</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>
              <a href="tel:+251-960-656-584">+251-960-656-584</a>
            </li>
            <li>
                <a href="tel:+251-960-858-538">+251-960-858-538</a>
            </li>
            <li>
              <a href="mailto:epora@example.com">epora@example.com</a>
            </li>
          </ul>
          <div className="side-social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${isActive ? "opened" : ""} `}
        onClick={() => setIsActive(false)}
      ></div>
    </>
  );
};
export default Sidebar;
