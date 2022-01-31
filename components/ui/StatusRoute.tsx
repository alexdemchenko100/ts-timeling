import Head from "next/head";

export type Props = {
  //Http statuses
  type: 102 | 302 | 401 | 403 | 404 | 500;
  title?: JSX.Element | string;
  children?: any;
};

const StatusRoute = ({ type, title }: Props) => {
  const showLoader = type === 102 || type === 302;
  return (
    <div className="status-route">
      <Head>
        {!!title && <title>{`${title}`}</title>}
        {/* <meta name="description" property="og:description" content={description} /> */}
      </Head>
      {showLoader && (
        <>
          <svg className="loader" viewBox="0 0 64 64">
            <circle
              id="e"
              className="ring"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              cx="17.152"
              cy="32"
              r="15"
            />
            <circle
              id="s"
              className="ring"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              cx="32"
              cy="46.839"
              r="15"
            />
            <circle
              id="w"
              className="ring"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              cx="46.848"
              cy="32"
              r="15"
            />
            <circle
              id="n"
              className="ring"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              cx="32"
              cy="17.152"
              r="15"
            />
          </svg>
        </>
      )}
      <h1>{title}</h1>
    </div>
  );
};

export default StatusRoute;
