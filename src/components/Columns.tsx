import classNames from "classnames";
import { ReactNode } from "react";

import "./Columns.scss";

type Props = {
  videoUrl: string;
  url?: string;
  className?: string;
  title: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
};

const Columns = ({ videoUrl, url, title, children, className }: Props) => {
  return (
    <section className={classNames("columns", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        src={videoUrl}
        poster={url}
      />
      <div>
        <h2 className="big">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Columns;
