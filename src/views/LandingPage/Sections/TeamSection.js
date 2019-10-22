import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/danielle.jpg";
import team2 from "assets/img/faces/trisha.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Our Founders</h3>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Danielle Thurston
                <br />
                <small className={classes.smallTitle}>Co-Owner & Advisor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Danielle grew up in a family with a thirst for adventure who traveled extensively through the west coast and explored the varied geography the area boasts (often on snowboard, ATV, horseback, or behind a boat). At a young age, she found ways to journey further while also aiming to give back more than she took. Some highlights were multiple volunteer trips to Mexico building orphanages, a summer-long trek to Europe singing in many countries’ cathedrals, and a marathon ran in Florence, Italy to raise money for a hometown charity.
                </p>
                <p className={classes.description}>
                  During and after college, Danielle began a decade-long career in event management where she thrived and refined her skills for realizing client’s visions, to listen and communicate, and bring to life clients’ dreams for their milestone events.  Later she was recruited into luxury private aviation as a flight attendant, eventually becoming the companies chief flight attendant. It was here that she had the opportunity to take some of the country’s most influential people to the world’s most coveted destinations, all the while focused on delivering the finer things the areas had to offer and the ultimate in customer service. Becoming a luxury travel advisor was a natural career progression, since both exploration and detailed logistical management are at the forefront of her life.
                </p>
                <p className={classes.description}>
                  She invites you to share your travel dreams with her so together you can collaborate to create unparalleled authentic experiences.
                 </p>
              </CardBody>
              {/* <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Trisha Rivera
                <br />
                <small className={classes.smallTitle}>Co-Owner & Advisor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Trisha caught the travel bug quite early in life with a family that went off the beaten path on their journeys to learn more about the culture of a destination through its people. Whether it was a cooking class from a local chef or a horseback ride through the mountains with a cattle rancher, experience was always the goal.  As a young adult, on a summer-long singing trip throughout Europe’s historical monuments, her love for travel fully blossomed and understanding for how it can both inspire and change you deepened.  As a Professional Opera Singer, Trisha was able to travel throughout the world and immerse herself in the cities she worked and performed in. That she can help design trips to allow one to experience these treasures is what fuels her passion for planning seamless curated vacations for her clients.
                </p>
                <p className={classes.description}>
                She is a mother and loves to plan family travel, understanding that the more a child travels and is introduced to different cultures, the better chance there is of raising a kinder, more cultured and compassionate human being. Travel may not be the road to world peace, but it’s a start.
                </p>
                <p className={classes.description}>
                Her varied career background as a Professor of Voice Studies, Marketing Consultant, and Professional Opera singer all aided in developing a unique arsenal of skills she brings as a travel advisor, most notably her ability to listen and make personal connections.  Trisha teamed up with her business partner in 2019 to create TR Luxury Travel so they could combine their efforts, dynamic skill set, and knowledge to ensure their clients can receive a more enriching experience from two unique perspectives. She would love to work closely with you to create the trip of a lifetime and continue to collaborate, making each one more uniquely ‘you’ than the last.

                </p>
              </CardBody>
              {/* <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
