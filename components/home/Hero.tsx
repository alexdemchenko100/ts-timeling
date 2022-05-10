import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

import Link from "../global/Link";

export const Hero = () => {
  const { locale } = useRouter();

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-info">
            <h1>
              <FormattedMessage id="home_title" />
            </h1>
            <ul>
              <li>
                <FormattedMessage id="home_des01start" />{" "}
                <b>
                  <FormattedMessage id="home_des01middle" />
                </b>{" "}
                <FormattedMessage id="home_des01end" />
              </li>

              <li>
                <FormattedMessage id="home_des03start" />{" "}
                <b>
                  <FormattedMessage id="home_des03middle" />
                </b>
              </li>
            </ul>
            <div className="btn-wrap">
              <Link className="desktop-only"
                href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=iOS_Button&adj_redirect=https%3A%2F%2Fapps.apple.com%2Fes%2Fapp%2Ftimeling-dating-in-real-life%2Fid1536561208">
              <img src={`/assets/${locale}/app-store.svg`} alt="app-store" />
              </Link>
              <Link className="desktop-only"
                href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=Android_button&adj_redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.timeling.android%26gl%3DES">
              <img src={`/assets/${locale}/play-store.svg`} alt="play-store" />
              </Link>
              <Link className="mobile-only"
                href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=Home_buttons&adj_fallback=https%3A%2F%2Ftimeling.com%2F">
              <img src={`/assets/${locale}/app-store.svg`} alt="app-store" />
              </Link>
              <Link className="mobile-only"
                href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=Home_buttons&adj_fallback=https%3A%2F%2Ftimeling.com%2F">
              <img src={`/assets/${locale}/play-store.svg`} alt="play-store" width={184} height={58} />
              </Link>
            </div>
          </div>
          <div className="hero-info-img">
            <Image src={`/assets/${locale}/main_screenshots.png`} alt="explore page in app" width={575}
              height={656} />
          </div>
        </div>
      </div>
    </div>
  );
};
