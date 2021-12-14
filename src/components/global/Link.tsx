import { useMemo } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { withBaseURL } from "../../lib/config";
import { urlWithLocale, getCurrent } from "../../lib/locale";

const getIsExternalUrl = (href: string | undefined) => {
  return (
    !!href &&
    ((href.includes("://") &&
      !href.includes("://" + window.location.host) &&
      !href.includes(withBaseURL())) ||
      href.startsWith("mailto:")) //Always new tab since it can be a browser client like outlook
  );
};

const Link = (props: any) => {
  const {
    className,
    to,
    href: pHref,
    target: pTarget,
    rel: pRel,
    disabled,
    children,
    ...otherProps
  } = props;

  const onClick = (e: any) => {
    if (props.onClick) props.onClick(e);

    //Relative link
    if (
      !!href &&
      href.startsWith("/") &&
      target !== "_blank" &&
      !e.metaKey &&
      !e.ctrlKey &&
      isReactRoutable &&
      !href.startsWith("#")
    ) {
      //Delay for browser history scroll offset to work
      setTimeout(() => window.scrollTo(0, 0), 1);
    }
  };

  const href: string | undefined = useMemo(() => {
    if (disabled) return undefined;

    if (!pHref) return pHref;

    let hrefFiltered = pHref;

    //Hax to make links to BASE_URL relative
    if (process.env.NODE_ENV === "development") {
      if (hrefFiltered.startsWith(withBaseURL()))
        hrefFiltered = hrefFiltered.split(withBaseURL())[1];
    }

    //Make absolute links to the same host/domain relative
    //so that we can use them with react-router
    if (
      hrefFiltered.startsWith(
        window.location.protocol + "//" + window.location.host
      )
    )
      hrefFiltered = hrefFiltered.split(
        window.location.protocol + "//" + window.location.host
      )[1];

    if (
      (hrefFiltered.startsWith("/") || hrefFiltered.includes("://")) &&
      !getIsExternalUrl(pHref)
    ) {
      const current = getCurrent();
      if (!!current)
        // Not set in early renders of site
        hrefFiltered = urlWithLocale(hrefFiltered, current);
    }

    return hrefFiltered;
  }, [pHref, disabled]);

  //Returns true if the URL domain/host of the link
  //is other than the current domain/host and not a BASE_URL url
  const isExternalUrl = useMemo(() => getIsExternalUrl(href), [href]);

  const target = useMemo(() => {
    let targetFiltered = pTarget;
    if (!targetFiltered && isExternalUrl) {
      targetFiltered = "_blank";
    }

    return targetFiltered;
  }, [pTarget, isExternalUrl]);

  const rel = useMemo(() => {
    let relFiltered = pRel;
    if (isExternalUrl && target === "_blank") {
      relFiltered = relFiltered || "";
      if (!relFiltered.includes("noopener")) {
        relFiltered += " noopener";
      }
      if (!relFiltered.includes("noreferrer")) {
        relFiltered += " noreferrer";
      }
    }

    return relFiltered;
  }, [pRel, target, isExternalUrl]);

  const isReactRoutable = useMemo(() => {
    if (!href && !!to) return true;

    if (!href) return false;

    //Not a relative link
    if (!href.startsWith("/")) return false;

    return true;
  }, [href, to]);

  const isCurrentUrl = useMemo(() => {
    const active = !!href
      ? window.location.pathname.split("?")[0].split("#")[0].endsWith(href)
      : false;

    return active;
  }, [href]);

  if (isReactRoutable) {
    return (
      <NavLink
        exact
        to={disabled ? undefined : href || to}
        className={classNames(
          {
            disabled,
          },
          className
        )}
        target={target}
        rel={rel}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={classNames(
        {
          active: isCurrentUrl,
          disabled,
        },
        className
      )}
      target={target}
      rel={rel}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Link;
