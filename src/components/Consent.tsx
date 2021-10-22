import { useState } from "react";
import Modal from "./Modal";

import "./Consent.scss";

// const getHasConsent = () => !!window.localStorage.getItem("cookiesConsent");

(window as any).fbq("consent", "grant");

//Apparently we dont need this
const Consent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onHandleDecline = () => {
    window.localStorage.setItem("cookiesConsent", "false");
    setModalIsOpen(false);
  };

  const onHandleAccept = () => {
    window.localStorage.setItem("cookiesConsent", "true");
    setModalIsOpen(false);
    (window as any).fbq("consent", "grant");
  };

  return (
    <Modal
      contentLabel="Consent"
      onClose={() => {}}
      isOpen={modalIsOpen}
      className="popup-consent"
    >
      <div className="header">
        <h1>Accept cookies?</h1>
      </div>
      <div className="bottom">
        <button className="button" onClick={onHandleDecline}>
          Decline
        </button>
        <button className="button" onClick={onHandleAccept}>
          Accept
        </button>
      </div>
    </Modal>
  );
};

export default Consent;
