import { useState } from "react";
import Modal from "./Modal";

const getHasConsent = () => !!window.localStorage.getItem("fbGrantConsent");

const Consent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(!getHasConsent());

  const onHandleDecline = () => {
    window.localStorage.setItem("fbGrantConsent", "false");
    setModalIsOpen(false);
  };

  const onHandleAccept = () => {
    window.localStorage.setItem("fbGrantConsent", "true");
    setModalIsOpen(false);
    (window as any).fbq("consent", "grant");
  };

  return (
    <Modal contentLabel="Consent" onClose={() => {}} isOpen={modalIsOpen}>
      <div className="content">
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
