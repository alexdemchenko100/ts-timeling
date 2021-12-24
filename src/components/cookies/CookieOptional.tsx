import { CookieDropdown } from "./CookieDropdown";

interface iProps {
    handleAcceptAllCookies: () => void;
    handleUnacceptAllCookies: () => void;
    cookiePreferences: boolean;
}

export const CookieOptional = ({
    handleAcceptAllCookies,
    handleUnacceptAllCookies,
    cookiePreferences,
}: iProps) => {
    return (
        <div className="cookie-optional">
            <h1>Optional Cookies</h1>
            <h2>Third party cookies that measure website use</h2>
            <p>
                We use the Analytics platforms to measure and analyse how you use Timeling.com.
                Allowing the use of these cookies will enable us to improve your experience based on
                user needs.
            </p>
            <section className="radio-group">
                <input
                    type="radio"
                    id="acceptMeasure"
                    name="acceptMeasure"
                    value="acceptMeasure"
                    checked={cookiePreferences === true}
                    onChange={handleAcceptAllCookies}
                />
                <label htmlFor="acceptMeasure">Use cookies that measure my website use</label>

                <input
                    type="radio"
                    id="unacceptMeasure"
                    name="unacceptMeasure"
                    value="unacceptMeasure"
                    checked={cookiePreferences === false}
                    onChange={handleUnacceptAllCookies}
                />
                <label htmlFor="unacceptMeasure">
                    Do not use cookies that measure my website use
                </label>

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
        </div>
    );
};
