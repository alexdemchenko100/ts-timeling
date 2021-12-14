import classNames from "classnames";
import { useState, useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { clientDefaultLanguage, getCurrent } from "../../lib/locale";
import Link from "../global/Link";

import "./SubscribeForm.scss";

type SubscribeModel = {
  name: string;
  type: number;
  content: string;
  sex: string;
  language: string;
};

const SubscribeForm = () => {
  const intl = useIntl();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );

  const localeIso = useMemo(() => getCurrent() || clientDefaultLanguage, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    (window as any).gtag_report_conversion("#success");

    const elem: HTMLFormElement | undefined = e.currentTarget;

    if (!elem?.checkValidity()) return;

    setIsLoading(true);

    const data: SubscribeModel = {
      name: elem.firstnamelastname.value,
      type: 1, //email
      content: elem.email.value,
      sex: elem.sex.value,
      language: localeIso,
    };

    try {
      setStatus("success");

      await fetch("https://app.timeling.com/api/misc/subscribe", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });

      //For tracking
      window.location.hash = "success";
    } catch (e) {
      setStatus("error");
    }

    setIsLoading(false);
  };
  return (
    <section className="subscribe-form">
      <h2 className="big" id="FormHeading">
        <FormattedMessage id="form_line_1" />
        <br />
        <FormattedMessage id="form_line_2" />
      </h2>
      <p className="non-mobile">
        <FormattedMessage id="headline_sub2" />
        <br />
        <FormattedMessage id="dont_miss_out" />
      </p>
      <p className="mobile">
        <FormattedMessage id="headline_sub2_short" />
      </p>
      {status !== "success" && (
        <form onSubmit={onSubmit}>
          <div className="row">
            <label htmlFor="Name">
              <FormattedMessage id="name" />
            </label>
            <input
              type="text"
              maxLength={256}
              name="firstnamelastname"
              placeholder={intl.formatMessage({ id: "name" })}
              required
              id="Name"
            />
          </div>
          <div className="row">
            <label htmlFor="Email">
              <FormattedMessage id="email" />
            </label>
            <input
              type="email"
              maxLength={256}
              name="email"
              placeholder={"example@mail.com"}
              required
              id="Email"
            />
          </div>
          <div className="row radios">
            <input type="radio" name="sex" id="Sex_0" value="female" required />
            <label htmlFor="Sex_0">
              <FormattedMessage id="female" />
            </label>
            <input type="radio" name="sex" id="Sex_1" value="male" required />
            <label htmlFor="Sex_1">
              <FormattedMessage id="male" />
            </label>
            <input
              type="radio"
              name="sex"
              id="Sex_null"
              value="other"
              required
            />
            <label htmlFor="Sex_null">
              <FormattedMessage id="other" />
            </label>
          </div>
          <div className="row checkbox">
            <strong>
              <FormattedMessage
                id="by_click_0_you_agree_to_1"
                values={{
                  0: <FormattedMessage id="join_now" />,
                  1: (
                    <>
                      <br />
                      <Link href="/terms">
                        <FormattedMessage id="terms_of_service" />
                      </Link>
                    </>
                  ),
                }}
              />
            </strong>
            {/* <input
              type="checkbox"
              name="terms"
              id="Terms"
              value="terms"
              required
            />
            <label htmlFor="Terms">
              <FormattedMessage
                id="i_agree_to_the_0"
                values={{
                  0: (
                    <Link href="/terms">
                      <FormattedMessage id="terms_of_service" />
                    </Link>
                  ),
                }}
              />
            </label> */}
          </div>
          <button
            className={classNames("button big", { loading: isLoading })}
            disabled={isLoading}
          >
            <FormattedMessage id="join_now" />
          </button>
          <strong>
            <FormattedMessage id="we_value_your_privacy" />
          </strong>
        </form>
      )}
      {status === "success" && (
        <p>
          <FormattedMessage id="thank_you_submission_recieved" />
        </p>
      )}
      {status === "error" && (
        <p>
          <FormattedMessage id="something_went_wrong" />
        </p>
      )}
    </section>
  );
};

export default SubscribeForm;
