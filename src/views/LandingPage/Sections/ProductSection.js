import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Work from "@material-ui/icons/Work";
import CheckBox from "@material-ui/icons/CheckBox";
import Help from "@material-ui/icons/Help";
import Search from "@material-ui/icons/Search";
import Hearing from "@material-ui/icons/Hearing";
import Schedule from "@material-ui/icons/Schedule";
import Add from "@material-ui/icons/Add";
import Loyalty from "@material-ui/icons/Loyalty";
import BeachAccess from "@material-ui/icons/BeachAccess";
import Flight from "@material-ui/icons/Flight";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer> */}
      {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="HOW WE WORK WITH YOU"
              iconColor="gray"
              vertical
              items={[
                "Listen and communicate",
                "Work with your schedule",
                "Take the time to discover what you need from your next journey",
                "Plan, book and oversee your itinerary"
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="WHAT WE DO FOR YOU"
              iconColor="gray"
              vertical
              items={[
                "Provide exclusive amenities, upgrades and perks through our Virtuoso Partners",
                "Enhanced Land, Sea & Air Experiences",
                "Add value and peace of mind"
              ]}            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="HOW WE CAN DO WHAT WE DO"
              iconColor="gray"
              vertical
              items={[
                "Access to over 1700 vetted luxury travel providers worldwide to ensure you are getting the best",
                "Connections to the right people",
                "Obsessed with travel and making people happy",
              ]}            />
          </GridItem>
        </GridContainer>
      </div> */}
      <div>
      <h2 className={classes.title}>How we work with you</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Listen and communicate"
              description="We listen to your wishes, dreams and needs for your trip and work with you to provide the best trip possible. Some people love planning and others don’t, or simply don’t have the time, and we are happy to collaborate as much or as little as you like."
              // icon={Hearing}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Work with your schedule"
              description="Time is a luxury most don’t have (until it's time to vacay!) and we are happy to make your planning easier and more convenient for you. We work with your schedule to plan out your dream trip, be it on a Sunday morning or weekday evening.  We aren’t just 9-5ers so let us know what works best for you."
              // icon={Schedule}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Take the time to discover what you need from your next journey"
              description="Are you eager to push your boundaries, get out and explore all that a destination has to offer and give your adventurous side some love? We are here to help you and your fellow travellers design what is needed for each specific trip."
              // icon={Search}
              iconColor="gray"
              vertical
         />
          </GridItem>
        </GridContainer>
      </div>
      <div>
      <h2 className={classes.title}>What we do for you</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Access to exclusive amenities, upgrades and perks through our Virtuoso Partners"
              description="Complimentary upgrades, breakfast daily, food or spa credit, free wifi, early check-in/late check out are a sampling of the benefits we can provide you through hotel partnerships."
              // icon={FreeBreakfast}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Enhanced Land, Sea & Air Experiences"
              description="Exclusive excursions, immersive cultural experiences, backstage access to historical destinations, and arrangements for getting you to and from your destinations seamlessly."
              // icon={Flight}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Add value and peace of mind"
              description="We utilize our Virtuoso network to provide you amazing perks and upgrades at no added cost to you. We are there to help steer you away from any mistakes that internet planning doesn’t warn you about or help you with."
              // icon={Add}
              iconColor="gray"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
      <h2 className={classes.title}>How we can do what we do</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Access to over 1700 vetted luxury travel providers worldwide"
              description="Boots on the ground in your preferred destination provides for a truly authentic experience and first class service."
              // icon={BeachAccess}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Connections to the right people"
              description="We are proud members of Departure Lounge, an innovative and collaborative group of the top luxury advisors that utilize our shared experience, connections, and resources to make sure you are taken care of, wherever you travel."
              // icon={People}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Obsessed with travel and making people happy"
              description="We do everything it takes to be your most trusted personal shopper and planner, working as hard as we can to make sure your valuable travel time and resources are spent in the exact way they should be."
              // icon={Loyalty}
              iconColor="gray"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
