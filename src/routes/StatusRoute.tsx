import { useMemo } from "react";
import { useIntl } from "react-intl";
import "./StatusRoute.scss";
import StatusContainer, { getType, Props } from "../ui/StatusContainer";
import RouteContainer from "../ui/RouteContainer";

const StatusRouteIntl = (props: Props) => {
  const { type, title: pTitle } = props;

  const intl = useIntl();

  const title = useMemo(() => pTitle || getType(type) || "", [type, pTitle]);

  const routeTitle = !!title
    ? intl.formatMessage({
        id: title,
      })
    : "";
  const routeDescription = !!title
    ? intl.formatMessage({
        id: `${title}_description`,
      })
    : "";

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="status"
    >
      <StatusContainer {...props} />
    </RouteContainer>
  );
};

const StatusRouteNoIntl = (props: Props) => {
  const { type, title: pTitle } = props;

  const title = useMemo(() => pTitle || getType(type) || "", [type, pTitle]);

  const routeTitle = title;
  const routeDescription = `${title}_description`;

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="status"
      withIntl={props.withIntl}
    >
      <StatusContainer {...props} />
    </RouteContainer>
  );
};

const StatusRoute = (props: Props) => {
  if (props.withIntl === false) return <StatusRouteNoIntl {...props} />;
  return <StatusRouteIntl {...props} />;
};

export default StatusRoute;
