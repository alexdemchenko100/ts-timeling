import { FormattedDate, useIntl } from "react-intl";
import { COMPANY_NAME } from "../lib/config";
import RouteContainer from "../ui/RouteContainer";

const TERMS_DATE = new Date(2021, 6, 6);

const TermsRoute = () => {
  const intl = useIntl();

  const routeTitle = intl.formatMessage({ id: "terms_of_service" });
  const routeDescription = intl.formatMessage({
    id: "terms_of_service_description",
  });

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      className="content-width"
      name="terms"
    >
      <div className="content">
        <h1>{routeTitle}</h1>
        <p>
          Last revised on <FormattedDate value={TERMS_DATE} />
        </p>
        <p>
          These terms and conditions apply between you (the &ldquo;User&rdquo;)
          and {COMPANY_NAME}, a company registered in England, the owner and
          operator of this Website. All references to Website include the
          related App. Please read these terms and conditions carefully, as they
          affect your legal rights. Your agreement to comply with and be bound
          by these terms and conditions is deemed to occur upon your first use
          of the Website. If you do not agree to be bound by these terms and
          conditions, you should stop using the Website immediately.
        </p>
        <p>
          In these terms and conditions, User means any third party that
          accesses the Website. You are confirming that you are at least 18
          years of age by using this Website.
        </p>
        <ol className="list">
          <li>
            All Content included on the Website, is the property of{" "}
            {COMPANY_NAME} or other relevant third parties. In these terms and
            conditions, Content means any text, graphics, images, audio, video,
            software, data compilations, page layout, underlying code and
            software and any other form of information capable of being stored
            in a computer that appears on or forms part of this Website,
            including any such content uploaded by Users. By continuing to use
            the Website you acknowledge that such Content is protected by
            copyright, trademarks, database rights and other intellectual
            property rights. Nothing on this site shall be construed as granting
            any license or right to use any trademark, logo or service mark
            displayed on the site without the owner's prior written permission
          </li>
          <li>
            You may, for your own personal, non-commercial use only retrieve,
            display and view the Content on a computer screen or mobile device.
          </li>
          <li>
            You must not otherwise reproduce, modify, copy, distribute or use
            for commercial purposes any Content without the written permission
            (not by email) of {COMPANY_NAME}.&nbsp;
          </li>
          <li>You may not use the Website:</li>
          <li>
            in any way which causes, or may cause, damage to the Website or
            interferes with any other person's use or enjoyment of the Website;
          </li>
          <li>
            in any way which is harmful, unlawful, illegal, abusive, harassing,
            threatening or otherwise objectionable or in breach of any
            applicable law or regulation.
          </li>
          <li>
            making, transmitting or storing electronic copies of Content
            protected by copyright without the written permission (not by email)
            of the owner.
          </li>
          <li>
            You must ensure that the details provided by you on registration or
            at any time are true, accurate, correct and complete in all material
            aspects.
          </li>
          <li>
            You must inform us immediately of any changes to the information
            that you provide when registering by updating your personal details
            to ensure we can communicate with you at all times.
          </li>
          <li>
            We may suspend or cancel your registration with immediate effect so
            long as we act reasonably or if you breach these terms and
            conditions.
          </li>
          <li>
            You may cancel your registration at any time by informing us in
            writing to the registered office of {COMPANY_NAME} from time to
            time. If you do so, you must immediately stop using the Website.
            Cancellation or suspension of your registration does not affect any
            of your statutory rights. You can also unsubscribe from the mailing
            list at any time.
          </li>
          <li>
            This Website may contain links to other sites. Unless expressly
            stated, these sites are not under the control of {COMPANY_NAME} or
            that of our associated entities.
          </li>
          <li>
            We assume no responsibility for the content of such Websites and
            disclaim liability for any and all forms of loss or damage arising
            out of the use of them.
          </li>
          <li>
            The inclusion of a link to another site on this Website does not
            imply any endorsement of the sites themselves or of those in control
            of them.
          </li>
          <li>
            Use of the Website is also governed by our Privacy Policy, which is
            incorporated into these terms and conditions by this reference. To
            view the Privacy Policy, please click here:
          </li>
          <li>
            Any online facilities, tools, services or information that{" "}
            {COMPANY_NAME}
            makes available through the Website (the Service) is provided "as
            is" and on an "as available" basis. We give no warranty that the
            Service will be free of defects and/or faults. To the maximum extent
            permitted by the law, we provide no warranties (express or implied)
            of fitness for a particular purpose, accuracy of information,
            compatibility and satisfactory quality. &nbsp;{COMPANY_NAME} is
            under no obligation to update information on the Website.
          </li>
          <li>
            Whilst {COMPANY_NAME} uses reasonable endeavours to ensure that the
            Website is secure and free of errors, viruses and other malware, we
            give no warranty or guaranty in that regard and all Users take
            responsibility for their own security, that of their personal
            details and their computers.
          </li>
          <li>
            {COMPANY_NAME} accepts no liability for any disruption or
            non-availability of the Website.
          </li>
          <li>
            {COMPANY_NAME} reserves the right to alter, suspend or discontinue
            any part (or the whole of) the Website including, but not limited
            to, any products and/or services available. These terms and
            conditions shall continue to apply to any modified version of the
            Website unless it is expressly stated otherwise.
          </li>
          <li>
            Nothing in these terms and conditions will: (a) limit or exclude our
            liability for death or personal injury resulting from our
            negligence; (b) limit or exclude our liability for fraud or
            fraudulent misrepresentation; or (c) limit or exclude any of our
            liabilities in any way that is not permitted under applicable law.
          </li>
          <li>
            To the maximum extent permitted by applicable law, we will not be
            liable to you in respect of any losses arising out of events beyond
            our reasonable control.
          </li>
          <li>
            To the maximum extent permitted by law, {COMPANY_NAME} accepts no
            liability for any of the following:
            <ol className="list">
              <li>
                any business losses, such as loss of profits, income, revenue,
                anticipated savings, business, contracts, goodwill or commercial
                opportunities;
              </li>
              <li>loss or corruption of any data, database or software;</li>
              <li>any special, indirect or consequential loss or damage.</li>
            </ol>
          </li>
          <li>
            You agree, to the extent permitted under applicable law, to
            indemnify, defend and hold harmless {COMPANY_NAME}, our affiliates,
            and their and our respective officers, directors, agents, and
            employees from and against any and all complaints, demands, claims,
            damages, losses, costs, liabilities and expenses, including legal
            fees due to, arising out of, or relating in any way to your access
            to or use of the Website or Service, your content, or any breach of
            this Agreement by you.
          </li>
          <li>
            You may not transfer any of your rights under these terms and
            conditions to any other person. We may transfer our rights under
            these terms and conditions where we reasonably believe your rights
            will not be affected.
          </li>
          <li>
            These terms and conditions may be varied by us from time to time.
            Such revised terms will apply to the Website from the date of
            publication. Users should check the terms and conditions regularly
            to ensure familiarity with the then current version.
          </li>
          <li>
            These terms and conditions together with the Privacy Policy contain
            the whole agreement between the parties relating to its subject
            matter and supersede all prior discussions, arrangements or
            agreements that might have taken place in relation to the terms and
            conditions.
          </li>
          <li>
            The Contracts (Rights of Third Parties) Act 1999 shall not apply to
            these terms and conditions and no third party will have any right to
            enforce or rely on any provision of these terms and conditions.
          </li>
          <li>
            If any court or competent authority finds that any provision of
            these terms and conditions (or part of any provision) is invalid,
            illegal or unenforceable, that provision or part-provision will, to
            the extent required, be deemed to be deleted, and the validity and
            enforceability of the other provisions of these terms and conditions
            will not be affected.
          </li>
          <li>
            Unless otherwise agreed, no delay, act or omission by a party in
            exercising any right or remedy will be deemed a waiver of that, or
            any other, right or remedy.
          </li>
          <li>
            This Agreement shall be governed by and interpreted according to the
            law of England and Wales and all disputes arising under the
            Agreement (including non-contractual disputes or claims) shall be
            subject to the exclusive jurisdiction of the English and Welsh
            courts.
          </li>
        </ol>
      </div>
    </RouteContainer>
  );
};

export default TermsRoute;
