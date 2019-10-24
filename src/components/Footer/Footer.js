/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { List, ListItem, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import virtuoso from "assets/img/virtuoso-logo.png";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.footerLinksContainer}>
          <div className={classes.item}>
            <div className={classes.list}>
              <div className={classes.inlineBlock}>
                <Link className={classes.block} to="terms-and-conditions">
                  Terms & Conditions
                </Link>
              </div>
              <div className={classes.inlineBlock}>
                <Link className={classes.block} to="privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.item}>
            <img src={virtuoso} alt="Virtuoso Member" height="76" width="200" />
          </div>
         </div>
         <div className={classes.copyright}>
            &copy; {1900 + new Date().getYear()} Thurston Rivera Luxury Travel LLC CST#2141493-70 | All Rights Reserved
          </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
