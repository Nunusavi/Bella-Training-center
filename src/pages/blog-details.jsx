import React from "react";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-details";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Blog Details"} />
      <BlogDetails />
    </WrapperFour>
  );
};

export default index;
