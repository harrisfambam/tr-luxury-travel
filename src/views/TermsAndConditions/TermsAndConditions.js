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
            <h2 className={classes.center}>Terms & Conditions</h2>
            <p>
              By the use of this website, customer agrees to the terms and
              conditions of use, travel, and booking as contained in the
              following paragraphs. Please contact us if you have any questions.
            </p>
            <h4>
              Overview
              <br /> <small>WHO WE ARE AND WHAT THESE TERMS COVER</small>
            </h4>
            <p>
              The terms "we", "us" and "our" and “Thurston Rivera Luxury Travel”
              refer to Thurston Rivera Luxury Travel, LLC, a California limited
              liability company. The term "you", “client” refers to customer
              visiting our website, or booking a trip through us. These terms
              and conditions (T&Cs) together with any other documents we give
              you (the "Agreement") describes what you are legally entitled to
              expect from us when you book your trip through us, in addition to
              important obligations you make as a customer that affect your
              legal rights. Please read these T&Cs carefully. If you do not
              agree with any of the terms, you must speak to us before making
              booking a trip with us.
            </p>
            <h4>
              Your Responsibility
              <br /> <small>YOUR ACCEPTANCE OF THESE T&Cs</small>
            </h4>
            <p>
              Having accepted these T&Cs by continuing with our services, you
              are consenting to be bound by these T&Cs on behalf of any client
              in your party. By using our services, you are agreeing to be bound
              by the terms of this Agreement and any additional terms and
              conditions of any Travel Providers that are applicable to your
              travel arrangements. You agree on behalf of yourself and those you
              represent to comply with all such terms and conditions, including
              the payment of all amounts when due, and cancellation terms.
            </p>
            <p>
              GROUPS: In the case of a group booking, the lead client assumes
              the responsibility of sharing these T&Cs with each client in their
              group, including payment of all amounts when due. It is the
              responsibility of each client to read our T&Cs in its entirety.
              Thurston Rivera Luxury Travel is not responsible for any client’s
              unawareness of the T&Cs due to the failure of the lead client to
              share this information with all other clients in their group.
            </p>
            <p>
              You agree that any violation of any such T&Cs may result in (a)
              the cancellation of your reservation or purchase, (b) your
              forfeiture of any monies paid for your reservation or purchase,
              (c) you being denied access to the applicable travel related
              product or service, and (d) our right to debit your account for
              costs we incur as a result of such violation.
            </p>
            <p>
              You represent and warrant that (a) you are of sufficient age to
              use our services and website and can create binding legal
              obligations in connection with your use, (b) you are legally
              authorized to act on behalf of those you represent and accept
              these T&Cs on their behalf, and (c) the information supplied by
              you or members of your group is true and correct. You are
              responsible for informing such other persons of all T&Cs
              applicable to their travel arrangements. You understand that you
              are financially responsible for any use of our services or website
              by you and those for whom you make trip reservations.
            </p>
            <h4>
              Changes to T&Cs
              <br /> <small>BECOME FAMILIAR</small>
            </h4>
            <p>
              You acknowledge and agree that we may change these T&Cs from time
              to time and that those changes become effective immediately. If we
              make material changes, we will provide you notice. You agree to be
              bound by the T&Cs that are in effect at the time of travel.
              Continuing to use our services after notice of material changes
              constitutes your acceptance to such changes.
            </p>
            <h4>
              Other Terms That Apply
              <br /> <small>COVID-19 RELEASE</small>
            </h4>
            <p>
              The client expressly acknowledges that naturally occurring
              diseases and viruses (including, but not limited to, the currently
              widespread COVID-19) may be present and actively occurring in all
              environments in which your vacation will take place.{" "}
            </p>
            <p>
              WORLDWIDE PANDEMIC INHERENT RISK OF TRAVELING: You acknowledge the
              novel coronavirus, COVID-19, has been declared a worldwide
              pandemic by the World Health Organization. You acknowledge that
              COVID-19 has made travel uncertain due to government closures and
              travel restrictions. COVID-19 is extremely contagious and is
              believed to spread mainly from person-to-person contact (however
              the exact method of spread remains unknown). You also understand
              that if you are older or have underlying conditions, you may be
              more prone to serious infection and death due to COVID-19. As a
              result of the highly infectious nature of this disease, federal,
              state, and local governments health agencies recommend social
              distancing, wearing of PPE (including masks), and have, in many
              locations, prohibited the congregation of groups of people. You
              acknowledge that exposure to such viruses or disease is an
              inherent risk of traveling, that cannot be controlled or
              eliminated by Thurston Rivera Luxury Travel.
            </p>
            <p>
              EXPOSURE PERSONAL LIABILITY: By booking a trip at this time, you
              acknowledge the highly contagious nature of COVID-19 and
              voluntarily assume the risk for yourself and any minors traveling
              with you, that you or they may be exposed to or infected by
              COVID-19 by traveling and that such exposure or infection may
              result in personal injury, illness, permanent disability, and
              death even if such injuries or losses occur in a manner that is
              not foreseeable at the time you book your trip.
            </p>
            <p>
              UNCERTAINTY OF TRAVEL CHANGES: You acknowledge that due to the
              uncertainty of travel at this time, your trip may be postponed or
              cancelled or changes may be made to itineraries due to closures of
              certain sites or activities, for which there may be no refund. You
              understand that you may become sick before, during or after the
              trip and may not be able to travel and such cancellation or
              interruption will be subject to our cancellation terms below, for
              which we will not be liable.
            </p>
            <p>
              You agree that due to uncertainty caused by COVID 19, Thurston
              Rivera Luxury Travel has strongly encouraged the purchase of
              travel protection coverage including cancel for any reason
              coverage if and when available, and that should you fail to
              purchase travel protection coverage, Thurston Rivera Luxury Travel
              shall not be liable to any losses howsoever arising.
            </p>
            <p>
              RELEASE ALL LIABILITY: You, for yourself, and any minors traveling
              with you, and on behalf of my and their heirs, assigns, personal
              representatives and next of kin, HEREBY RELEASE, INDEMNIFY, AND
              HOLD HARMLESS Thurston Rivera Luxury Travel, LLC, its officers,
              agents, and/or employees, suppliers, and other participants
              (RELEASEES), from any and all claims, demands, losses, and
              liability arising out of or related to any POSTPONEMENT,
              CANCELLATION, CHANGES, INJURY, DISABILITY, DEATH OR ANY OTHER LOSS
              you may suffer due to exposure, infection, spread, closure, and
              travel restrictions related to COVID- 19, WHETHER ARISING FROM THE
              NEGLIGENCE OF THE RELEASEES OR OTHERWISE, to the fullest extent
              permitted by law.
            </p>
            <h4>
              Scope
              <br /> <small>THIRD PARTY TRAVEL PROVIDERS AND PRODUCTS</small>
            </h4>
            <p>
              Thurston Rivera Luxury Travel does not provide, own, or control
              the travel products that are provided as part of your trip, such
              as flights, accommodations, rental cars, packages, or travel
              insurance (the “Travel Products”). The Travel Products are owned,
              controlled or made available by third parties (the “Travel
              Providers”) such as airlines, hotels, suppliers, and tour
              operators. The Travel Providers are responsible for the Travel
              Products.
            </p>
            <p>
              AGREE TO TRAVEL PROVIDER’S T&Cs: By making payment to The Travel
              Provider’s, you are agreeing to and understand Travel Provider’s
              terms and privacy policies applicable to your trip.
            </p>
            <p>
              ACTING AS AGENT ONLY: Your interaction with any Travel Provider is
              at your own risk and you agree that Thurston Rivera Luxury Travel
              acts only as agent for the client in acquiring transportation,
              hotel accommodations, sightseeing and other privileges, or
              services for the clients’ benefit, and on the express condition
              that Thurston Rivera Luxury Travel shall not be responsible for
              any loss, accident, injury, delay, defect, omission or
              irregularity which may occur or be occasioned, whether by reason
              of any act, negligence or default of any company or person engaged
              in or responsible for carrying out any of the arrangements, or
              otherwise in connection therewith.
            </p>
            <h4>
              Planning and Booking Services
              <br /> <small>PROCESSES AND PAYMENTS</small>
            </h4>
            <p>
              PLANNING FEE: Planning any travel takes extensive training,
              knowledge, expertise, time and research. We charge a
              non-refundable planning fee starting from $150.00 per person
              before we begin work on your booking.
            </p>
            <ul className={classes.listNoStyle}>
              <li>
                <p>
                  PROPOSED ITINERARY: After clarifying your trip details,
                  Thurston Rivera Luxury Travel will provide a proposed
                  itinerary subject to the determined planning fee.
                </p>
              </li>
              <li>
                <p>
                  FIRST DRAFT CHANGES: We will work with you on any first draft
                  changes if required.
                </p>
              </li>
              <li>
                <p>
                  FINAL ITINERARY: After any changes are made, you will then
                  receive your final itinerary with an invoice and other
                  important travel information. This invoice is subject to
                  change until you receive confirmation that your travel is
                  booked.
                </p>
              </li>
            </ul>
            <p>
              FINAL PAYMENT: Final payment is due as communicated or indicated
              on the invoice. If any payment is not paid by the stipulated date,
              Thurston Rivera Luxury Travel reserves the right to treat the trip
              as canceled by you in which case the T&Cs of cancellation become
              applicable.
            </p>
            <p>
              REVIEW ALL DOCUMENTS: Once payment for your trip is processed, you
              will receive i) a receipt and ii) a checklist of items for you to
              review travel documents. Please review documents carefully and
              promptly as we will not be responsible for any errors. It is your
              responsibility to review all travel documentation and alert us as
              soon as possible with any corrections. Client(s) voluntarily
              assumes full & sole responsibility for any and all risks and/or
              costs involved with failure to report such errors and/or
              omissions.
            </p>
            <p>
              PRE-EXISTING MEDICAL CONDITIONS/PERSONS WITH DISABILITIES: It is
              essential that you advise us before booking a trip if you have any
              disability or pre-existing medical condition which may affect your
              trip, or if you have any special requirements as a result of any
              disability or medical condition (including any which affect the
              booking process) so that we can assist you in considering the
              suitability of the arrangements and/or in making the booking for
              your trip. Thurston Rivera Luxury Travel will make reasonable
              efforts to accommodate requests, but cannot be responsible if ADA
              accommodations are not available. Any accommodations provided will
              be at the sole expense of the client requiring the accommodation.
              Please note that accommodations outside of the USA may not be in
              compliance with the Americans with Disabilities Act and may not
              have wheelchair accessibility.
            </p>
            <p>
              ADDITIONAL FEES AND PAYMENTS: If the scope of the initial trip
              design changes direction, an additional planning fee may be
              applicable. Some tours and airlines will require a larger deposit
              or payment in full to hold your trip. Client will be notified if a
              larger deposit is required. Group quotation prices are predicated
              on a minimum number of group members. Should the number of group
              members fall below the minimum number specified in the quotation,
              the per-person cost for the tour might be increased at the
              discretion of the Travel Provider and/or Thurston Rivera Luxury
              Travel. The Group Leader is responsible for payment of any such
              cost increase.
            </p>
            <p>
              NONREFUNDABLE: Deposits are NON-REFUNDABLE, unless stated
              otherwise in the T&Cs of the Service Provider(s).
            </p>
            <p>
              BOOKING DISMISSAL: We reserve the right to refuse a booking
              without giving any reason and shall in that event return any
              deposit received.
            </p>
            <p>
              CREDIT CARD AUTHORIZATION: While we do accept major credit cards
              including Visa, Mastercard, American Express and Discover, clients
              must provide to us a signed or written charge authorization
              agreement or click authorization for your trip transaction. Your
              authorization is a binding agreement for us to charge your card
              and as such you waive any right to chargeback in the case of
              cancellation for any cause (excepting fraud), including a Force
              Majeure event, as defined herein, and agree to refund policies and
              procedures as outlined in all T&Cs. In the event a client attempts
              to chargeback, reverse, or recollect a trip payment already made
              without the authorization of Thurston Rivera Luxury Travel, we
              reserve the right to collect all additional costs, fees and
              expenses associated with such chargeback, reversal or
              recollection, including trip planning fee, without limitation,
              attorney fees.
            </p>
            <p>
              EXCHANGE RATES: Thurston Rivera Luxury Travel quotes prices based
              on the exchange rates for the destination’s respective foreign
              currency. Exchange rates are subject to fluctuation and client’s
              bank transaction fees. It is the responsibility of the client to
              confer with their respective bank as to the total fees charged.
              The exchange rate is only fixed when full payment is made, unless
              otherwise noted on Client’s itinerary.
            </p>
            <p>
              QUOTES SUBJECT TO CHANGE: Any price that Thurston Rivera Luxury
              Travel quotes is subject to change without notice until full
              payment is made, unless guaranteed in writing with a specific
              expiration date.
            </p>
            <p>
              LATE FEES: Final payments not authorized and/or received prior to
              the due date will incur a minimum of $25 per person late fee. All
              reservations are subject to cancellation and penalties as
              described above if payments are not received on the due date. Late
              fees are not covered by the travel insurance and are always
              non-refundable.
            </p>
            <p>
              AIRLINE FEES: Due to continual changes in airline policies it is
              suggested that you inquire with your airline's website for
              up-to-date fees & information. Thurston Rivera Luxury Travel is
              NOT responsible for additional fees incurred for baggage, seating,
              etc.
            </p>
            <h4>
              Destination Risks and Requirements
              <br /> <small>ENTRY/EXIT</small>
            </h4>
            <p>
              ADVISORIES: Travel to certain destinations may involve greater
              risk than others. Thurston Rivera Luxury Travel urges clients to
              remain informed on a daily basis as to current news events, as
              well as to review travel prohibitions, warnings, announcements and
              advisories issued by the United States Government prior to booking
              a trip to international destinations. Information on conditions in
              various countries and the level of risk associated with travel to
              particular international destinations can be found at
              http://travel.state.gov. In addition, you should consult with the
              government Embassy and Consulates websites to ensure that you are
              in compliance with all requirements for admittance into that
              country as well as understanding local laws that govern travel
              within a country.
            </p>
            <p>
              BY OFFERING FOR SALE TRAVEL TO PARTICULAR DESTINATIONS, THURSTON
              RIVERA LUXURY TRAVEL DOES NOT REPRESENT OR WARRANT THAT TRAVEL TO
              SUCH POINTS IS ADVISABLE OR WITHOUT RISK, AND SHALL NOT BE LIABLE
              FOR COSTS, DAMAGES, OR LOSSES THAT MAY RESULT FROM TRAVEL TO SUCH
              DESTINATIONS. CLIENT'S PARTICIPATION CONSTITUTES ACCEPTANCE OF
              SUCH EVENTS AT CLIENT’S OWN RISK.
            </p>
            <p>
              REQUIRED INFORMATION AND DOCUMENTATION: You and any minors
              traveling with you Internationally must be in possession of a
              machine-readable passport valid for 6 months after your trip
              return date (or per specific Country requirements) along with
              applicable visas and entry requirements. Some airlines will not
              allow you to board if these requirements are not met. For
              information about passport requirements you can visit the State
              Department’s website at
              https://travel.state.gov/content/travel/en/passports.html.
            </p>
            <p>
              It is your sole responsibility to secure, carry, and/or pay for
              any and all documentation, visas, reciprocity fees, affidavits,
              immunizations, etc. that are required to be permitted entry into
              each destination. In some countries you may be subject to entry
              (reciprocity) fees and/or departure taxes/ exit fees which will be
              collected at the airports upon entry/departure by local government
              authorities. Please note that entry to any country may be refused
              even if the required information and travel documents are
              complete.
            </p>
            <p>
              Thurston Rivera Luxury Travel bears no responsibility for such
              documentation and will not be responsible for advising and/or
              obtaining required travel documentation for you, unless requested
              at an additional fee, or for any delays, damages, and/or losses
              including missed portions of your vacation related to improper
              documentation or government decisions about entry.
            </p>
            <p>
              Clients are required to immediately review all aspects of their
              trip documents to verify the following (but not limited to): all
              clients’ names, passport details, mailing address, email address,
              telephone number, date of birth, pricing, airfare,
              arrival/departure airports, accommodations, and organized
              activities on your trip documentation.
            </p>
            <ul>
              <li>
                <p>
                  <span className={classes.underline}>Visas:</span> Some
                  countries require visas to enter. Some countries require that
                  your passport have two to four blank visa/stamp pages. Without
                  a valid visa, you may be denied entry into the country. You
                  can find out if you need a visa by visiting the embassy
                  website of the country you'll be traveling to. Although you
                  can always contact us with questions, it is your
                  responsibility to ensure you have all the proper travel
                  documents, to include your visa(s).
                </p>
              </li>
              <li>
                <p>
                  <span className={classes.underline}>
                    Children Traveling with One Parent, or Someone Who is Not a
                    Parent/Legal Guardian, or Children Traveling in a Group:
                  </span>{" "}
                  Foreign border officials may require custody documents and/or
                  notarized written consent from the other parent/both parents
                  not traveling with the child. Requirements vary by country, so
                  if this applies to anyone in your traveling party, please
                  research the requirements and leave prepared.
                </p>
              </li>
              <li>
                <p>
                  <span className={classes.underline}>
                    Official Identification:
                  </span>
                  When travelling domestically or internationally, the U.S.
                  Transportation Security Administration (TSA) and U.S.
                  Department of Homeland Security (DHS) advise that everyone
                  carry at least two forms of acceptable identification in order
                  to board a flight. Examples: DHS designated enhanced driver’s
                  license, USA Passport, a foreign government passport. The
                  name, date of birth and gender that appears on the
                  identification card must exactly match the same such data that
                  is listed on airline ticket(s) and booking records. For more
                  information you can visit the TSA website at
                  https://www.tsa.gov/travel/security-screening/identification.
                  Client is required to verify the accuracy of every client’s
                  LEGAL first & last names. It is mandatory that client names be
                  identical to the LEGAL first and last names and identical to
                  the names as they appear on booking and travel documents.
                </p>
              </li>
              <li>
                <p>
                  <span className={classes.underline}>Health:</span> Recommended
                  inoculations for travel may change and you should consult your
                  medical provider for current recommendations before you
                  depart. It is your responsibility to ensure that you meet all
                  health entry requirements, obtain the recommended
                  inoculations, take all recommended medication, and follow all
                  medical advice in relation to your trip. Inoculation
                  requirements can be found on the Center for Disease Control
                  website at https://www.cdc.gov/.
                </p>
                <ul>
                  <li>
                    <p>
                      Disinsection: Most countries reserve the right to
                      disinsect aircraft if there is a perceived threat to
                      public health, agriculture, or environment. While this is
                      not a common practice, we want you to be aware that it is
                      a possibility. This process includes the following: (1)
                      spray the aircraft cabin with an aerosolized insecticide
                      while passengers are on board or (2) treat the aircraft's
                      interior surfaces with a residual insecticide while
                      passengers are not on board. For more information you can
                      visit the U.S. Department of transportation website at:
                      https://www.transportation.gov/airconsumer/spray.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Change and Cancellation Policy</h4>
            <p>
              As described above, planning your trip takes extensive time and
              research and Thurston Rivera Luxury Travel may be required to pay
              all Travel Providers well in advance of your vacation date. All
              Travel Providers have their own change and cancellation policies,
              which apply to your trip. All cancellations must be received by
              Thurston Rivera Luxury Travel in writing. If you cancel a trip for
              any reason there will be no refunds on planning or service fees
              issued by Thurston Rivera Luxury Travel, and you will only receive
              a refund or credit voucher, if any, as provided by Travel
              Providers and in accordance with the Travel Provider’s terms and
              conditions.
            </p>
            <p>
              THIRD PARTY PENALTIES: A ‘trip’ often consists of multiple
              components, each of which may carry its own cancellation penalties
              (example: an airline ticket, a pre-trip hotel night, a multi-day
              adventure vacation by a Travel Provider, a post-trip extension
              designed by Thurston Rivera Luxury Travel, all of which may be
              subject to a different set of cancellation policies). Upon
              inquiry, you will be provided with the individual cancellation
              policies to the extent that these are available in a distributable
              format, for your records, but Thurston Rivera Luxury Travel is not
              responsible for this policy distribution. Clients are responsible
              for obtaining the applicable detailed policies by contacting
              Thurston Rivera Luxury Travel and requesting a copy (if available,
              otherwise it will be summarized in the proposal).
            </p>
            <p>
              THIRD PARTY REFUND: Upon receipt of your cancellation request,
              Thurston Rivera Luxury Travel will follow industry procedures for
              any applicable refunds as outlined in the Travel Provider’s terms
              and subject to their review. If you are entitled to a refund,
              please note that the Travel Provider is responsible for this
              refund, not Thurston Rivera Luxury Travel. Generally, any trip
              reservation cannot be refunded if they are partially used. We are
              not responsible for a Travel Provider’s failure to pay a refund.
              Money will be refunded to the original payor in the original form
              of payment.
            </p>
            <p>
              NONREFUNDABLE FEES: In addition to the terms and conditions of our
              suppliers, any refund will be less our $150 per person
              non-refundable planning fee and any non-refundable deposits.
            </p>
            <p>
              CHANGES AND CANCELLATION BY THE TRAVEL PROVIDER: We will inform
              you as soon as reasonably possible if the Travel Provider or tour
              operator needs to make a significant change to your confirmed
              booking or to cancel. We will also liaise between you and the
              Travel Provider in relation to any alternative arrangements
              offered by the operator but we will have no further liability to
              you.
            </p>
            <p>
              During local or national holidays, certain facilities such as
              museums, sightseeing trips and shopping may be limited or
              unavailable. In such instances itinerary changes are made by
              Travel Providers seeking to reduce inconvenience to customers.
              Such changes are deemed not to be a major change, and no
              compensation will be payable to customers. Holidays, closing days
              and other circumstances may necessitate a change of the day of the
              week for scheduled regional meals, sightseeing or other
              activities. If you feel your enjoyment might be diminished by any
              of these circumstances please check with the respective national
              tourist office before selecting a specific departure date.
            </p>
            <h4>
              Force Majeure
              <br /> <small>UNFORESEEABLE CIRCUMSTANCES</small>
            </h4>
            <p>
              We cannot accept liability, provide any refund, or pay any
              compensation where the performance or prompt performance of our
              contractual obligations is prevented or affected, or you otherwise
              suffer any loss, injury, death, inconvenience or damage as a
              result of circumstances amounting to “force majeure”. “Force
              majeure” means any event or circumstances which we or the supplier
              of the services in question could not foresee or avoid. Such
              events and circumstances may include, acts of God, actual or
              threatened, war, insurrection, riots, strikes, civil action,
              decisions by governments or governing authority, technical or
              maintenance problems with transport, changes of schedules or
              operational decisions of air carriers, terrorist activity or the
              threat thereof, industrial action, natural or nuclear activity,
              epidemic, pandemic, illness, physical injury, quarantine, medical
              or customs or immigration regulation, delay, or cancellation,
              adverse weather conditions, fire and all similar events outside
              our control.{" "}
            </p>
            <p>
              FEAR OF TRAVEL: Furthermore, there will be no refunds due to fear
              of travel from actual or threatened terrorist, health, political,
              pandemic or other similar events. It is important to note that
              fear of travel, travel advisories and destination being
              inaccessible are not covered risks.
            </p>
            <p>
              NON-OPERATION OF GROUP TOURS: All group tours are based on a
              minimum number of participants. Thurston Rivera Luxury Travel
              makes every effort to ensure that tours meet their minimum
              requirements. However, if the tour drops below the minimum number
              of participants cancellation of the tour may occur at the sole
              discretion of Travel Provider or Thurston Rivera Luxury Travel. In
              such case, clients will be advised as soon as possible. Travel
              Provider or Thurston Rivera Luxury Travel reserves the right to
              change the departure date. We may offer alternative tour dates or
              other travel arrangements. You may choose to accept these
              arrangements or to cancel your trip, in which case a full refund
              will be provided. Any air cancellation will be in accordance with
              the terms of the carrier and Thurston Rivera Luxury Travel will
              not be liable for the carrier’s refusal to make any refund
              whatsoever. In such case Thurston Rivera Luxury Travel will not be
              liable for any additional costs incurred outside of the trip
              prices such as visa and passport fees, travel insurance or any
              other purchases made by the client in anticipation of the tour.
            </p>
            <p>
              CHANGES TO THE ITINERARY/RATES: The right is reserved to
              substitute hotels of similar category (if available) or change
              schedules without prior notice should circumstances so demand. In
              the event of a change in the itinerary necessitated by factors or
              conditions beyond the actual control of Thurston Rivera Luxury
              Travel no refund can be made, nor will credit be allowed, or
              refund given for any services provided in the itinerary should any
              such services not be utilized. We reserve the right to alter any
              itinerary, arrangement(s), or date(s), if it becomes necessary or
              advisable, and each client agrees to pay additional expenses
              required by such alternative(s), if any. All prices are subject to
              change without notice. Availability of refunds for air
              transportation included in a trip and additional transportation
              costs for a client who does not utilize an air transportation part
              of the service will vary with the type of transportation and the
              point at which transportation is not used and shall be made at the
              sole discretion of Thurston Rivera Luxury Travel.
            </p>
            <p>
              All rates quoted in the description(s)/itinerary(ies)/brochure(s)
              are based on the current carrier tariffs and current international
              exchange rates and are subject to adjustment without prior
              notification in the event of changes therein, and any increase
              resulting from such adjustment shall not modify the cancellation
              provisions in the tour description/itinerary/brochure or the Trip
              Reservations and Details from accompanying this disclosure notice.
            </p>
            <p>
              LIMITATIONS: The issuance of any tickets, reservations, or
              bookings by Thurston Rivera Luxury Travel is done on the express
              condition that: 1. Thurston Rivera Luxury Travel shall not be
              responsible for any changes in fares, rates, charges, or prices
              initiated by the carrier(s) or Travel Providers, and 2. Thurston
              Rivera Luxury Travel shall not be responsible for any damages
              resulting from cancellations, changes, or disruption of any
              services and/or for refunds of monies already paid or transmitted
              to any carrier or Travel Provider. Client’s initial retention of
              tickets, reservations, or bookings after issuance shall constitute
              a consent by client, on his/her behalf and on behalf of his/her
              companions, to the above. Nothing agreed to herein by the client
              is meant to interfere with client’s legal rights against any
              carrier(s) or Travel Providers.
            </p>
            <p>
              AIRLINE SCHEDULE CHANGES AND CANCELLATIONS: Occasionally airlines
              change flight schedules & may even cancel flights entirely. These
              changes are beyond Thurston Rivera Luxury Travel’s control. In the
              event that such a situation occurs; Thurston Rivera Luxury Travel
              will do it’s very best to assist you with finding best possible
              alternate option(s). If the flight time change is minor (2 hours
              or less) the airline will automatically make the change (airline
              policies/rules entitle them to legally do so). Thurston Rivera
              Luxury Travel will notify you of major changes. Please Note: there
              may be additional costs to re-book a new flight should the airline
              cancel or make a major change to your original flight itinerary.
              Thurston Rivera Luxury Travel is NOT responsible for any
              additional costs or fees imposed by the airlines.
            </p>
            <p>
              RE-CONFIRM YOUR FLIGHT: Thurston Rivera Luxury Travel advises you
              personally to reconfirm your flight schedule within 24 hours prior
              to departure directly with the airline in case of any last-minute
              changes or delays. Most airlines allow you to check in online 24
              hours prior to departure. Thurston Rivera Luxury Travel is not
              responsible for changes that may occur within 24 hours of original
              flight departure time.
            </p>
            <h4>
              Trip Protection Insurance
              <br /> <small>STRONGLY RECOMMENDED</small>
            </h4>
            <p>
              It is the client’s responsibility to protect their purchases. For
              this reason, Travel Protection Coverage is strongly recommended.
              Such plan should cover Trip Cancellation or Interruption, Cancel
              for Any Reason if available, Medical Expense, Emergency
              Evacuation/Repatriation, and Baggage. Travel protection plans can
              help protect you in the event of loss of non-refundable trip
              deposits and payments that result from cancellation or trip
              interruption (due to a COVERED REASONS such as injury or illness
              before or during the trip). It also helps with reimbursement for
              medical emergency costs (including very costly medical evacuation
              costs), missed connections and baggage delay or loss.
            </p>
            <p>
              TECHNICAL QUESTIONS: Thurston Rivera Luxury Travel is not
              qualified to answer technical questions about the benefits,
              exclusions, and conditions of travel insurance plans. Thurston
              Rivera Luxury Travel cannot evaluate the adequacy of the
              prospective insured's existing insurance coverage. If you have any
              questions about your travel protection, it is advised to call your
              insurer or your insurance agent or broker.
            </p>
            <p>
              DENIED ENTRY: Certain countries and certain suppliers have a
              requirement for foreign visitors to have valid medical insurance
              on entry. Thurston Rivera Luxury Travel cannot be held responsible
              for denied entry if a client is unable to provide details to
              authorities of insurance or denial of entry for any reason.
            </p>
            <p>
              DECLINING PROTECTION: Declining to purchase an adequate travel
              protection plan could result in the loss of your travel cost
              and/or require more money to correct the situation. You also
              acknowledge that without this coverage, there may be no way to
              recoup any losses, costs or expenses incurred. If you choose to
              travel without adequate coverage, we will not be liable for any of
              your losses howsoever arising, for which trip protection plan
              coverage would otherwise have been available.
            </p>
            <h4>
              Liability <br /> <small>RELEASE WAIVER</small>
            </h4>
            <p>
              Client hereby understands, acknowledges, and agrees that Thurston
              Rivera Luxury Travel, LLC, its owners, officers, members,
              employees, agents, representatives, affiliates, vendors, and
              independent contractors (collectively “Thurston Rivera Luxury
              Travel”) does not own or operate any entity which is to or does
              provide goods or services for the Trip including without
              limitation, for example, partnership with, or ownership or control
              over hotels or other lodging facilities, airline, vessel, bus, van
              or other transportation companies, local ground operators,
              providers or organizers of optional or included excursions or
              equipment used thereon, food service or entertainment providers,
              etc. All such persons and entities are independent contractors
              that Thurston Rivera Luxury Travel works with as such. Client
              therefore release and hold harmless Thurston Rivera Luxury Travel,
              its owners, officers, members, employees, agents, affiliates, and
              vendors for any negligent or willful act or failure to act of any
              such person or entity, or of any other third party, and you agree
              to and shall not make any claims against Thurston Rivera Luxury
              Travel for any such actions or omission by Thurston Rivera Luxury
              Travel or any such third parties. Without limitation, Thurston
              Rivera Luxury Travel is not responsible for any injury, loss, or
              damage to your person or property, death, delay or inconvenience
              in connection with the provision of any goods or services
              occasioned by or resulting from, but not limited to, acts of God,
              acts of government, force majeure, acts of war or civil unrest,
              insurrection or revolt, strikes or other labor activities,
              criminal or terrorist activities of any kind, or the threat
              thereof, overbooking or downgrading of accommodations, structural
              or other defective conditions in hotels or other lodging
              facilities, mechanical or other failure of airplanes or other
              means of transportation or for any failure of any transportation
              mechanism to arrive or depart timely or safely, dangers associated
              with or bites from animals, pests or insects, marine life or
              vegetation of any sort, dangers incident to recreational
              activities such as zip lining, snorkeling or scuba diving, paddle
              boarding, horseback riding, surfing, swimming, kayaking, sailing,
              canoeing, rafting, hiking, bicycling, rock climbing, etc.,
              sanitation problems, food poisoning, lack of access to or quality
              of medical care, difficulty in evacuation in case of a medical or
              other emergency, illness, epidemics, pandemics, or the threat
              thereof or for any other cause beyond the reasonable control of
              Thurston Rivera Luxury Travel. Thurston Rivera Luxury Travel
              reserves the right to change hotels, the itinerary, or other
              features of the Trip if Thurston Rivera Luxury Travel believes it
              will enhance the safety, comfort or enjoyment of the Trip for you
              and the other participants, but in each case, if feasible, with
              Client’s prior consent.
            </p>
            <p>
              ASSUMPTION OF RISK/WAIVER: Client is aware that travel such as
              client is undertaking on the Trip may involve hazardous
              activities, some in remote areas of the world. Inherent hazards
              and risks include, but are not limited to, risk of injury or death
              from: motor vehicles collisions, animals, roadway hazards, slips,
              and falls, consumption of alcoholic beverages, tainted food, or
              non-potable water; exposure to the elements, including heat, cold,
              sun, water, and wind; client’s own negligence and/or the
              negligence of others, including tour guides, other guests,
              Thurston Rivera Luxury Travel, LLC, and its employees, agents
              and/or representatives; attack by or encounter with insects,
              reptiles, and/or animals; accidents or illness occurring in remote
              places where there are no available medical services; fatigue,
              chill, overheating, and/or dizziness; known or unknown medical
              conditions, physical excursion for which you are not prepared or
              other such accidents; the negligence or lack of adequate training
              of any third-party providers who seek to assist with medical or
              other help either before or after injuries have occurred; accident
              or illness without access to means of rapid evacuation or
              availability of medical supplies or services; and the adequacy of
              medical attention once provided.
            </p>
            <p>
              ACCEPT UNKNOWN AND UNCERTAINTY: Client understands the description
              of these risks is not complete and that unknown or unanticipated
              risks may result in injury, illness, or death. In order to partake
              of the enjoyment and excitement of this trip, client is willing to
              accept the risks and uncertainty involved as being an integral
              part of travel. Client hereby accepts and assumes full
              responsibility for any and all risks of illness, injury or death
              and of the negligence of Thurston Rivera Luxury Travel and agrees
              to and shall hold harmless and fully release Thurston Rivera
              Luxury Travel from any and all claims associated with the trip,
              including any claims of third party negligence and you hereby
              covenant not to sue Thurston Rivera Luxury Travel for any such
              claims or join any lawsuit or action that is suing Thurston Rivera
              Luxury Travel. This agreement also binds your heirs, legal
              representatives and assigns.
            </p>
            <h4>
              Indemnification <br /> <small>RELEASE WAIVER</small>
            </h4>
            <p>
              Client agrees to and shall indemnify and hold harmless Thurston
              Rivera Luxury Travel, LLC, and each of our officers, directors,
              employees and agents (collectively “Thurston Rivera Luxury
              Travel”), from any expenses, losses, liabilities, damages,
              judgments, settlements and costs (collectively, “damages”)
              involved with or incurred by Thurston Rivera Luxury Travel
              (including, without limitation, reasonable attorneys’ fees and the
              advancement of same) with respect to any claims, law suits,
              arbitrations, or other causes of action, which result, directly or
              indirectly, from: (i) Client’s breach or violation, or threatened
              breach or violation, of this Agreement and (ii) Any damage caused
              by client while participating in the trip.
            </p>
            <h4>
              Governing Law
              <br /> <small>SUBMISSION TO JURISDICTION</small>
            </h4>
            <p>
              This Agreement and all attachments hereto and the rights of the
              parties hereunder shall be governed by and construed in accordance
              with the laws of the State of California, exclusive of conflict or
              choice of law rules. Any claims shall be brought in a court
              located in California. All client claims must be submitted in
              writing and received by Thurston Rivera Luxury Travel no later
              than 60 days after completion of the Thurston Rivera Luxury Travel
              vacation. Client claims not submitted and received within this
              time shall be deemed to be waived and barred.
            </p>
            <h4>Entire Agreement & Severability</h4>
            <p>
              This agreement, including any other documents, including invoices,
              we provide you, constitutes the entire agreement and it supersedes
              all prior or contemporaneous communications and proposals, whether
              electronic, oral, or written, with respect to Thurston Rivera
              Luxury Travel. If any provision of these Terms shall be unlawful,
              void, or for any reason unenforceable, then that provision shall
              be deemed severable from these Terms and shall not affect the
              validity and enforceability of any remaining provisions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
