import { useState } from "react";
import Icon from "../global/Icon";

interface iProps {
    title: string;
    data: { title: string; description: string }[];
}

export const CookieDropdown = ({ title, data }: iProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    const dropdownClass = isOpen ? "show all" : "show";
    const iconDropdownClass = isOpen ? "icon-open" : "icon";

    return (
        <div className="cookie-dropdown">
            <div className="title-container" onClick={handleClick}>
                <h5>{title}</h5>
                <Icon id="arrow-right" className={iconDropdownClass} />
            </div>
            <div className={dropdownClass}>
                <hr />
                {data.map((item, index) => (
                    <div key={index}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};
