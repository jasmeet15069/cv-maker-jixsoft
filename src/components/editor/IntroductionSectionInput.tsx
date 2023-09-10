import { useEffect, useState } from "react";

type updateIntroductionSectionFunction = (key: string, value: any) => void;

interface IntroductionSectionProps {
    updateIntroductionSection: updateIntroductionSectionFunction;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    updateIntroductionSection,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        updateIntroductionSection("careerObjective", inputValue);
    }, [inputValue]);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Career Objective Section</h2>
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
                    <label>
                        <h3>Career Objective</h3>
                        <textarea
                            rows={8}
                            value={inputValue}
                            onChange={updateValue}
                            placeholder="Career Objective"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default IntroductionSection;
