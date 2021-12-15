import { useState } from "react";
import Modal from "./Modal";

import "./Consent.scss";
import { getAllConsent, setConsent } from "../lib/consent";
import { FormattedMessage } from "react-intl";
import Link from "./global/Link";

// const getHasConsent = () => !!window.localStorage.getItem("cookiesConsent");
setConsent(getAllConsent());

const Consent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); //!hasConsent());

  const onHandleAccept = () => {
    window.localStorage.setItem("cookiesConsent", "true");
    setModalIsOpen(false);
    setConsent(getAllConsent());
  };

  return (
    <Modal
      contentLabel="Consent"
      onClose={() => {}}
      isOpen={modalIsOpen}
      className="popup-consent"
    >
      <div className="header">
        <FormattedMessage id="cookies_text" />{" "}
        <Link href="/terms">
          <FormattedMessage id="read_more" />
        </Link>
      </div>
      <div className="bottom">
        <Link className="button contained" href="/terms">
          <FormattedMessage id="set_preferences" />
        </Link>
        <button className="button " onClick={onHandleAccept}>
          <FormattedMessage id="accept_all" />
        </button>
      </div>
    </Modal>
  );
};

export default Consent;
