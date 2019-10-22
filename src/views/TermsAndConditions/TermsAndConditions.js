import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/termsAndConditionsStyle.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function TermsAndConditions(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="TR Luxury Travel"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.description}>
            <h4 className={classes.center}>
              THURSTON RIVERA LUXURY TRAVEL, LLC (Agency)  Terms & Conditions
            </h4>
            <h6>
              I have read, understand and accept the following:
            </h6>
            <p>
              <span className={classes.bold}>Documentation:</span> Travel documentation appropriate for entry to your itinerary destinations, such as passports, visas & inoculation certificates, remain each traveler’s responsibility. It is each traveler’s responsibility to make certain that they have proper immunizations before travel - please see your health provider for advice. THURSTON RIVERA LUXURY TRAVEL, LLC will advise required documentation but travelers who do not meet advised requirements will be denied boarding. Children and infants are not exempt.  All such travel documents are required for children and infants. Children and infants traveling with one parent, or without both parents, may be denied entry, unless authenticated, verified consents are provided to authorities in the format and with content they require. Valid passports are required for all international destinations. If a passport is required to travel, the expiration date must be at least six (6) months following the return date of the planned travel. Each foreign country holds different views of past criminal offenses - if you have a current or past offense, please contact that country directly for entry and exit requirements. Travelers with DWI or DUI records should check whether current rules exclude admission to foreign destinations. THURSTON RIVERA LUXURY TRAVEL, LLC feels it is an invasion of privacy for members of our staff to make such an inquiry and these requirements remain the traveler’s responsibility. For further information, please visit the U.S. State Department web site: travel.state.gov.
            </p>

            <p>
              <span className={classes.bold}>Check-in & Departure Responsibilities:</span> It is strongly recommended that you check in a minimum of 2 hours prior to scheduled departure for domestic flights and 3 hours prior to scheduled departure for international flights.* It is the traveler’s responsibility to reconfirm flight times at least 24-72 hours prior to scheduled flights. THURSTON RIVERA LUXURY TRAVEL, LLC will not assume responsibility for any air or schedule changes. Certain countries require departure taxes that require payment in cash. *Recommended check in times are subject to change without notification. It is the traveler’s responsibility to remain abreast of changes in condition or airport rules that might require earlier arrival times. This information can be found when entering your confirmation number on the airline website.
 </p>

            <p>
              <span className={classes.bold}>Travel Protection/Insurance:</span> Information for travel insurance will be sent to you within a reasonable time frame after deposit based on trip cost and components.  THURSTON RIVERA LUXURY TRAVEL, LLC MAKES AVAILABLE ACCESS TO VARIOUS OPTIONAL SERVICES AND PRODUCTS SEEKING TO ENHANCE YOUR TRAVEL EXPERIENCE AND REDUCE RISKS OF LOSS. OPTIONS SUCH AS TRAVEL INSURANCE HELP REDUCE RISKS OF LOSS OF INVESTMENT FOR SOME OR ALL OF SUCH RISKS AS SUPPLIER DEFAULT OR BANKRUPTCY, DELAY, INTERRUPTION, MISSED CONNECTION, CANCELLATION, MEDICAL EMERGENCY, EVACUATION, LOST BAGGAGE & PERSONAL EFFECTS, ILLNESS, JOB LOSS, CHANGE OF PLANS, ACCIDENTAL DEATH AND DISABILITY, TRAVEL ACCIDENT OR SICKNESS, AND MEDICAL EXPENSES. UNLESS SPECIFICALLY NOTED, TRAVEL INSURANCE IS NOT INCLUDED IN THE PRICE OF THE ITINERARY.  TRAVEL INSURANCE MAY PROVIDE SOME PROTECTION TO YOU FROM FINANCIAL LOSS IN SOME OF THE ABOVE CIRCUMSTANCES.
 </p>

            <p>
              You acknowledge there is no refund from Agency or suppliers if you cancel or interrupt your travel for any reason and, moreover, Agency’s and travel supplier cancellation charges will apply, resulting in loss of monies up to the full cost of your travel booking and related costs. Purchase of travel insurance is not required.  Agency personnel are not qualified or authorized to answer technical questions about benefits, exclusions, and conditions of any insurance, nor evaluate adequacy of insurance. Additional charges apply for travel insurance.
</p>

            <p>
              <span className={classes.bold}>Pricing:</span> Price quotes are applicable to the date and time at which they are requested and agency seeks to honor the price originally quoted. Quotes in foreign currency are subject to fluctuations in exchange rates and international credit card issuer fees. THURSTON RIVERA LUXURY TRAVEL, LLC is not responsible for any increases due to fuel surcharges, government-imposed taxes/fees or supplier-imposed increases. You acknowledge and accept these conditions as applicable to your purchase. You authorize Agency to charge your credit card for such additional amounts. This consent applies to all travel arranged by Agency for you and your group.
 </p>

            <p>
              <span className={classes.bold}>Safety & Health:</span> Personal safety is a concern everywhere. No place, even home, is 100% safe. Some places have greater safety risks than others. You are responsible to become and stay informed about places where you will travel, by reading current news, reviewing travel prohibitions, warnings, announcements and advisories issued by the U.S. Government prior to and after booking travel. Information on conditions in various countries and levels of safety and health risks associated with travel to particular destinations can be found at websites of the U.S. State Department <a href="http://www.state.gov">www.state.gov</a>, TSA <a href="http://www.tsa.gov">www.tsa.gov</a>, Department of Transportation <a href="http://www.dot.gov">www.dot.gov</a>, Federal Aviation Administration <a href="http://www.faa.gov">www.faa.gov</a>, U.S. Centers for Disease Control www.cdc.gov, and U.S. Customs and Boarder Protection agency <a href="http://www.cbp.gov">www.cbp.gov</a>.
 </p>

            <p>
              You should consider enrolling in the U.S. Government’s free Smart Traveler Enrollment Program (STEP). Government. STEP lets U.S. citizens and nationals traveling and living abroad enroll their trip with the nearest U.S. Embassy or Consulate. STEP lets you enter information about your upcoming trip so the State Department can provide information on safety conditions to help you make informed decisions about travel plans, help the U.S. Embassy contact you in an emergency and help family and friends contact you in an emergency. Register at <a href="https://step.state.gov/step/">https://step.state.gov/step/</a>.
 </p>

            <p>
              PEOPLE TRAVEL TO MANY DIFFERENT DESTINATIONS.  PEOPLE TRAVEL FOR MANY REASONS AND HAVE DIFFERENT RISK TOLERANCES. AGENCIES OFFERING, ARRANGING OR ASSISTING IN ARRANGING TRAVEL TO PARTICULAR DESTINATIONS IS NOT A REPRESENTATION OR WARRANTY THAT TRAVEL TO THOSE PLACES IS ADVISABLE, SAFE, RISK FREE, OR OF TOLERABLE OR ACCEPTABLE RISK.  AGENCY AND ITS PERSONNEL SHALL NOT BE LIABLE FOR COSTS, DAMAGES, OR LOSSES, ALSO INCLUDING PERSONAL INJURY, DELAY, CRIME, DEATH, INJURY TO OR LOSS OF PROPERTY, THAT MAY RESULT IN OR DURING OR AS RESULT OF TRAVEL TO ANY DESTINATION. YOU ASSUME AND ACCEPT, FOR YOURSELF AND YOUR GROUP, ALL SAFETY AND OTHER RISKS ASSOCIATED WITH YOUR TRAVEL.
 </p>

            <p>
              <span className={classes.bold}>Payment and Cancellation:</span> Final payment is due the length of time prior to departure set by terms of each supplier involved in your booking or tour (airline, hotel, cruise line, transfer company, sightseeing operators and other travel service providers). If full payment is not received by the due date, your reservation may be cancelled without additional notice and deposits will be forfeited. Some supplier terms specify that there is no refund after a booking is made and paid for. Your ability to obtain a refund if you change or cancel travel plans is limited.
 </p>

            <p>
              All cancellation requests must be sent in writing to Agency. Agency and third-party supplier cancellation charges may apply. These are typically stated in either the travel documentation, this website, or each supplier’s website. If you have any questions, or any cancellation charges are unclear, please contact your Agency representative. Cancellation charges will be charged to the credit card you authorized to pay for travel services, or in the case of a supplier refund, may be deducted from the refund.
 </p>
            <p>
              <span className={classes.bold}>Pregnancy:</span> Each airline and cruise line has its own policy and many restrict travel or require a doctor’s note or other documentation to travel after a specified stage of pregnancy.  Some airlines and cruise lines do not permit travel after a specified stage of pregnancy.  Agency does not set airline or cruise line policies. You are responsible to check the policy of the airline or cruise line and to comply with their policy.</p>


            <p>
              <span className={classes.bold}>Additional Disclosure:</span> THURSTON RIVERA LUXURY TRAVEL, LLC is not the source or supplier of the travel services requested and acts solely as a booking agent for disclosed principal supplier cruise lines, hotels, airlines, ground transportation and other companies providing accommodations, transportation, and/or other services. Each of these suppliers is an independent entity with its own management and is not subject to the control of THURSTON RIVERA LUXURY TRAVEL, LLC. THURSTON RIVERA LUXURY TRAVEL, LLC shall not be liable for any accident, injury, property damage or personal loss to client or to those traveling with Client in connection with any travel services we have booked, including but not limited to acts of God, weather conditions, natural disasters, acts of governments or other authorities, wars, civil disturbances, riots, strikes, epidemics, acts of terrorism, breakdown in equipment, theft, delay, fuel increases or cancellation or change in intermarry or schedules. I acknowledge and accept that there are cancellation policies, change fees and penalties that apply to my travel plans and services as set by travel suppliers. If for any reason my credit card charges are later declined, reversed or THURSTON RIVERA LUXURY TRAVEL, LLC is unable to receive payment for the travel plans and services, I acknowledge that this is a binding contract and THURSTON RIVERA LUXURY TRAVEL, LLC will be entitled to recovery, including reasonable attorneys’ fees in connection with collection.
 </p>

            <p>
              By paying the deposit, I have read and accept the Terms & Conditions THURSTON RIVERA LUXURY TRAVEL, LLC terms & conditions on behalf of myself and anyone in my party.
 </p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}