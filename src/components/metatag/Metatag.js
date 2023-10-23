import React from "react";
import { Helmet } from "react-helmet-async";
const Metatag = () => {
  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name="description"
          content="여러분을 환영합니다! 회사이름에서는 고객님께 최상의 서비스를 제공해 드리고자 합니다."
        />
        <meta
          name="keywords"
          content="회사이름, 서비스, 제품, 솔루션, 인사말"
        />
        <meta property="og:title" content="인사말 - 회사이름" />
        <meta
          property="og:description"
          content="여러분을 환영합니다! 회사이름에서는 고객님께 최상의 서비스를 제공해 드리고자 합니다."
        />
        <meta property="og:image" content="https://example.com/welcome.jpg" />
        <meta property="og:url" content="https://example.com/welcome" />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
};

export default Metatag;
