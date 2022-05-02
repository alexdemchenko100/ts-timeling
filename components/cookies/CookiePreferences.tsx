interface iProps {
    handleOnClick: () => void;
}

export const CookiePreferences = ({ handleOnClick }: iProps) => {
    return (
        <div className="cookie-preferences">
            <h1>Cookies Preferences</h1>

            <p>
                Some of the cookies we use are necessary to make our website work and cannot be
                switched off. Others are optional, third-party cookies that are used to measure,
                analyse and improve your experience.
            </p>
            <button onClick={handleOnClick} className="button primary">
                Accept all cookies
            </button>
        </div>
    );
};
