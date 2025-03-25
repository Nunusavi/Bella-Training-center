import React from "react";

const MapArea = () => {
  return (
    <>
      <div
        className="map-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1339873910518!2d38.785647369684135!3d9.014775523979832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6060c0a695503919%3A0x2d2ccc13d6d3f990!2sBella%20Training%20Center!5e0!3m2!1sen!2set!4v1742903702954!5m2!1sen!2set"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapArea;
