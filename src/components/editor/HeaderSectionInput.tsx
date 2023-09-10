import { useState } from "react";
import Input from "./Input";

type updateHeaderSectionFunction = (key: string, value: any) => void;

interface HeaderSectionProps {
    updateHeaderSection: updateHeaderSectionFunction;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    updateHeaderSection,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Header Section</h2>
                <button
                    className="dropdown-toggle-btn"
                    onClick={toggleDropdown}
                >
                    {dropdownOpen ? "▲" : "▼"}
                </button>
            </div>

            <div
                className={
                    dropdownOpen
                        ? "dropdown-container show-dropdown"
                        : "dropdown-container"
                }
            >
                <div className="input-container">
                    <Input
                        type="text"
                        keyName="name"
                        labelName="Name"
                        placeholder="Your Name"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="email"
                        keyName="email"
                        labelName="Email"
                        placeholder="johndoe@notreal.com"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="number"
                        keyName="countryCode"
                        labelName="Country Code"
                        maxLength={4}
                        placeholder="91"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="tel"
                        keyName="phoneNumber"
                        labelName="Phone Number"
                        maxLength={10}
                        placeholder="98XXXXXXXX"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="text"
                        keyName="portfolioURL"
                        labelName="Portfolio URL"
                        placeholder="https://www.portfolio.me"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="text"
                        keyName="githubURL"
                        labelName="Github URL"
                        placeholder="https://www.github.com/username"
                        updateParentSection={updateHeaderSection}
                    />

                    <Input
                        type="text"
                        keyName="linkedInURL"
                        labelName="LinkedIn URL"
                        placeholder="https://www.linkedin.com/in/username"
                        updateParentSection={updateHeaderSection}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
