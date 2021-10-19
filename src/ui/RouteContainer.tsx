import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import cx from "classnames";

import ErrorBoundary from "../components/global/ErrorBoundary";
// import FeedbackAction from "../components/global/FeedbackAction";

import "./RouteContainer.scss";

type Props = {
  name: string;
  title: string;
  description: string;
  className?: string;
  color?: string;
  children: any;
  withIntl?: boolean;
};

type ScrollCoordinates = {
  x: number;
  y: number;
};
type ScrollData = {
  [index: string]: ScrollCoordinates;
};
const scrollMemory = {
  key: "scrollmemory",
  state: (): ScrollData => {
    try {
      const data = sessionStorage.getItem(scrollMemory.key);
      if (data) return JSON.parse(data);
    } catch (e) {}

    return {};
  },
  set: (name: string, offsetY: number, offsetX: number) => {
    const data = scrollMemory.state();

    data[name] = { y: offsetY, x: offsetX };

    sessionStorage.setItem(scrollMemory.key, JSON.stringify(data));
  },
  get: (name: string) => {
    const data = scrollMemory.state();

    return data[name] || undefined;
  },
};

const RouteContainer = ({
  children,
  className,
  color,
  description,
  name,
  title,
  withIntl,
  ...otherProps
}: Props) => {
  const location = useLocation();
  const history = useHistory();

  const withScrollMemory = true;

  const locationKey = location.pathname
    .split("/")
    .filter(
      (x) =>
        !!x &&
        !/^\d+$/.test(x) &&
        !x.startsWith("modal-") &&
        !x.startsWith("section-")
    )
    .join("/");

  const elem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elem.current) return;

    const target = elem.current;

    const handleScroll = () => {
      if (withScrollMemory) {
        scrollMemory.set(locationKey, target.scrollTop, target.scrollLeft);
      }
    };

    handleScroll();

    target.addEventListener("scroll", handleScroll, { passive: true });

    return () => target.removeEventListener("scroll", handleScroll);
  }, [locationKey, withScrollMemory]);

  useLayoutEffect(() => {
    if (withScrollMemory && history.action === "POP") {
      const key = scrollMemory.get(locationKey);
      if (key) elem.current?.scrollTo(key.x, key.y);
    }
  }, [history.action, locationKey, withScrollMemory]);

  return (
    <ErrorBoundary withIntl={withIntl}>
      <main
        className={cx(`route-container route-container-${name}`, {})}
        ref={elem}
      >
        <Helmet>
          {!!title && <title>{title}</title>}
          <meta
            name="description"
            property="og:description"
            content={description}
          />
        </Helmet>
        <div
          className={cx(`content route route-${name}`, className)}
          {...otherProps}
        >
          {children}
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default RouteContainer;
