import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0 0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  copyright: {
    fontSize: ".625rem",
    marginTop: "20px"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  footerLinksContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    '@media screen and (max-width: 500px)': {
      justifyContent: "center",
    }
  },
  item: {
    marginTop: "20px"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    '@media screen and (max-width: 500px)': {
      justifyContent: "center",
      alignItems: "center"
    }
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
