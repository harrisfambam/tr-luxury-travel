import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Layout from "components/Layout/Layout.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ImageGridSection from "./Sections/ImageGridSection.js";
import ProductSection from "./Sections/ProductSection.js";
import AboutUsSection from "./Sections/AboutUsSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Layout {...rest}>
      <Parallax filter image={require("assets/img/landing-bg-optimized.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Luxury is the absence of inconvenience.</h1>
              <h4 className={classes.subTitle}>
                We design expertly curated itineraries for couples and families with a discerning eye for your tastes, desires, and vacation dreams.  We do the listening, planning and take care of everything throughout your travels. You go enjoy the world, we got you.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <ImageGridSection />
          <AboutUsSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
    </Layout>
  );
}
