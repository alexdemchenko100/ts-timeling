import Logo from "./Logo";
import Link from "./global/Link";
import "./Header.scss";

import { FormattedMessage } from "react-intl";
import { useMemo } from "react";
import { clientDefaultLanguage, getCurrent, urlWithLocale } from "../lib/locale";

const flags: any = {
    en: (
        <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H16V12H0V0Z" fill="#41479B" />
            <path
                d="M16 10.4375L10.0833 6.00001L16 1.5625V0H13.9167L8 4.43751L2.08333 0H0V1.5625L5.91667 6.00001L0 10.4375V12H2.08336L8 7.56251L13.9166 12H16V10.4375Z"
                fill="white"
            />
            <path
                d="M0 0.62513V0H0.833161L7.99951 5.37477L15.1659 0H15.9997L16 0.000415282V0.624395L8.83284 5.99977L16 11.3751V11.9991L15.9993 12H15.1665L7.99951 6.62477L0.832552 12H0V11.3744L7.16618 5.99977L0 0.62513Z"
                fill="#DC251C"
            />
            <path d="M6 4V0H10V4H16V8H10V12H6V8H0V4H6Z" fill="white" />
            <path d="M7 5V0H9V5H16V7H9V12H7V7H0V5H7Z" fill="#DC251C" />
        </svg>
    ),
    nb: (
        <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="12" fill="#DC251C" />
            <rect x="4" width="4" height="12" fill="#F5F8FB" />
            <rect x="16" y="4" width="4" height="16" transform="rotate(90 16 4)" fill="#F5F8FB" />
            <rect x="5" width="2" height="12" fill="#41479B" />
            <rect x="16" y="5" width="2" height="16" transform="rotate(90 16 5)" fill="#41479B" />
        </svg>
    ),
};

const Header = ({ children }: any) => {
    const localeIso = useMemo(() => getCurrent() || clientDefaultLanguage, []);
    const langPath = window.location.pathname;

    return (
        <header>
            <div className="header-wrap">
                <Logo />
                <div className="language">
                    <ul className="social-icons">
                        <li>
                            <a href="https://instagram.com/timeling.app">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0039 6.04883C7.51953 6.04883 5.51562 8.05273 5.51562 10.5371C5.51562 13.0215 7.51953 15.0254 10.0039 15.0254C12.4883 15.0254 14.4922 13.0215 14.4922 10.5371C14.4922 8.05273 12.4883 6.04883 10.0039 6.04883ZM10.0039 13.4551C8.39844 13.4551 7.08594 12.1465 7.08594 10.5371C7.08594 8.92773 8.39453 7.61914 10.0039 7.61914C11.6133 7.61914 12.9219 8.92773 12.9219 10.5371C12.9219 12.1465 11.6094 13.4551 10.0039 13.4551ZM15.7227 5.86523C15.7227 6.44727 15.2539 6.91211 14.6758 6.91211C14.0938 6.91211 13.6289 6.44336 13.6289 5.86523C13.6289 5.28711 14.0977 4.81836 14.6758 4.81836C15.2539 4.81836 15.7227 5.28711 15.7227 5.86523ZM18.6953 6.92773C18.6289 5.52539 18.3086 4.2832 17.2812 3.25977C16.2578 2.23633 15.0156 1.91602 13.6133 1.8457C12.168 1.76367 7.83594 1.76367 6.39062 1.8457C4.99219 1.91211 3.75 2.23242 2.72266 3.25586C1.69531 4.2793 1.37891 5.52148 1.30859 6.92383C1.22656 8.36914 1.22656 12.7012 1.30859 14.1465C1.375 15.5488 1.69531 16.791 2.72266 17.8145C3.75 18.8379 4.98828 19.1582 6.39062 19.2285C7.83594 19.3105 12.168 19.3105 13.6133 19.2285C15.0156 19.1621 16.2578 18.8418 17.2812 17.8145C18.3047 16.791 18.625 15.5488 18.6953 14.1465C18.7773 12.7012 18.7773 8.37305 18.6953 6.92773ZM16.8281 15.6973C16.5234 16.4629 15.9336 17.0527 15.1641 17.3613C14.0117 17.8184 11.2773 17.7129 10.0039 17.7129C8.73047 17.7129 5.99219 17.8145 4.84375 17.3613C4.07812 17.0566 3.48828 16.4668 3.17969 15.6973C2.72266 14.5449 2.82813 11.8105 2.82813 10.5371C2.82813 9.26367 2.72656 6.52539 3.17969 5.37695C3.48438 4.61133 4.07422 4.02148 4.84375 3.71289C5.99609 3.25586 8.73047 3.36133 10.0039 3.36133C11.2773 3.36133 14.0156 3.25977 15.1641 3.71289C15.9297 4.01758 16.5195 4.60742 16.8281 5.37695C17.2852 6.5293 17.1797 9.26367 17.1797 10.5371C17.1797 11.8105 17.2852 14.5488 16.8281 15.6973Z"
                                        fill="#1C1C1C"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com/@timeling.app">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_915_2580)">
                                        <path
                                            fillRule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.1034 5.22902C17.1246 5.00701 16.2387 4.48717 15.5674 3.74102C14.8674 2.97876 14.4324 2.01064 14.3274 0.981016V0.541016H10.8874V14.213C10.8852 14.8181 10.6936 15.4073 10.3393 15.8979C9.98505 16.3885 9.48603 16.7558 8.91233 16.9482C8.33862 17.1406 7.71905 17.1485 7.14065 16.9707C6.56224 16.7929 6.05404 16.4384 5.68744 15.957C5.10668 15.6631 4.64186 15.1822 4.36794 14.5917C4.09403 14.0013 4.02701 13.3358 4.17768 12.7026C4.32836 12.0694 4.68794 11.5054 5.19844 11.1016C5.70893 10.6979 6.34056 10.4778 6.99144 10.477C6.34056 10.4778 5.70893 10.6979 5.19844 11.1016C4.68794 11.5054 4.32836 12.0694 4.17768 12.7026C4.02701 13.3358 4.09403 14.0013 4.36794 14.5917C4.64186 15.1822 5.10668 15.6631 5.68744 15.957C5.36125 15.5277 5.16139 15.0158 5.11037 14.479C5.05935 13.9423 5.15919 13.4019 5.39866 12.9188C5.63813 12.4357 6.00771 12.0291 6.46579 11.7447C6.92387 11.4603 7.45225 11.3094 7.99144 11.309C8.28989 11.3106 8.58645 11.3564 8.87144 11.445V7.94902C8.53779 7.89984 8.20063 7.87843 7.86344 7.88502V10.613V7.88502C6.62922 7.91062 5.42943 8.29667 4.41187 8.99562C3.3943 9.69458 2.6034 10.6759 2.13658 11.8187C1.66976 12.9615 1.5474 14.216 1.78458 15.4275C2.02176 16.6389 2.60813 17.7546 3.47144 18.637C4.35047 19.5374 5.47797 20.1553 6.7099 20.4117C7.94183 20.6682 9.22224 20.5515 10.3875 20.0766C11.5528 19.6017 12.5501 18.7902 13.2519 17.7458C13.9537 16.7013 14.3281 15.4714 14.3274 14.213V7.22902C15.7282 8.22789 17.407 8.7623 19.1274 8.75702V5.34102C18.7833 5.33741 18.4403 5.29989 18.1034 5.22902Z"
                                            fill="#1C1C1C"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_915_2580">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                                transform="translate(0 0.541016)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/timelingapp">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_915_2581)">
                                        <path
                                            d="M14.6539 11.791L15.2094 8.17148H11.7364V5.82266C11.7364 4.83242 12.2215 3.86719 13.777 3.86719H15.3559V0.785547C15.3559 0.785547 13.9231 0.541016 12.5531 0.541016C9.69299 0.541016 7.82346 2.27461 7.82346 5.41289V8.17148H4.64417V11.791H7.82346V20.541H11.7364V11.791H14.6539Z"
                                            fill="#1C1C1C"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_915_2581">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                                transform="translate(0 0.541016)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    {localeIso === "nb-NO" && (
                        <>
                            {flags["en"]}
                            <a href={urlWithLocale(window.location.href, "en-GB")}>Eng</a>
                        </>
                    )}
                    {localeIso === "en-GB" && (
                        <>
                            {flags["nb"]}
                            <a href={urlWithLocale(window.location.href, "nb-NO")}>Nor</a>
                        </>
                    )}
                </div>
            </div>
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
                            <Link href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=Home_buttons&adj_fallback=https%3A%2F%2Ftimeling.com%2F">
                                <img src={"assets/eng/app-store.svg"} alt="app-store" />
                            </Link>
                            <Link href="https://rqt5.adj.st/?adj_t=2fdkvp8&adj_campaign=Home_buttons&adj_fallback=https%3A%2F%2Ftimeling.com%2F">
                                <img src={"assets/eng/play-store.svg"} alt="play-store" />
                            </Link>
                        </div>
                    </div>
                    <div className="hero-info-img">
                        <img
                            src={
                                langPath === "/nb-no/"
                                    ? "assets/nor/main_screenshots_nor.png"
                                    : "assets/eng/main_screenshots_eng.png"
                            }
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
