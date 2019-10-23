import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);

  const sendMessage = e => {
    e.preventDefault();
    const form = e.target;
    axios({
      method: "POST",
      url: "https://formspree.io/xzbpdrze",
      data: new FormData(form)
    }).then(r => {
      // handleServerResponse(true, "Thanks!", form);
      setSubmitted(true);
    })
      .catch(r => {
        console.log(r.response.data.error)
        // handleServerResponse(false, r.response.data.error, form);
      });
  }

  return (
    <div id="contact" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          {!submitted ? (
            <div>
              {/* <h4 className={classes.description}>
                Divide details about your product or agency work into parts. Write a
                few lines about each one and contact us about any further
                collaboration. We will responde get back to you in a couple of
                hours.
            </h4> */}
              <form action="https://formspree.io/xzbpdrze" method="POST" onSubmit={sendMessage}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Your Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: "name"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Email"
                      id="email"
                      type="email"
                      name="_replyto"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        name: "_replyto"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Phone Number"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: "phone"
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Your Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      name: "message"
                    }}
                  />
                  <GridContainer justify="center" className={classes.sendContainer}>
                    <GridItem xs={12} className={classes.textCenter}>
                      <Button type="submit" value="Send" color="primary">Send Message</Button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
              </form>
            </div>
          ) : (
              <div className={classes.success}>Thank you for your inquiry, we will get back to you within 24 hours.</div>
            )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
