import StatusRoute from "../routes/StatusRoute";

type Props = {
  withIntl?: boolean;
  children?: any;
};

export const MainWrapper = ({ children, ...props }: any) => (
  <main id="content" role="main" {...props}>
    <div className="container">{children}</div>
  </main>
);

const AppLoader = ({ withIntl, children }: Props) => (
  <MainWrapper>
    <StatusRoute type={102} mode="standalone" withIntl={withIntl}>
      {/* <DomainStatus /> */}
      {children}
    </StatusRoute>
  </MainWrapper>
);

export default AppLoader;
