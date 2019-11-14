import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, items, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      {props.icon && (
        <div className={iconWrapper}>
          <props.icon className={iconClasses} />
        </div>
      )}
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        {items && (
          <ul className={classes.items}>
            {items.map((item, index) => (
              <li className={classes.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {description && <p className={classes.description}>{description}</p>}
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "black"
};

InfoArea.propTypes = {
  icon: PropTypes.object,
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
    "black"
  ]),
  vertical: PropTypes.bool
};
