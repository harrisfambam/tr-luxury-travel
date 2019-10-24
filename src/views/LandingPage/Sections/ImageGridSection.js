import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components

import styles from "assets/jss/material-kit-react/views/landingPageSections/imageGridStyle.js";

const useStyles = makeStyles(styles);

export default function ImageGridSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <img width="100%" height="100%" src={require("assets/img/image-grid/picture_2-optimized.jpg")} alt="" />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={4}>
          <img width="100%" height="100%" src={require("assets/img/image-grid/img2.jpg")} alt=""/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img width="100%" height="100%" src={require("assets/img/image-grid/img3.jpg")} alt=""/>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <img width="100%" height="100%" src={require("assets/img/image-grid/img4.jpg")} alt=""/>
        </Grid> */}
      </Grid>
    </div>
  )
}