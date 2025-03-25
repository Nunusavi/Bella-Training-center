import React from "react";
import SEO from "../common/seo";
import BlogMasonry from "../components/blog-masonry";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Blog Masonry"} />
      <BlogMasonry />
    </WrapperFour>
  );
};

export default index;
