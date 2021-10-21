import StatusRoute from "../routes/StatusRoute";

type Props = {
  withIntl?: boolean;
  children?: any;
};
const AppLoader = ({ withIntl, children }: Props) => (
  <StatusRoute type={102} mode="standalone" withIntl={withIntl}>
    {/* <DomainStatus /> */}
    {children}
  </StatusRoute>
);

export default AppLoader;
