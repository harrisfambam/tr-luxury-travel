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

import styles from "assets/jss/material-kit-react/views/privacyPolicyStyle.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function PrivacyPolicy(props) {
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
            <h4 className={classes.center}>THURSTON RIVERA LUXURY TRAVEL, LLC PRIVACY POLICY</h4>

            <h5>Last modified: November 1, 2019</h5>

            <h6 className={classes.center}>PLEASE REVIEW THIS POLICY CAREFULLY</h6>

            <p>
              The following describes how THURSTON RIVERA LUXURY TRAVEL, LLC (TRLT) ” “We,” “Our” or “Us”)
              disseminates information you provide through TRLUXURYTRAVEL.COM and its sub-domains and
              affiliated sites, as well as TRLT pages and accounts on Facebook®, LinkedIn®, Google Plus®, Instagram®
              and YouTube® (the “Sites). If you ever have questions about this Privacy Policy, please contact TRLT at
              the information below.
            </p>
            <p>
              Please also review the full Terms and Conditions of Use, which also govern your use of the Sites.
            </p>
            <p>
              Unless TRLT expressly notes otherwise, we do not collect personally identifiable information from users
              of our Sites. When you visit TRLT Sites, some information about your computer hardware and software
              is inherently automatically collected, such as your IP address, domain name, browser type, access time
              and referring website addresses. We typically do not use this information for any purpose, an example
              of when TRLT may use this information is in implementing improvements and analyzing the Sites and for
              troubleshooting purposes. TRLT also utilize this information to monitor and improve services and to
              ensure that your use of the Sites is in compliance with TRLT Terms of Use.
            </p>
            <h6 className={classes.center}>COLLECTION OF PERSONAL INFORMATION</h6>
            <ul>
              <li>
                <p>The Website may collect personal information from you such as your name or email address.
                For example, you may voluntarily submit information to the Website by leaving a comment,
                  subscribing to a newsletter, or submitting a contact form.</p>
              </li>
              <li>
                <p>Information We Collect from Others: The Website may receive information about you from
                other sources. For example, if you use a third-party software through the site, they may transfer
                  information to us for fulfillment.</p>
              </li>
              <li>
                <p>Automatically Collected Information: The Website automatically collects certain information
                about you and the device with which you access the Website. For example, when you use the
                Website, The Website will log your IP address, operating system type, browser type, referring
                website, pages you viewed, and the dates/times when you accessed the Website. The Website
                  may also collect information about actions you take when using the Website, such as links clicked.</p>
              </li>
              <li>
                <p>Cookies: The Website may log information using cookies, which are small data files stored on
                your browser by the Website. The Website may use both session cookies, which expire when
                you close your browser, and persistent cookies, which stay on your browser until deleted, to
                  provide you with a more personalized experience on the Website.</p>
              </li>
            </ul>
            <h6 className={classes.center}>
              WHAT INFORMATION DO WE COLLECT AND HOW IS IT USED
            </h6>
            <ul>
              <li>
                <p>
                  The Website may use the information collected in the following ways:
                  </p>
              </li>
              <li>
                <p>
                  To operate and maintain the Website;
                  </p>
              </li>
              <li>
                <p>To send you promotional information, such as newsletters. Each email promotion will provide
                  information on how to opt-out of future mailings;</p>
              </li>
              <li>
                <p>To send you administrative communications, such as administrative emails, confirmation
                  emails, technical notices, updates on policies, or security alerts;</p>
              </li>
              <li>
                <p>
                  To respond to your comments or inquiries;
                  </p>
              </li>
              <li>
                <p>
                  To provide you with user support;
                  </p>
              </li>
              <li>
                <p>
                  To track and measure advertising on the Website; or,
                  </p>
              </li>
              <li>
                <p>
                  To protect, investigate, and deter against unauthorized or illegal activity.
                  </p>
              </li>
            </ul>
            <h6 className={classes.center}>
              THIRD-PARTY USE OF PERSONAL INFORMATION
            </h6>

            <p>The Website may share your information with third parties when you explicitly authorize us to share
            your information. Additionally, the Website may use third-party service providers to service various
            aspects of the Website. Each third-party service provider’s use of your personal information is dictated
            by their respective privacy policies. The Website currently uses the following third-party service
            providers:</p>
            <p>Except when required by law, TRLT will not sell, distribute, or reveal your email addresses or other
            personal information without your consent; however, TRLT may disclose or transfer personal
            information collected through the Website to third parties who acquire all or a
            portion of our business, which may be the result of a merger, consolidation, or purchase of all or a
            portion of our assets, or in connection with any bankruptcy or reorganization proceeding brought by or
            against us.</p>
            <ul>
              <li>
                <p>
                  Travel Contact, ADX, Virtuoso
                  </p>
              </li>
              <li>
                <p>At this time, your personal information is not shared with any other third-party applications.
                  This list may be amended from time to time in the Website’s sole discretion.</p>
              </li>
            </ul>
            ]
            <h6 className={classes.center}>
              ANONYMOUS DATA
            </h6>

            <p>From time to time, TRLT may use anonymous data, which does not identify you alone, or when
            combined with data from other parties. This type of anonymous data may be provided to other parties
            for marketing, advertising, or other uses. Examples of this anonymous data may include
            analytics or information collected from cookies.</p>

            <h6 className={classes.center}>
              COOKIES: WHAT ARE THEY, AND WHY ARE THEY NEEDED
            </h6>

            <p>A cookie is a data text file sent from a website to your browser, for the purpose of identifying the user
            and allows access to portions of the website, thus alleviating the need to continually log in with your
            username and password. Cookies may be stored within your system. To the extent TRLT uses cookies,
            we can only access information from a cookie sent by one of the Sites, not other websites. TRLT may use
            cookies to personalize your visit to Site, because tracking usage allows us to best determine the needs of
            our customers and advertisers.</p>

            <h6 className={classes.center}>
              OUR POLICY WITH MINORS
            </h6>

            <p>TRLT Sites are not intended for individuals under the age of 18. If you are under 18, you may only use
            the Sites under the supervision of a parent or guardian. We do not collect or maintain information from
            anyone known to be under the age of 18, and no part of this website is designed to attract anyone
            under the age of 18. We do not sell products or services intended for purchase by children. If TRLT
            discovers or are otherwise notified that we have received any such information from a child in violation
            of this policy, we will delete that information.</p>

            <h6 className={classes.center}>
              USE OF YOUR PERSONAL INFORMATION
            </h6>

            <p>If you do choose to provide your personal information, TRLT will not willingly share your information
            with companies outside our organization, except as described in this Privacy Policy. You may at times
            receive communications from us related to products and services that we believe might interest you.
            While we believe these services may enhance your time spent at the Sites, you will at all times have the
            option and ability to opt out from receiving these communications by specifically choosing to do so via a
            link which will be provided within emails that we send to you. TRLT may disclose total aggregated user
            statistics in order to describe our services to potential advertisers, other third parties, affiliate
            companies, and for other lawful purposes. The information we gather from you may be used in several ways, either now or
            in the future, to gain a better understanding of our Sites’ users and their usage pattern as a whole, for
            site administration and troubleshooting, to process transactions, contest entries and other matters you
            initiate, to identify preferences in content and advertising, to target editorial, advertising or other
            content (such as promotions, special offers or other content) we think might be of interest to you. We
            may also use the information we gather from you to communicate changes and improvements to our
            website or any registration you have made.</p>
            <p>TRLT does not give away, sell, rent or lease any users’ personally identifiable information to any
            merchant, advertiser or web publisher. However, non-personally identifiable user information (such as
            usage pattern, browser type and your computer) may be shared with third party businesses or
            advertisers with which we have a business or contractual relationship. We reserve the right to disclose
            personal information when needed to comply with the law or a legal process, cooperate with
            investigations of purported unlawful activities, to identify persons violating the law, in connection with
            the sale of part or all of TRLT or its affiliates assets, or to enforce our Terms &amp; Conditions. Please keep in
            mind that if you disclose personally identifiable information in a public manner through the Sites, this
            information may be collected and used by others accessing those portions of the Sites. We do not
            monitor information you disclose on the Sites nor do we accept any liability associated with your
            voluntary disclosure of the same. You are responsible for reviewing the privacy statements and policies
            of other websites you choose to link to or from the Sites, so that you may understand how those sites
            collect, use and store your information. TRLT is not responsible for the privacy statements, policies or
            content of any other websites. Websites containing co-branding (referencing our name and a third
            party’s name) contain content delivered by the third party and not us.</p>

            <h6 className={classes.center}>
              NOTICE OF PRIVACY RIGHTS TO RESIDENTS OF CALIFORNIA
            </h6>

            <p>California law requires that TRLT provides you with a summary of your privacy rights under the
            California Online Privacy Protection Act (the “Act”) and the California Business and Professions Code. As
            required by the Act, we will provide you with the categories of personally identifiable information that
            we collect through this website and the categories of third-party persons or entities with whom such
            personally identifiable information may be shared for direct marketing purposes at your request.
            California law requires us to inform you, at your request: (1) the categories of personally identifiable
            information we collect and what third parties we share that information with; (2) the names and
            addresses of those third parties; and (3) examples of the products marketed by those companies. The
            Act further requires us to allow you to control who we can and cannot share that information with. To
            obtain this information, please send a request by email or standard mail to the address found below.
            When contacting TRLT
            please indicate your name, address, email address, and what personally identifiable information you do
            not want us to share with third parties. Please allow thirty (30) days for a response. Also, please note
            that there is no charge for controlling the sharing of your
            personally identifiable information or requesting this notice.</p>

            <h6 className={classes.center}>
              LIMITATIONS
            </h6>

            <p>By using the Sites you agree that WE are not responsible for: (i) any disclosure of your personal
            information made by you to a third party through your use of the Sites; (ii) any disclosure of your
            personal information obtained illegally from us; or (iii) any accidental disclosure of your personal
            information made by us.</p>

            <h6 className={classes.center}>
              POLICY CHANGES
            </h6>

            <p>Any modifications will be effective immediately when we post them. We will take steps to notify users
            of any modifications, however, you are responsible for reviewing any modified terms. When we update
            our Policy, we will note the date of revisions at the top of the Policy. Your continued use of a Site
            following any changes means you accept and agree to any changes. For your convenience and future
            reference, the date of the Privacy Policy is included so that you can compare any different versions of
            the Privacy Policy to determine any changes made to the Privacy Policy.</p>
            <h6 className={classes.center}>
              YOUR COMMENTS AND CONCERNS
            </h6>

            <p>This website is operated by THURSTON RIVERA LUXURY TRAVEL, LLC at 1267 Willis St. suite 200,
            Redding, CA 96001. All other feedback, comments, requests for technical support and other
            communications relating to the Sites should be directed to: explore@trluxurytravel.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}