import { useIntl } from "react-intl";
import Link from "../components/global/Link";
import {
  COMPANY_ADDRESS,
  COMPANY_COUNTRY,
  COMPANY_DATA_PROTECTOR,
  COMPANY_POSTCODE,
  COMPANY_NAME,
  withBaseURL,
  COMPANY_ID,
} from "../lib/config";
import RouteContainer from "../ui/RouteContainer";

const makeUrlPretty = (url: string) =>
  decodeURI(url.includes("://") ? url : withBaseURL(url))
    .replace("http://", "")
    .replace("https://", "");

const getDomain = (url: string) => {
  const newUrl = decodeURI(url.includes("://") ? url : withBaseURL(url))
    .replace("http://", "")
    .replace("https://", "");

  if ((newUrl.match(/\./g) || []).length > 2) {
    return newUrl.substring(newUrl.indexOf(".") + 1);
  }

  return newUrl;
};

const PrivacyRoute = () => {
  const intl = useIntl();

  const routeTitle = intl.formatMessage({ id: "privacy_policy" });
  const routeDescription = intl.formatMessage({
    id: "privacy_policy_description",
  });

  const prettyUrl = getDomain(withBaseURL());

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="privacy"
      className="content-width"
    >
      <div className="content">
        <h1>{routeTitle}</h1>
        <h2>About this notice</h2>
        <p>
          {COMPANY_NAME} is committed to protecting the privacy and security of
          your personal information. This privacy notice describes how we
          collect and use personal information about you in accordance with data
          protection law. Please read it carefully.
        </p>
        <p>
          Data protection law says that the personal information we hold about
          you must be:
        </p>
        <ul className="list">
          <li>Used lawfully, fairly and in a transparent way.</li>
          <li>
            Collected only for valid purposes that we have clearly explained to
            you and not used in any way that is incompatible with those
            purposes.
          </li>
          <li>
            Relevant to the purposes we have told you about and limited only to
            those purposes.
          </li>
          <li>Accurate and kept up to date.</li>
          <li>
            Kept only as long as necessary for the purposes we have told you
            about.
          </li>
          <li>Kept securely</li>
        </ul>
        <p>
          If you have any questions about this notice or how we collect and use
          personal information about you please contact us.
        </p>
        <ol className="list big">
          <li>
            <h2>Information about us</h2>
            <ol className="list">
              <li>
                We are {COMPANY_NAME}. Our registered office is at{" "}
                {COMPANY_ADDRESS}, {COMPANY_POSTCODE} {COMPANY_COUNTRY} and our
                registered company number is {COMPANY_ID}.
              </li>
              <li>
                We also have a group company (Timeling Services Limited) which
                we share data with in collection with our activities. This
                privacy notice also applies to the activities of Timeling
                Services Limited.
              </li>
              <li>
                If you have any questions, our contact details are set out on
                our Contact page on our website, or using the contact details
                set out in our app and you may also write to us at our
                registered office address above or email{" "}
                <Link href={`mailto:contact@${prettyUrl}`}>
                  contact@{prettyUrl}
                </Link>{" "}
                .
              </li>
            </ol>
          </li>
          <li>
            <h2>Account information and other correspondence</h2>
            <ol className="list">
              <li>
                <b>When you create an account with us </b>(or someone does so on
                your behalf) there will be personal information about you
                relating to that account such as your name, contact details,
                profile details, and potentially correspondence with us about
                your account.
              </li>
              <li>
                <b>We need certain information</b> to set up your account and
                you must provide this in order to have an account with us, if
                you do not, you will not be able to create or maintain an
                account. Mandatory information fields are generally set out when
                you are setting up an account, but these will normally include
                the following information:
                <ol className="list">
                  <li>Your name.</li>
                  <li>Your phone number with country code.</li>
                  <li>Your date of birth.</li>
                  <li>The gender you identify as.</li>
                  <li>Your height.</li>
                  <li>At least two photos of you.</li>
                  <li>
                    At least three (3) areas of interest selected from a list of
                    options we provide.
                  </li>
                  <li>Your payment details.</li>
                </ol>
              </li>

              <li>
                <b>When you create an account with us</b> you may add extra
                information or preferences to your profile.
              </li>

              <li>
                <b>Some of the information that you choose to provide us</b> as
                set out in the paragraphs above may be considered “special”,
                “special category” or “sensitive” in certain jurisdictions, for
                example your ethnicity, sexual orientation or religious beliefs.
                By choosing to provide this information, you consent to our
                processing of that information. You may withdraw this consent by
                removing this information from your account at any time or by
                closing your account. Please ensure you do not provide any
                information of this type which you do not want to be visible on
                your profile.
              </li>

              <li>
                <b>Other optional profile information. </b>You can also upload
                more information about yourself, such as your profession, star
                sign, whether you have children, education level, university
                attended, information about events you have attended, and
                answers to profile questions. We also have free text fields for
                your profile and information you provide in them will be
                displayed in your profile. If you do choose to add this
                information to your account, you consent to our processing of
                that information. You may withdraw this consent by removing this
                information from your account at any time.
              </li>
              <li>
                <b>Account recovery. </b>If you provide your email address, we
                will use this for account recovery purposes.
              </li>
              <li>
                <b>Chatting and interactions through your account. </b>
                Please ensure that when you use any chat or other communication
                features that you do not share any personal information you do
                not want to be seen by recipients of that chat or interaction.
                We hold your chat history in order to provide the chat
                functionality of our service, and to resolve any issues or
                disputes in relation to user interactions. We also keep records
                of blocking and reporting (along with the reasons given) in
                order to action those requests and enforce our terms and
                conditions.
              </li>
              <li>
                We use this information to help us improve the service we can
                give you. For example, by letting us know the gender you are
                interested in meeting, we can show you relevant matches. If you
                do not include this information, you will appear in future (or
                no) searches and you may have fewer (or no) search results. This
                kind of data also helps our matching logic prepare as curated
                experience for you as possible.
              </li>
              <li>
                <b>Other correspondence or interaction</b> (for example by
                email, telephone, post, SMS or via our website or app) between
                you and us, will include personal information (such as names and
                contact details) in that correspondence. This may include
                enquiries, reviews, follow-up comments or complaints lodged by
                or against you and disputes with you.
              </li>
              <li>
                <b>Social media</b>. If we engage with you on social media, we
                may use information you share with us (including your social
                media handle or profile) or which is available from your account
                to inform our correspondence with you.
              </li>
              <li>
                <b>Information we receive from others</b>. As well as
                information that you give us directly, we may also collect
                information about you from others. For instance, this might
                happen if another user contact us about you.
              </li>
              <li>
                <b>Call information. </b>We may also collect details of phone
                numbers used to call our organisation and the date, time and
                duration of any calls. Please note that if we record your calls
                to or from us, we will inform you of this.
              </li>
              <li>
                <b>Why we use this information. </b>We will keep and use that
                information to administer your account (if applicable), to
                comply with any legal requirements for us to maintain certain
                records or carry out certain verifications, and/or for our
                legitimate interests in preventing fraud, dealing with a
                complaint or enquiry and administering services we offer, as
                well as to review and improve our offerings, including
                troubleshooting, data analysis, testing, research, statistical
                and survey purposes.
              </li>
              <li>
                <b>Where your information relates to an account</b>, it is kept
                for a period of up to seven (7) years after your account is
                closed to enable us to deal with any enquiries or claims and as
                required for tax purposes.
              </li>
              <li>
                <b>Payment information</b> is collected by our payment card
                processing provider and is retained by them in accordance with
                their policies. For more information, please see their
                information available during the payment process.
              </li>
              <li>
                If your information is on social media, it will be retained in
                accordance with the relevant social media platform&rsquo;s
                policies. Any other information set out above such as initial
                enquiries or correspondence which doesn't relate to a customer
                is kept for seven (7) years from the last point of contact with
                them.
              </li>
            </ol>
          </li>
          <li>
            <h2>Why else do we use your information</h2>
            <ol className="list">
              <li>
                <b>Common uses of your information. </b>We will only use your
                personal information when the law allows us to do so. We use
                optional information you upload to your account (and in limited
                other circumstances) because you have consented to it. We use
                your other information in the ways set out in this notice
                because:
                <ol className="list">
                  <li>
                    we need to administer your account and provide our services
                    to you.
                  </li>
                  <li>we need to comply with a legal obligation.</li>
                  <li>
                    it is necessary for our legitimate interests (or those of a
                    third party) and your interests and rights do not override
                    those interests.
                  </li>
                  <li>
                    we need to protect your interests (or someone else's
                    interests) or where it is needed in the public interest
                    (although these circumstances are likely to be rare).
                  </li>
                </ol>
              </li>
              <li>
                <b>Change of purpose. </b>We will only use your personal
                information for the purposes for which we collected it as set
                out in this notice, unless we reasonably consider that we need
                to use it for another reason and that reason is compatible with
                the original purpose. If we need to use your personal
                information for an unrelated purpose, we will notify you and we
                will explain the legal basis which allows us to do so.
              </li>
            </ol>
          </li>
          <li>
            <h2>Marketing</h2>
            <ol className="list">
              <li>
                We may collect your name and contact details (such as your email
                address) in order to send you information about our products and
                services which you might be interested in.
              </li>
              <li>
                <b>
                  You always have the right to "opt out" of receiving our
                  marketing
                </b>
                . You can exercise the right at any time by contacting us. If we
                send you any marketing emails, we will always provide an
                unsubscribe option to allow you to opt out of any further
                marketing emails. If you "opt-out" of our marketing materials
                you will be added to our suppression list to ensure we do not
                accidentally send you further marketing. We may still need to
                contact you for administrative or operational purposes, but we
                will make sure that those communications don't include direct
                marketing.
              </li>
              <li>
                <b>For individuals. </b>We will only send you marketing emails
                or texts with your consent.
              </li>
              <li>
                <b>For businesses. </b>If you are a company or LLP (or are
                acting in a professional capacity as part of one) we use your
                contact details as necessary for our legitimate interests in
                marketing to you (by various channels) and maintaining a list of
                potential customers.
              </li>
              <li>
                We never share your name or contact details with third parties
                for marketing purposes. We do use third party service providers
                to send out our marketing, but we only allow them to use that
                information on our instructions and where they have agreed to
                treat the information confidentially and to keep it secure.
              </li>
              <li>
                <b>
                  We retain your details on our marketing list until you
                  "opt-out" at which point we add you to our suppression list
                </b>
                . We keep that suppression list indefinitely to comply with our
                legal obligations to ensure we don't accidentally send you any
                more marketing.
              </li>
              <li>
                When we send marketing emails to you, we use "web beacons" to
                collect information about when you open the email, your IP
                address and browser or email client type, and other similar
                information. We do this as necessary for our legitimate
                interests in reviewing and improving our direct marketing
                activities. We keep this information for six (6) months.
              </li>
            </ol>
          </li>
          <li>
            <h2>Website and app information</h2>
            <ol className="list">
              <li>
                <b>
                  We may collect information about you and your use of our
                  website and app
                </b>{" "}
                via technical means such as cookies, webpage counters and other
                analytics tools. This may include your IP address, login data,
                browser type and version, time zone setting and location,
                browser plug-in types and versions, device type, operating
                system and platform and other technology on the devices you use
                to access a website or app as well as the date and time of your
                access, what you interact with on our website or app, and (if
                applicable) the website from which access is made. We use this
                as necessary for our legitimate interests in administering and
                improving our website and app and content, to ensure they
                operate effectively and securely, to develop our business and
                inform our marketing strategy, and for other administrative
                purposes. We may also create aggregate statistical data from
                that information (for instance, overall numbers of website
                visitors or app users) which is not personal information about
                you.
              </li>
              <li>
                <b>Social Media integrations. </b>We have Facebook, Google and
                Apple login enabled. If you use this to login to your account,
                or are logged in when visiting our site, or if you click a
                “share” or “like” or equivalent social media button, the
                relevant social media platform may be a joint controller with us
                in relation to information that is sent to them about you
                regarding your clicking of that button or your use of that login
                functionality (which may include the types of information which
                we collect about you as part of your visit to our website or use
                of our app described above). Any information sent to a Google or
                a social media platform is used by them according to their
                privacy policies, and they will be solely responsible for that
                use and primarily responsible for providing you with information
                about any joint processing and enabling you to exercise your
                rights under data protection law. For more information on the
                responsibilities of Google or social media platforms and us in
                relation to this functionality, please see their privacy
                notices:
                <ol className="list">
                  <li>
                    Facebook:{" "}
                    <Link href="https://facebook.com/policy">
                      {makeUrlPretty("https://facebook.com/policy")}
                    </Link>
                  </li>
                  <li>
                    Google:{" "}
                    <Link href="https://policies.google.com/privacy">
                      {makeUrlPretty("https://policies.google.com/privacy")}
                    </Link>
                  </li>
                  <li>
                    Apple:{" "}
                    <Link href="https://www.apple.com/legal/privacy">
                      {makeUrlPretty("https://www.apple.com/legal/privacy")}
                    </Link>
                  </li>
                </ol>
              </li>
              <li>
                For detailed information on the cookies on our site and app and
                the purposes which they are used for see our Cookie Notice.
              </li>
              <li>
                We keep this information about you for up to six (6) months from
                when it is collected or the relevant cookie expires.
              </li>
              <li>
                <b>Third party websites. </b>Our website or app may, from time
                to time, contain links to third party websites, plug-ins and
                applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third party websites and are
                not responsible for their privacy statements. When you leave our
                website or app, we encourage you to read the privacy notice of
                every website you visit or app you use.
              </li>
            </ol>
          </li>
          <li>
            <h2>Photos, content and promotional material</h2>
            <ol className="list">
              <li>
                This is information about you which you provide to us (whether
                through our website, app or otherwise), or images or recordings
                of you which you allow us (or someone on our behalf) to use or
                take (including at our premises or events), for publication or
                display. This may include reviews, comments, testimonials,
                photographs (including stock photos and advertising material)
                and videos.
              </li>
              <li>
                We may display and publish this content (and, if relevant,
                attribute it to you) on our platforms as necessary for our
                legitimate interests in providing content and for promotional
                purposes (or, in some circumstances, because you have
                specifically consented to us doing this). This information is
                kept and published or displayed by us for as long as we consider
                it relevant for those purposes. You can ask us to remove or
                delete your content at any time (subject to any agreements about
                our right to use it) by contacting us. If we are displaying or
                publishing the information based on your consent, you have the
                right to withdraw that consent at any time.
              </li>
            </ol>
          </li>
          <li>
            <h2>Professional information</h2>
            <ol className="list">
              <li>
                If you work for one of our customers, suppliers or business
                partners, the information we collect about you may include your
                contact information, details of your employment and our
                relationship with you. This information may be collected
                directly from you, or provided by your organisation. Your
                organisation should have informed you that your information
                would be provided to us, and directed you to this policy. We use
                this as necessary for our legitimate interests in managing our
                relationship with your organisation. If we have a business
                relationship with you or your organisation, we may receive
                information about you from your organisation.
              </li>
              <li>
                We keep this information for up to seven (7) years after the end
                of our relationship with your organisation.
              </li>
            </ol>
          </li>
          <li>
            <h2>Application, referees and emergency contacts</h2>
            <ol className="list">
              <li>
                We will collect and hold information on job applicants
                (including applications for work experience or internships),
                including information you provide to us in your application, or
                provided to us by recruitment agencies, as well as information
                on you from any referees you provide. We may also collect
                information about your professional history which you make
                available on LinkedIn, or which are on your employer's website.
              </li>
              <li>
                We use this as necessary to enter into an employment contract
                with you, and for our legitimate interests in evaluating
                candidates and recording our recruitment activities, and as
                necessary to exercise and perform our employment law obligations
                and rights. Where you voluntarily provide us with special
                categories of data, such as information about your race, health
                or sexuality, we will store this as part of your application on
                the basis that you have decided to make it public to us for this
                purpose, and to ensure that our record of your application is
                accurate so we can comply with (and demonstrate our compliance
                with) our obligations under employment law.
              </li>
              <li>
                If you are successful in your application, your information will
                be used and kept in accordance with our internal privacy notice.
                If you currently work for us, or used to work for us, you can
                request a copy of this from us If you are not successful in your
                application, your information may be held after the process has
                completed for up to six (6) months, or (if you consent for us to
                contact you directly about future opportunities) for up to seven
                (7) years.
              </li>
              <li>
                You must provide certain information (such as your name, contact
                details, professional and educational history) for us to
                consider your application fully. If you have not provided all of
                this information, we may contact you to ask for it. If you do
                not wish to provide this information, we may not be able to
                properly consider your application.
              </li>
              <li>
                If you are listed as a referee by an applicant, we will hold
                your name, contact details, professional information about you
                (such as your employer and job title) and details of your
                relationship with the applicant. We will use this information as
                necessary for our legitimate interests in evaluating candidates
                and as necessary to exercise and perform our employment law
                obligations and rights. Your information will be kept alongside
                the applicant's information.
              </li>
              <li>
                If you are listed as an emergency contact by someone who works
                for us, we will hold your name, contact details and details of
                your relationship with that member of staff. We will use this to
                contact you as necessary to carry out our obligations under
                employment law, to protect the vital interests of that member of
                staff, and for our legitimate interests in administering our
                relationship with that worker. Your information will be kept
                until it is updated by that member of staff, or we no longer
                need to contact them after they have stopped working for us.
              </li>
            </ol>
          </li>
          <li>
            <h2>Legal Claims</h2>
            <p>
              Where we consider there to be a risk that we may need to defend or
              bring legal claims, we may retain your personal information as
              necessary for our legitimate interests in ensuring that we can
              properly bring or defend legal claims. We may also need to share
              this information with our insurers or legal advisers. How long we
              keep this information for will depend on the nature of the claim
              and how long we consider there to be a risk that we will need to
              defend or bring a claim.
            </p>
          </li>
          <li>
            <h2>Automated decision making</h2>
            <p>
              We use an automated matching logic to match you with the kind of
              people you should see, and the kind of people that should see you.
              This is done to create a personalised experience for you and give
              you the best chance of finding a good match. This will have no
              impact on you or your information other than determining whose
              profile is displayed to you, and who your profile is displayed to.
            </p>
          </li>
          <li>
            <h2>Information we receive from third parties</h2>
            <ol className="list">
              <li>
                We may also receive information about you from our service
                providers. We work closely with third parties (including, for
                example, business partners, sub-contractors in technical,
                payment and delivery services, advertising networks, analytics
                providers, search information providers and credit reference
                agencies) who may provide us with information about you, to be
                used as set out in this privacy notice.
              </li>
            </ol>
          </li>
          <li>
            <h2>Sharing your information</h2>
            <ol className="list">
              <li>
                <b>We never sell your data to third parties. </b>But we may need
                to share your information with third parties, including
                third-party service providers and other entities in our group.
                Third parties are required to respect the security of your
                personal information and to treat it in accordance with the law.
              </li>
              <li>
                <b>
                  Why might we share your personal information with third
                  parties?{" "}
                </b>
                We may share your personal information with third parties if we
                are under a duty to disclose or share your personal information
                in order to comply with any legal obligation, or in order to
                enforce or apply our agreements with you, or to protect the
                rights, property, or safety of us, our customers, or others or
                where we have another legitimate interest in doing so. This may
                include exchanging information with other companies and
                organisations for the purposes of fraud protection and credit
                risk reduction.
              </li>
              <li>
                <b>
                  Which third-party service providers process your personal
                  information?{" "}
                </b>
                We may need to share your personal information with third-party
                service providers (including contractors and designated agents)
                so that they can carry out their services. We may use
                third-party service providers in relation to the following types
                of activity: legal advice, administration, IT services, payment
                processing.
              </li>
              <li>
                <b>
                  When might we share your personal information with other
                  entities in the group?{" "}
                </b>
                We may share your personal information with other entities in
                our group as part of our regular reporting activities on company
                performance, in the context of a business reorganisation or
                group restructuring exercise, and for system maintenance support
                and hosting of data.
              </li>
              <li>
                <b>
                  How secure is your information with third-party service
                  providers and other entities in our group?{" "}
                </b>
                All our third-party service providers and other entities in the
                group are required to take appropriate security measures to
                protect your personal information. Where third parties process
                your personal information on our behalf as "data processors"
                they must do so only on our instructions and where they have
                agreed to treat the information confidentially and to keep it
                secure.
              </li>
              <li>
                <b>What about other third parties? </b>We may share your
                personal information with other third parties, for example with
                potential buyers and professional advisers in the context of the
                possible sale or restructuring of the business where necessary
                in connection with the purposes which your information was
                collected for. We may also need to share your personal
                information with a regulator or to otherwise comply with the
                law.
              </li>
            </ol>
          </li>
          <li>
            <h2>Where do we store your information</h2>
            <ol className="list">
              <li>
                Our offices are based in England and our main data centre is
                located in the EU. We do not currently process any data outside
                of the UK and EEA.
              </li>
              <li>
                If in the future we do process any data outside of the UK and
                EEA, we will take all steps reasonably necessary to ensure that
                your personal information is treated securely and in accordance
                with this privacy notice.
              </li>
            </ol>
          </li>
          <li>
            <h2>Data security</h2>
            <ol className="list">
              <li>
                As well as the measures set out above in relation to sharing of
                your information, we have put in place appropriate internal
                security measures to prevent your personal information from
                being accidentally lost, used or accessed in an unauthorised
                way, altered or disclosed. In addition, we limit access to your
                personal information to those employees, agents, contractors and
                other third parties who have a business need to know. They will
                only process your personal information on our instructions and
                they are subject to a duty of confidentiality.
              </li>
              <li>
                We have put in place procedures to deal with any suspected data
                security breach and will notify you and any applicable regulator
                of a suspected breach where necessary.
              </li>
            </ol>
          </li>
          <li>
            <h2>How long will we keep your information for?</h2>
            <ol className="list">
              <li>
                We have set out above indications of how long we generally keep
                your information. In some circumstances, it may be necessary to
                keep your information for longer than that in order to fulfil
                the purposes we collected it for, including for the purposes of
                satisfying any legal, accounting, or reporting requirements.
              </li>
              <li>
                To determine the appropriate retention period for personal
                information, we consider the amount, nature, and sensitivity of
                the personal information, the potential risk of harm from
                unauthorised use or disclosure of your personal information, the
                purposes for which we process your personal information and
                whether we can achieve those purposes through other means, and
                the applicable legal requirements.
              </li>
              <li>
                In some circumstances we may anonymise your personal information
                so that it can no longer be associated with you, in which case
                we may use such information without further notice to you.
              </li>
            </ol>
          </li>
          <li>
            <h2>Your rights</h2>
            <ol className="list">
              <li>
                Data protection law gives you a number of rights when it comes
                to personal information we hold about you. The key rights are
                set out below. More information about your rights can be
                obtained from your local data protection authority. Under
                certain circumstances, by law you have the right to:
                <ol className="list">
                  <li>
                    <b>Be informed</b> in a clear, transparent and easily
                    understandable way about how we use your personal
                    information and about your rights. This is why we are
                    providing you with the information in this notice. If you
                    require any further information about how we use your
                    personal information, please let us know.
                  </li>
                  <li>
                    <b>Request </b>
                    <b>access </b>to your personal information (commonly known
                    as a "data subject access request"). This enables you to
                    receive a copy of the personal information we hold about you
                    and to check that we are lawfully processing it.
                  </li>
                  <li>
                    <b>Request </b>
                    <b>correction </b>of the personal information that we hold
                    about you. This enables you to have any incomplete or
                    inaccurate information we hold about you corrected.
                  </li>
                  <li>
                    <b>Request erasure </b>of your personal information. This
                    enables you to ask us to delete or remove personal
                    information where there is no good reason for us continuing
                    to process it (for instance, we may need to continue using
                    your personal data to comply with our legal obligations).
                    You also have the right to ask us to delete or remove your
                    personal information where you have exercised your right to
                    object to processing (see below).
                  </li>
                  <li>
                    <b>Object to processing </b>of your personal information
                    where we are relying on a legitimate interest (or those of a
                    third party) and there is something about your particular
                    situation which makes you want to object to us using your
                    information on this basis and we do not have a compelling
                    legitimate basis for doing so which overrides your rights,
                    interests and freedoms (for instance, we may need it to
                    defend a legal claim). You also have the right to object
                    where we are processing your personal information for direct
                    marketing purposes.
                  </li>
                  <li>
                    <b>Request the restriction of processing </b>of your
                    personal information. This enables you to ask us to suspend
                    the processing of personal information about you, for
                    example if you want us to establish its accuracy or the
                    reason for processing it.
                  </li>
                  <li>
                    <b>Request the transfer </b>of your personal information to
                    another party where you provided it to us and we are using
                    it based on your consent, or to carry out a contract with
                    you, and we process it using automated means.
                  </li>
                  <li>
                    <b>Withdraw consent.</b> In the limited circumstances where
                    we are relying on your consent (as opposed to the other
                    bases set out above) to the collection, processing and
                    transfer of your personal information for a specific
                    purpose, you have the right to withdraw your consent for
                    that specific processing at any time. Once we have received
                    notification that you have withdrawn your consent, we will
                    no longer process your information for the purpose or
                    purposes you originally agreed to, unless we have another
                    compelling legitimate interest in doing so.
                  </li>
                  <li>
                    <b>Lodge a complaint</b>. If you think that we are using
                    your information in a way which breaches data protection
                    law, you have the right to lodge a complaint with your
                    national data protection supervisory authority and you may
                    also email{" "}
                    <Link href={`mailto:complaints@${prettyUrl}`}>
                      complaints@{prettyUrl}
                    </Link>{" "}
                    .
                  </li>
                </ol>
                <p>
                  If you want to review, verify, correct or request erasure of
                  your personal information, object to the processing of your
                  personal information, withdraw your consent to the processing
                  of your personal information or request that we transfer a
                  copy of your personal information to another party, please
                  contact us.
                </p>
              </li>
              <li>
                <b>No fee usually required. </b>You will not have to pay a fee
                to access your personal information (or to exercise any of the
                other rights). However, we may charge a reasonable fee if your
                request for access is clearly unfounded or excessive.
                Alternatively, we may refuse to comply with the request in such
                circumstances.
              </li>
              <li>
                <b>What we may need from you. </b>We may need to request
                specific information from you to help us understand the nature
                of your request, to confirm your identity and ensure your right
                to access the information (or to exercise any of your other
                rights). This is another appropriate security measure to ensure
                that personal information is not disclosed to any person who has
                no right to receive it. If we request any identification from
                you for this purpose, it is on the basis that it is necessary to
                comply with our legal obligations, and we will only keep and use
                this until your identity has been verified.
              </li>
              <li>
                Please consider your request responsibly before submitting it.
                We will respond to your request as soon as we can. Generally,
                this will be within one month from when we receive your request
                but, if the request is going to take longer to deal with, we
                will let you know.
              </li>
            </ol>
          </li>
          <li>
            <h2>Changes to this privacy notice</h2>
            <p>
              Any changes we make to our privacy notice in the future will be
              posted on this page and, where appropriate, notified to you by
              e-mail or otherwise. Please check back frequently to see any
              updates or changes to our privacy notice.
            </p>
          </li>
        </ol>

        <address>
          <strong>Data Controller</strong>
          <br />
          {COMPANY_NAME}
          <br />
          {COMPANY_ADDRESS}
          <br />
          {COMPANY_POSTCODE}
          <br />
          {COMPANY_COUNTRY}
          <br />
          <Link href={`mailto:privacy@${prettyUrl}`}>privacy@{prettyUrl}</Link>
        </address>
        <br />
        <address>
          <strong>Data Protection Officer</strong>
          <br />
          {COMPANY_NAME}
          <br />
          {COMPANY_ADDRESS}
          <br />
          {COMPANY_POSTCODE}
          <br />
          {COMPANY_COUNTRY}
          <br />
          <Link href={`mailto:privacy@${prettyUrl}`}>privacy@{prettyUrl}</Link>
        </address>
      </div>
    </RouteContainer>
  );
};

export default PrivacyRoute;
