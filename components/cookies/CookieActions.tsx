interface iProps {
    handleAcceptAllCookies: () => void;
    handleSavePreferences: () => void;
}

export const CookieActions = ({ handleAcceptAllCookies, handleSavePreferences }: iProps) => {
    return (
        <div className="cookie-actions">
            <button className="button primary" onClick={handleAcceptAllCookies}>
                Accept all cookies
            </button>
            <button className="button outline" onClick={handleSavePreferences}>
                Save preferences
            </button>
        </div>
    );
};
