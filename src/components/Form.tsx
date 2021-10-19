import classNames from "classnames";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./Form.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) return;

    setIsLoading(true);
  };
  return (
    <section className="form">
      <h1 id="FormHeading">
        <FormattedMessage id="a_dating_app_for_dates" />
        <br />
        <FormattedMessage id="its_about_time" />
      </h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <label className="sr-only" htmlFor="Name">
            <FormattedMessage id="name" />
          </label>
          <input
            type="text"
            maxLength={256}
            name="name"
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
          <input type="radio" name="gender" id="Gender_0" required />
          <label htmlFor="Gender_0">
            <FormattedMessage id="female" />
          </label>
          <input type="radio" name="gender" id="Gender_1" required />
          <label htmlFor="Gender_1">
            <FormattedMessage id="male" />
          </label>
          <input type="radio" name="gender" id="Gender_null" required />
          <label htmlFor="Gender_null">
            <FormattedMessage id="other" />
          </label>
        </div>
        <button
          className={classNames("button big primary", { loading: isLoading })}
        >
          <FormattedMessage id="lets_meet_up" />
        </button>
      </form>
    </section>
  );
};

export default Form;
