import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import StudyMain from "../components/StudyMain";
const Study = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <StudyMain />
      <Footer />
    </Fragment>
  );
};

export default Study;
