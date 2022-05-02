import { CookieDropdown } from "./CookieDropdown";

export const CookieNecessary = () => {
    return (
        <div className="cookie-necessary">
            <section>
                <h1>Strictly necessary cookies</h1>
                <h2>Strictly necessary cookies owned by Timeling.com </h2>
                <p>
                    Necessary cookies help make a website usable, activating basic functions such as
                    page browsing and access to secure areas of the site. The webpage cannot work
                    correctly without these cookies and are necessary to offer our activities and
                    services at timeling.com{" "}
                </p>
                <h5>These cookies must be enabled always</h5>
                <CookieDropdown
                    title="See complete list of cookies"
                    data={[
                        {
                            title: "Google Analytics",
                            description: "Description of this cookie ",
                        },

                        {
                            title: "Google Tag Manager",
                            description: "Description of this cookie ",
                        },
                        {
                            title: "Google Tag Manager",
                            description: "Description of this cookie ",
                        },
                    ]}
                />
            </section>

            <h2>Strictly necessary cookies owned by third parties</h2>
            <p>
                With our authorization, some third party cookies may be deposited on your device.
                These cookies, while owned by other domains, are considered essential to your
                experience on Timeling.com for different reasons. For example, for security reasons
                or to remember your preferences. In addition, sometimes our site integrates
                multimedia content. This content is often out of our control, so we recommend
                visiting the Privacy Policy of each company to find out more about their use of
                cookies.
            </p>
            <p>
                Each of these third parties has its own Privacy Privacy policy. For a full list of
                the cookies they may deposit, please visit the links below:
            </p>
            <h5>These cookies must be enabled always</h5>

            <CookieDropdown
                title="See complete list of cookies"
                data={[
                    {
                        title: "Google Analytics",
                        description: "Description of this cookie ",
                    },

                    {
                        title: "Google Tag Manager",
                        description: "Description of this cookie ",
                    },
                    {
                        title: "Google Tag Manager",
                        description: "Description of this cookie ",
                    },
                ]}
            />
        </div>
    );
};
