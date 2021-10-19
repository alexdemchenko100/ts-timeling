import { useMemo } from "react";
import classNames from "classnames";
import { FormattedMessage as IntlFormattedMessage } from "react-intl";
import Icon from "../components/global/Icon";

import "./StatusContainer.scss";

export type Props = {
  type: number; //302 | 404 | 401 | 403 | 500;
  children?: any;
  mode?: "standalone";
  withIcon?: boolean | string;
  withIntl?: boolean;
  title?: string;
};

export const getType = (type: number) =>
  type === 205
    ? "start_over"
    : type === 302
    ? undefined
    : type === 401
    ? "unauthenticated"
    : type === 403
    ? "unauthorized"
    : type === 404
    ? "404_status"
    : type === 410
    ? "410_status"
    : type === 500
    ? "500_status"
    : undefined;

export const NotFormattedMessage = (props: any) => (
  <>{props.id.replace(/_/gi, " ")}</>
);

const StatusContainer = (props: Props) => {
  const { withIcon, children, type, mode, withIntl, title: pTitle } = props;

  const typeTitle = useMemo(() => getType(type), [type]);
  const title = useMemo(() => pTitle || typeTitle, [typeTitle, pTitle]);

  // const withLink = useMemo(() => type === 404 || type === 403 || type === 500, [
  //   type,
  // ]);

  // const startPageLink = null;
  //  !withLink ? null : (
  //   <Link href="/">
  //     <FormattedMessage
  //       id="go_to_0"
  //       values={{ 0: <FormattedMessage id="start_page" /> }}
  //     />
  //   </Link>
  // );

  const FormattedMessage =
    withIntl !== false ? IntlFormattedMessage : NotFormattedMessage;

  const reloadButton =
    title !== "error" || !!children ? undefined : (
      <a
        href={`${window.location.href}${
          window.location.href.includes("?") ? "&" : "?"
        }`}
        className="button"
      >
        <div className="container">
          <FormattedMessage id="update" />
        </div>
      </a>
    );

  const signoutButton = undefined;
  // typeTitle !== "unauthenticated" ? undefined : (
  //   <Button href="/" className="big primary">
  //     <FormattedMessage id="sign_in" />
  //   </Button>
  // );

  const loader =
    type === 102 || type === 301 || type === 302 ? (
      <Icon id="timeling" className="loader" />
    ) : // <span className="loader" />
    undefined;

  // const reaction =
  //   type > 499 ? (
  //     <span className="reaction">:(</span>
  //   ) : type > 399 ? (
  //     <span className="reaction">:\</span>
  //   ) : undefined;

  //400 for domain setup
  // const cogs =
  //   type === 400 ? (
  //     <div className="cogs-container">
  //       <Icon id="cogs" />
  //     </div>
  //   ) : undefined;

  return (
    <div className={classNames("status-container type-" + type, mode)}>
      <div>
        {!loader && withIcon !== false && (
          <>
            <Icon id={typeof withIcon === "string" ? withIcon : "app"} />
            <br />
          </>
        )}
        {!!title && (
          <>
            <h1>
              <FormattedMessage id={title} />
            </h1>
          </>
        )}
        {/* {reaction} */}
        {!!children && <div className="content">{children}</div>}
        {loader}
        <div className="actions-container">
          {reloadButton}
          {signoutButton}
        </div>
      </div>
    </div>
  );
};

export default StatusContainer;
