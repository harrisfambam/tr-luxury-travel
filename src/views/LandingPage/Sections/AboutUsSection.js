import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutUsStyle.js";

const useStyles = makeStyles(styles);

export default function AboutUsSection() {
  const classes = useStyles();

  return (
    <div id="about-us" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Us</h2>
          <h5 className={classes.description}>
          Thurston Rivera Luxury Travel was founded in 2019 by two travel-obsessed best friends with over two decades of building businesses and their repertoire of travel together who decided to go at it on their own.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
