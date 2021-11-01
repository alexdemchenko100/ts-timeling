import { useMemo } from "react";
import { useIntl } from "react-intl";
import UnsubscribeForm, {
  UnsubscribeModel,
} from "../components/subscribe/UnsubscribeForm";
import RouteContainer from "../ui/RouteContainer";

const UnsubscribeRoute = () => {
  const intl = useIntl();

  const params = useMemo(() => new URLSearchParams(window.location.search), []);

  const data: UnsubscribeModel | undefined = useMemo(() => {
    let content = params.get("email");
    if (!!content) {
      return { type: 1, content };
    }
    //Can add other types later
  }, [params]);

  const routeTitle = intl.formatMessage({ id: "unsubscribe" });
  const routeDescription = intl.formatMessage({
    id: "unsubscribe_description",
  });

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="unsubscribe"
      className="content-width"
    >
      <div className="content">
        <h1>{routeTitle}</h1>
        <UnsubscribeForm data={data} />
      </div>
    </RouteContainer>
  );
};

export default UnsubscribeRoute;
