import classNames from "classnames";
import { useState } from "react";
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
        A dating app for dates?
        <br />
        It's about time
      </h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <label className="sr-only" htmlFor="Name">
            Name
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
            Email
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
          <label htmlFor="Gender_0">Female</label>
          <input type="radio" name="gender" id="Gender_1" required />
          <label htmlFor="Gender_1">Male</label>
          <input type="radio" name="gender" id="Gender_null" required />
          <label htmlFor="Gender_null">Other</label>
        </div>
        <button
          className={classNames("button big primary", { loading: isLoading })}
        >
          Let's meet up
        </button>
      </form>
    </section>
  );
};

export default Form;
