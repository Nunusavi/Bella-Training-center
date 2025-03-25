import React from "react";
import SEO from "../common/seo";
import Instructor from "../components/instructor";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Instructor"} />
      <Instructor />
    </WrapperFour>
  );
};

export default index;
