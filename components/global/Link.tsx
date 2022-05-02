import { HTMLAttributeAnchorTarget } from "react";
import classNames from "classnames";
import NavLink from "next/link";
import { withBaseURL } from "../../utils/config";

const getHref = (href: string | undefined) => {
  if (!href) return href;

  let hrefFiltered = href;

  // Hax to make links to BASE_URL relative in development
  if (process.env.NODE_ENV === "development") {
    if (hrefFiltered.startsWith(withBaseURL()))
      hrefFiltered = hrefFiltered.split(withBaseURL())[1];
  }

  return hrefFiltered;
};

const getIsExternalUrl = (href: string | undefined) => {
  return (
    !!href &&
    ((href.includes("://") && !href.includes(withBaseURL())) ||
      href.startsWith("mailto:")) //Always new tab since it can be a browser client like outlook
  );
};

const getRel = (
  rel: string | undefined,
  href: string | undefined,
  target?: string
) => {
  if (getIsExternalUrl(href) && target === "_blank") {
    rel = rel || "";
    if (!rel.includes("noopener")) {
      rel += " noopener";
    }
    if (!rel.includes("noreferrer")) {
      rel += " noreferrer";
    }
  }
  return rel;
};

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  disabled?: boolean;
  locale?: string;
}

const Link = ({
  className,
  href: _href,
  target: _target,
  rel: _rel,
  disabled,
  onClick: _onClick,
  locale,
  ...otherProps
}: Props) => {
  const onClick = (e: any) => {
    if (_onClick) _onClick(e);

    //Relative link
    if (
      !!href &&
      href.startsWith("/") &&
      target !== "_blank" &&
      !e.metaKey &&
      !e.ctrlKey
    ) {
      // Scroll up on navigation
      // Delay for browser history scroll offset to work
      setTimeout(() => window.scrollTo(0, 0), 10);
    }
  };

  const href: string | undefined = getHref(_href);
  const target: HTMLAttributeAnchorTarget | undefined =
    !_target && getIsExternalUrl(href) ? "_blank" : _target;
  let rel: string | undefined = getRel(_rel, href, target);

  if (!href || !!disabled) {
    return (
      <span
        className={classNames(
          "type-a",
          {
            disabled,
          },
          className
        )}
        onClick={onClick}
        {...otherProps}
      />
    );
  }

  if (target === "_blank")
    return (
      <a
        href={href}
        className={classNames("type-a", className)}
        target={target}
        rel={rel}
        onClick={onClick}
        {...otherProps}
      />
    );
  return (
    <NavLink href={href} locale={locale}>
      <a
        className={classNames("type-a", className)}
        target={target}
        rel={rel}
        onClick={onClick}
        {...otherProps}
      />
    </NavLink>
  );
};

export default Link;
