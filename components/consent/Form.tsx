import classNames from "classnames";
import { HTMLInputTypeAttribute, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Consent,
  getAllConsent,
  getDefaultConsent,
  names,
} from "../../utils/consent";

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {
  type: HTMLInputTypeAttribute | undefined | "toggle";
  children?: React.ReactNode;
}

const Input = ({ id, type, children, ...props }: InputProps) => {
  const [htmlFor] = useState(id || Math.random().toString());

  const componentName = "input";

  const labelPosition = ["checkbox", "radio", "toggle"].includes(type as string)
    ? "before"
    : "after";

  const labelElem = !!children ? (
    <label className={`${componentName}-label`} htmlFor={htmlFor}>
      {children}
    </label>
  ) : undefined;

  return (
    <div
      className={classNames(componentName, `type-${type}`, {
        checked: props.checked,
      })}
    >
      {!!labelElem && labelPosition === "before" && labelElem}
      <input
        className={classNames(`${componentName}-control`, `type-${type}`)}
        id={htmlFor}
        type={type === "toggle" ? "checkbox" : type}
        {...props}
      />
      {!!labelElem && labelPosition === "after" && labelElem}
    </div>
  );
};

type Props = {
  className?: string;
  consent: Consent;
  onChange(consent: Consent): void;
};

const namesAll = Object.values(names).flat();

const ConsentForm = ({ className, consent, onChange }: Props) => {
  const allEnabled = useMemo(() => consent.ads, [consent]);

  const onChangeAll = () => {
    console.log("change", allEnabled);
    onChange(allEnabled ? getDefaultConsent() : getAllConsent());
  };

  return (
    <div className={classNames("consent-form", className)}>
      <div className="row">
        <Input type="toggle" checked={allEnabled} onChange={onChangeAll}>
          <FormattedMessage id="all_cookies" />
        </Input>
        <FormattedMessage id="all_cookies_info" />
        <ul>
          {namesAll.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      {/* <div className="row">
        <Input type="toggle" checked={true} disabled={true}>
          <FormattedMessage id="required_cookies" />
        </Input>
        <FormattedMessage id="required_cookies_info" />
        <ul>
          {names.required.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div> */}
      <div className="row">
        <Input
          type="toggle"
          checked={consent.ads}
          onChange={() => onChange({ ...consent, ads: !consent.ads })}
        >
          <FormattedMessage id="advertising_cookies" />
        </Input>
        <p>
          <FormattedMessage id="advertising_cookies_info" />
          <ul>
            {names.ads.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ConsentForm;
