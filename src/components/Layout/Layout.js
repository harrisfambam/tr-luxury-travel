/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Header from "../Header/Header.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import Footer from "../Footer/Footer.js";
import ScrollToTop from "components/ScrollToTop/ScrollToTop.js";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Styles
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import logo from "assets/img/tr-logo-white-optimized.png";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Layout(props) {
  const { children, headerProps, footerProps, showFab } = props
  const classes = useStyles();

  return (
    <div>
      <Header
        {...headerProps}
      />
      { showFab && <div id="back-to-top-anchor" /> }
      { children }
      { showFab && (
        <ScrollToTop>
        <Fab className={classes.fab} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
        </ScrollToTop>
      )}
      <Footer {...footerProps} />
    </div>
  );
}

Layout.defaultProps = {
  headerProps: {
    color: 'transparent',
    routes: dashboardRoutes,
    brand: logo,
    rightLinks: HeaderLinks,
    fixed: true,
    changeColorOnScroll: {
      height: 190,
      color: "white"
    }
  },
  footerProps: {},
  showFab: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
  showFab: PropTypes.bool,
};