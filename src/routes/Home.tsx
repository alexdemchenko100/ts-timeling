import Columns from "../components/Columns";
import Header from "../components/Header";
import Form from "../components/Form";
import { FormattedMessage } from "react-intl";

const Home = () => {
  const onClickNotify = () => {
    const target = document.getElementById("FormHeading");

    target?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header>
        <button className="button big" onClick={onClickNotify}>
          <FormattedMessage id="notify_me" />
        </button>
      </Header>
      <Columns
        className="content-width"
        videoUrl={"/assets/scrolldates.mp4"}
        title={
          <FormattedMessage id="scroll_dates_title" values={{ 0: <br /> }} />
        }
      >
        <p className="mobile">
          <FormattedMessage id="scroll_dates_content_short" />
        </p>
        <p className="non-mobile">
          <FormattedMessage id="scroll_dates_content_long" />
        </p>
      </Columns>
      <Columns
        className="content-width reverse-desktop"
        videoUrl={"/assets/timewemet.mp4"}
        title={<FormattedMessage id="time_we_met_title" />}
      >
        <p className="mobile">
          <FormattedMessage id="time_we_met_content_short" />
        </p>
        <p className="non-mobile">
          <FormattedMessage id="time_we_met_content_long" />
        </p>
      </Columns>
      <Columns
        className="content-width last"
        videoUrl={"/assets/ladiesfirst.mp4"}
        title={<FormattedMessage id="ladies_first_title" />}
      >
        <p className="mobile">
          <FormattedMessage id="ladies_first_content_short" />
        </p>
        <p className="non-mobile">
          <FormattedMessage id="ladies_first_content_long" />
        </p>
      </Columns>
      <Form />
    </>
  );
};

export default Home;
