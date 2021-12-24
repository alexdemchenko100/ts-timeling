interface iProps {
    title: string;
    countryName: string;
}

export const CookieHeader = ({ title, countryName }: iProps) => {
    return (
        <div className="cookie-header-container">
            <div className="content-width-1110 container">
                <div className="title-container">
                    <h1>{title}</h1>
                </div>
                <div className="country-container">
                    <p>{countryName}</p>
                </div>
            </div>
        </div>
    );
};
