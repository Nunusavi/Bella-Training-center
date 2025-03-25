import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Contact"} />
      <Contact />
    </WrapperFour>
  );
};

export default index;
