import Columns from "./components/Columns";
import Header from "./components/Header";

import "./App.scss";
import Footer from "./components/Footer";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Header>
        <a href="#FormHeading" className="button big">
          Notify me
        </a>
      </Header>
      <main>
        <Columns
          className="content-width"
          videoUrl={"/assets/scrolldates.mp4"}
          title={
            <>
              Scroll dates, <br /> not profiles
            </>
          }
        >
          <p className="mobile">
            The dating app for, well, dates. Say goodbye to endless chatting and
            time-wasting.
          </p>
          <p className="non-mobile">
            Timeling is a calendar-based meet-up app that lets you set and go on
            dates. This saves you endless chatting, clashing expectations or
            ghosting – and helps you to actually meet new people, friends and
            maybe even the love of your life. So, stop swiping and start dating.
          </p>
        </Columns>
        <Columns
          className="content-width reverse-desktop"
          videoUrl={"/assets/timewemet.mp4"}
          title={"It's time we met"}
        >
          <p className="mobile">
            Online dating, the Timeling way: Simply create a date, see who likes
            it and choose a match. Simple as that.
          </p>
          <p className="non-mobile">
            A new kind of online dating: With Timeling, you can create a date,
            see who likes it and choose a match. Then you can chat or call to
            test the waters, confirm and meet up. No more wasting time, no more
            frustration. It’s a dating app with an active deadline, so to say.
          </p>
        </Columns>
        <Columns
          className="content-width last"
          videoUrl={"/assets/ladiesfirst.mp4"}
          title={"Ladies first"}
        >
          <p className="mobile">
            We’ve developed a system that eliminates creeps and timewasters. Our
            user rating filters for authenticity and sincerity.
          </p>
          <p className="non-mobile">
            Who runs the world? Exactly. That’s why we’ve developed a system
            that lets you confidentially share your experience with our admins,
            so that we can make Timeling a bad-date-free place for you to enjoy.
          </p>
        </Columns>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default App;
