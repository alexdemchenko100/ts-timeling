import { useState } from "react";
import Modal from "../Modal";
import { getAllConsent, getConsent, hasConsent, setConsent } from "../../lib/consent";
import { FormattedMessage } from "react-intl";
import Link from "../global/Link";
import classNames from "classnames";

import "./Consent.scss";
import ConsentForm from "./Form";

// const getHasConsent = () => !!window.localStorage.getItem("cookiesConsent");

const Consent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(!hasConsent());
    const [consentState, setConsentState] = useState(getConsent());

    const [isExpanded, setIsExpanded] = useState(false);

    const onHandleAccept = () => {
        setModalIsOpen(false);
        setConsent(getAllConsent());
    };
    const onHandleSave = () => {
        setModalIsOpen(false);
        setConsent(consentState);
    };

    return (
        <Modal
            contentLabel="Consent"
            onClose={() => {}}
            isOpen={true}
            className={classNames("popup-consent", { expanded: isExpanded })}
        >
            <div className="header">
                {isExpanded && (
                    <>
                        <h1>
                            <FormattedMessage id="cookie_settings" />
                        </h1>
                        <p>
                            <FormattedMessage id="cookie_settings_text" />
                        </p>
                    </>
                )}
                {!isExpanded && (
                    <>
                        <FormattedMessage id="cookies_text" />{" "}
                        <Link href="/terms">
                            <FormattedMessage id="read_more" />
                        </Link>
                    </>
                )}
            </div>
            {isExpanded && (
                <ConsentForm
                    consent={consentState}
                    onChange={setConsentState}
                    className="content"
                />
            )}
            <div className="bottom">
                {!isExpanded && (
                    <Link className="button contained" onClick={() => setIsExpanded(true)}>
                        <FormattedMessage id="set_preferences" />
                    </Link>
                )}
                {!!isExpanded && (
                    <Link className="button contained" onClick={onHandleSave}>
                        <FormattedMessage id="save_preferences" />
                    </Link>
                )}
                <button
                    className={classNames("button", { primary: isExpanded })}
                    onClick={onHandleAccept}
                >
                    <FormattedMessage id="accept_all" />
                </button>
            </div>
        </Modal>
    );
};

export default Consent;
