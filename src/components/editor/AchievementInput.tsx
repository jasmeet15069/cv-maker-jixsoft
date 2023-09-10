import { useState } from "react";
import Input from "./Input";

type updateAchievementSectionFunction = (key: string, value: any) => void;

interface AchievementSectionProps {
    updateAchievementSection: updateAchievementSectionFunction;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
    updateAchievementSection,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Achievement Section</h2>
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
                        keyName="achievement1"
                        labelName="Achievement 1"
                        placeholder="Achievement 1"
                        updateParentSection={updateAchievementSection}
                    />

                    <Input
                        type="text"
                        keyName="achievement2"
                        labelName="Achievement 2"
                        placeholder="Achievement 2"
                        updateParentSection={updateAchievementSection}
                    />

                    <Input
                        type="text"
                        keyName="achievement3"
                        labelName="Achievement 3"
                        placeholder="Achievement 3"
                        updateParentSection={updateAchievementSection}
                    />

                    <Input
                        type="text"
                        keyName="achievement4"
                        labelName="Achievement 4"
                        placeholder="Achievement 4"
                        updateParentSection={updateAchievementSection}
                    />

                    <Input
                        type="text"
                        keyName="achievement5"
                        labelName="Achievement 5"
                        placeholder="Achievement 5"
                        updateParentSection={updateAchievementSection}
                    />
                </div>
            </div>
        </div>
    );
};

export default AchievementSection;
