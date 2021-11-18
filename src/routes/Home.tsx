import Columns from "../components/Columns";
import Header from "../components/Header";
import SubscribeForm from "../components/subscribe/SubscribeForm";
import { FormattedMessage } from "react-intl";
import RouteContainer from "../ui/RouteContainer";
import Countdown from "react-countdown";

const Home = () => {
  const onClickNotify = () => {
    const target = document.getElementById("FormHeading");

    target?.scrollIntoView({ behavior: "smooth" });
  };

  const routeTitle = "Timeling";
  const routeDescription = "";

  return (
    <RouteContainer
      title={routeTitle}
      description={routeDescription}
      name="home"
    >
      <Header>
        <div className="header-actions">
          <button className="button big primary" onClick={onClickNotify}>
            <FormattedMessage id="join_the_waitlist" />
          </button>
          <div className="coming-soon">
            <Countdown
              date={new Date(2022, 0, 19)}
              renderer={({ days, hours, minutes, seconds }) => {
                const months = days >= 61 ? 2 : days >= 31 ? 1 : 0;
                const days2 =
                  days >= 61 ? days - 61 : days >= 31 ? days - 31 : days;
                return (
                  <div className="countdown">
                    <div>
                      <span className="value">{months}</span>
                      <span className="name">
                        <FormattedMessage id="months" />
                      </span>
                    </div>
                    <div>
                      <span className="value">{days2}</span>
                      <span className="name">
                        <FormattedMessage id="days" />
                      </span>
                    </div>
                    <div>
                      <span className="value">{hours}</span>
                      <span className="name">
                        <FormattedMessage id="hours" />
                      </span>
                    </div>
                    <div>
                      <span className="value">{minutes}</span>
                      <span className="name">
                        <FormattedMessage id="minutes" />
                      </span>
                    </div>
                    <div>
                      <span className="value">{seconds}</span>
                      <span className="name">
                        <FormattedMessage id="seconds" />
                      </span>
                    </div>
                  </div>
                );
              }}
            />
            <span className="soon">
              <FormattedMessage id="coming_soon" />
            </span>
          </div>
        </div>
      </Header>
      <Columns
        className="content-width"
        videoUrl={"/assets/scrolldates.mp4"}
        url={"/assets/scrolldates.png"}
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
        url={"/assets/timewemet.png"}
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
        url={"/assets/ladiesfirst.png"}
        title={<FormattedMessage id="ladies_first_title" />}
      >
        <p className="mobile">
          <FormattedMessage id="ladies_first_content_short" />
        </p>
        <p className="non-mobile">
          <FormattedMessage id="ladies_first_content_long" />
        </p>
      </Columns>
      <SubscribeForm />
    </RouteContainer>
  );
};

export default Home;
