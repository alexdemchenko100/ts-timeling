import classNames from "classnames";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import "./SubscribeForm.scss";

type SubscribeModel = {
  name: string;
  type: number;
  content: string;
  sex: string;
};

const SubscribeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const elem: HTMLFormElement | undefined = e.currentTarget;

    if (!elem?.checkValidity()) return;

    setIsLoading(true);

    const data: SubscribeModel = {
      name: elem.firstnamelastname.value,
      type: 1, //email
      content: elem.email.value,
      sex: elem.sex.value,
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
        <FormattedMessage id="a_dating_app_for_dates" />
        <br />
        <FormattedMessage id="its_about_time" />
      </h2>
      {status !== "success" && (
        <form onSubmit={onSubmit}>
          <div className="row">
            <label className="sr-only" htmlFor="Name">
              <FormattedMessage id="name" />
            </label>
            <input
              type="text"
              maxLength={256}
              name="firstnamelastname"
              placeholder="Name"
              required
              id="Name"
            />
          </div>
          <div className="row">
            <label className="sr-only" htmlFor="Email">
              <FormattedMessage id="email" />
            </label>
            <input
              type="email"
              maxLength={256}
              name="email"
              placeholder="Email"
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
          <button
            className={classNames("button big primary", { loading: isLoading })}
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
