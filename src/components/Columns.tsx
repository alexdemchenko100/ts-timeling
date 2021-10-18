import classNames from "classnames";
import { ReactNode } from "react";

import "./Columns.scss";

type Props = {
  videoUrl: string;
  //   url: string;
  className?: string;
  title: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
};

const Columns = ({ videoUrl, title, children, className }: Props) => {
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
      />
      <div>
        <h1 className="heading">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Columns;
