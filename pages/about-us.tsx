import Image from "next/image";
import { FormattedMessage } from "react-intl";

import Header from "../components/Header";
import RouteContainer from "../components/ui/RouteContainer";

const AboutUs = () => {
  const routeTitle = "Timeling";
  const routeDescription = "";

  return (
    <RouteContainer title={routeTitle} description={routeDescription} name="home">
      <Header theme="dark"></Header>
      {/* It's Time We Meet */}
      <section className="time-we-met-section">
        <div className="container">
          <div className="time-we-met-left">
            <h1 className="time-we-met-title">
              <FormattedMessage id="about_us_title" />
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
                <path
                  d="M27.0763 2.68319C25.711 1.45624 23.9591 0.822256 22.1896 0.874991C19.9929 0.874991 17.7757 1.77733 16.1544 3.45194L15.0001 4.63964L13.8458 3.45194C12.2228 1.77733 10.0079 0.874991 7.81064 0.874991C6.04111 0.874991 4.29092 1.45683 2.87353 2.68319C-0.767482 5.83495 -0.949708 11.4547 2.33271 14.8473L13.653 26.5484C14.0274 26.9316 14.5079 27.125 14.9942 27.125C15.4824 27.125 15.9722 26.9336 16.3425 26.5505L27.6569 14.8494C30.9493 11.4512 30.7677 5.83202 27.0763 2.68319ZM25.6407 12.8926L15.0001 23.8965L4.35596 12.8926C2.46689 10.9414 2.01924 7.09179 4.71455 4.80956C7.05244 2.78573 10.2569 3.78417 11.8278 5.40546L15.0019 8.68202L18.1753 5.40546C19.7233 3.80761 22.9366 2.77519 25.2886 4.80956C27.9552 7.12108 27.5685 10.9004 25.6407 12.8926Z"
                  fill="#FFAF8D" />
              </svg>
            </h1>
            <p className="time-we-met-desc">
              <FormattedMessage id="about_us_title_desc1" />
            </p>
            <p className="time-we-met-desc">
              <FormattedMessage id="about_us_title_desc2" />
            </p>
          </div>
          <div className="time-we-met-right">
            <Image src={`/assets/about-us-1.png`} alt="It's time we met" layout="fill" />
            <p className="time-we-met-desc mobile-only">
              <FormattedMessage id="about_us_title_desc2" />
            </p>
          </div>
        </div>
      </section>
      {/* Help People Meet */}
      <section className="help-people-meet-section">
        <div className="container">
          <div className="help-people-meet-left">
            <h1 className="help-people-meet-title mobile-only">
              <FormattedMessage id="help_people_meet_title" />
            </h1>
            <div className="help-people-meet-image">
              <Image src={`/assets/about-us-2.png`} alt="We help people meet" layout="fill" />
            </div>
          </div>
          <div className="help-people-meet-right">
            <h2 className="help-people-meet-title">
              <FormattedMessage id="help_people_meet_title" />
            </h2>
            <p className="help-people-meet-desc">
              <FormattedMessage id="help_people_meet_desc1" />
            </p>
            <p className="help-people-meet-desc">
              <FormattedMessage id="help_people_meet_desc2" />
            </p>
            <p className="help-people-meet-desc">
              <FormattedMessage id="help_people_meet_desc3" />
            </p>
            <p className="help-people-meet-desc">
              <FormattedMessage id="help_people_meet_desc4" />
            </p>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="our-values-section">
        <div className="container">
          <div className="our-values-top">
            <div className="our-values-top-left">
              <h2 className="our-values-title">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <path d="M46 22.9998C45.9953 19.9994 44.8945 17.104 42.9047 14.8583C40.9148 12.6126 38.1731 11.1712 35.195 10.8054C34.8291 7.82714 33.3877 5.08524 31.1418 3.09534C28.8959 1.10543 26.0004 0.00463675 22.9998 0C19.9993 0.00470666 17.1039 1.10554 14.8582 3.09545C12.6124 5.08536 11.1711 7.82723 10.8054 10.8054C7.82722 11.1711 5.08536 12.6124 3.09545 14.8582C1.10554 17.1039 0.00470642 19.9993 0 22.9998C0.00469586 26.0004 1.10551 28.8958 3.09542 31.1416C5.08533 33.3874 7.8272 34.8288 10.8054 35.1946C11.1711 38.1728 12.6124 40.9146 14.8582 42.9045C17.1039 44.8945 19.9993 45.9953 22.9998 46C26.0004 45.9953 28.8959 44.8946 31.1418 42.9047C33.3877 40.9148 34.8291 38.1728 35.195 35.1946C38.1731 34.8286 40.9149 33.3872 42.9047 31.1414C44.8945 28.8957 45.9953 26.0003 46 22.9998ZM22.9998 3.1764C25.1638 3.18022 27.256 3.953 28.9029 5.35677C30.5498 6.76055 31.6442 8.70394 31.9907 10.84C30.1219 11.105 28.339 11.7962 26.78 12.8603C25.221 13.9244 23.9276 15.3328 22.9999 16.9766C22.0722 15.3329 20.779 13.9245 19.2201 12.8604C17.6611 11.7963 15.8784 11.105 14.0096 10.84C14.356 8.704 15.4502 6.76061 17.097 5.35683C18.7438 3.95304 20.8359 3.18024 22.9998 3.1764ZM31.9435 14.0568C31.5907 15.8296 30.7202 17.458 29.442 18.7361C28.1638 20.0142 26.5353 20.8845 24.7625 21.2372C25.1153 19.4644 25.9858 17.836 27.264 16.5579C28.5422 15.2798 30.1707 14.4095 31.9435 14.0568ZM21.2372 21.2372C19.4644 20.8845 17.8361 20.0141 16.558 18.736C15.2799 17.4579 14.4095 15.8296 14.0568 14.0568C15.8296 14.4095 17.4579 15.2799 18.736 16.558C20.0141 17.8361 20.8845 19.4644 21.2372 21.2372ZM3.1764 22.9998C3.18025 20.8359 3.95305 18.7438 5.35684 17.097C6.76062 15.4502 8.70401 14.356 10.84 14.0096C11.105 15.8784 11.7963 17.6612 12.8604 19.2201C13.9244 20.779 15.3328 22.0722 16.9766 22.9999C15.3328 23.9276 13.9245 25.2209 12.8604 26.7798C11.7963 28.3388 11.105 30.1216 10.84 31.9904C8.70397 31.6439 6.76058 30.5496 5.35679 28.9028C3.95301 27.2559 3.18022 25.1638 3.1764 22.9998ZM21.2372 24.7625C20.8845 26.5353 20.0141 28.1637 18.7361 29.4418C17.458 30.72 15.8296 31.5904 14.0568 31.9431C14.4095 30.1703 15.2799 28.5419 16.5579 27.2638C17.836 25.9857 19.4644 25.1152 21.2372 24.7625ZM22.9998 42.8236C20.8359 42.8197 18.7438 42.0469 17.097 40.6431C15.4502 39.2393 14.356 37.296 14.0096 35.1599C15.8784 34.8949 17.6612 34.2036 19.2201 33.1395C20.779 32.0753 22.0723 30.6669 22.9999 29.0231C23.9276 30.6669 25.2209 32.0754 26.78 33.1395C28.339 34.2037 30.1218 34.895 31.9907 35.16C31.6442 37.2961 30.5498 39.2395 28.9029 40.6432C27.256 42.047 25.1638 42.8198 22.9998 42.8236ZM24.7625 24.7625C26.5354 25.1152 28.1638 25.9856 29.442 27.2637C30.7202 28.5418 31.5908 30.1703 31.9435 31.9431C30.1707 31.5904 28.5422 30.72 27.264 29.4419C25.9858 28.1638 25.1153 26.5353 24.7625 24.7625ZM35.1603 31.9903C34.8953 30.1215 34.204 28.3387 33.1398 26.7798C32.0757 25.2208 30.6672 23.9275 29.0234 22.9999C30.6672 22.0723 32.0757 20.779 33.1398 19.2201C34.204 17.6612 34.8953 15.8784 35.1603 14.0096C37.2963 14.356 39.2396 15.4503 40.6434 17.0971C42.0471 18.7438 42.8198 20.8359 42.8236 22.9998C42.8198 25.1637 42.0471 27.2559 40.6434 28.9027C39.2397 30.5495 37.2963 31.6439 35.1603 31.9903Z" fill="#FFAF8D"/>
                </svg>
                <FormattedMessage id="our_values_title" />
              </h2>
              <p className="our-values-desc">
                <FormattedMessage id="our_values_desc" />
              </p>
            </div>
            <div className="our-values-top-right">
              <Image src={`/assets/about-us-3.png`} alt="Our values" layout="fill" />
            </div>
          </div>
          <div className="our-values-bottom">
            <div className="our-values-feature">
              <h3><FormattedMessage id="our_values_feature_1_title" /></h3>
              <p><FormattedMessage id="our_values_feature_1_desc" /></p>
            </div>
            <div className="our-values-feature">
              <h3><FormattedMessage id="our_values_feature_2_title" /></h3>
              <p><FormattedMessage id="our_values_feature_2_desc" /></p>
            </div>
            <div className="our-values-feature">
              <h3><FormattedMessage id="our_values_feature_3_title" /></h3>
              <p><FormattedMessage id="our_values_feature_3_desc" /></p>
            </div>
            <div className="our-values-feature">
              <h3><FormattedMessage id="our_values_feature_4_title" /></h3>
              <p><FormattedMessage id="our_values_feature_4_desc" /></p>
            </div>
          </div>
        </div>
      </section>
    </RouteContainer>
  );
};

export default AboutUs;
