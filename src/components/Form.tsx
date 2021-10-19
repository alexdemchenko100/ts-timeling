import classNames from "classnames";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./Form.scss";

type SignupModel = {
  name: string;
  email: string;
  sex: string;
};

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const elem: HTMLFormElement | undefined = e.currentTarget;

    if (!elem?.checkValidity()) return;

    setIsLoading(true);

    const data: SignupModel = {
      name: elem.firstnamelastname.value,
      email: elem.email.value,
      sex: elem.sex.value,
    };

    try {
      await fetch("https://app.timeling.com/api/misc/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }

    setIsLoading(false);
  };
  return (
    <section className="form">
      <h1 id="FormHeading">
        <FormattedMessage id="a_dating_app_for_dates" />
        <br />
        <FormattedMessage id="its_about_time" />
      </h1>
      {!status && (
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
            <FormattedMessage id="lets_meet_up" />
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

export default Form;
