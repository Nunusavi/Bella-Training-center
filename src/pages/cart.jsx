import React from "react";
import SEO from "../common/seo";
import Cart from "../components/cart";
import WrapperFour from "../layout/wrapper";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Cart"} />
      <Cart />
    </WrapperFour>
  );
};

export default index;
