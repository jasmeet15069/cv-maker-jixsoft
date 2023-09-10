import { useState } from "react";
import Input from "./Input";

type updateTechnicalSkillSectionFunction = (key: string, value: any) => void;

interface TechnicalSkillSectionProps {
    updateTechnicalSkillSection: updateTechnicalSkillSectionFunction;
}

const TechnicalSkillSection: React.FC<TechnicalSkillSectionProps> = ({
    updateTechnicalSkillSection,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };
    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Technical Skills Section</h2>
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
                        keyName="programmingLanguages"
                        labelName="Programming Languages"
                        placeholder="Programming Languages"
                        updateParentSection={updateTechnicalSkillSection}
                    />

                    <Input
                        type="text"
                        keyName="webTechnologies"
                        labelName="Web Technologies"
                        placeholder="Web Technologies"
                        updateParentSection={updateTechnicalSkillSection}
                    />

                    <Input
                        type="text"
                        keyName="frontendFrameworks"
                        labelName="Frontend Frameworks"
                        placeholder="Frontend Frameworks"
                        updateParentSection={updateTechnicalSkillSection}
                    />

                    <Input
                        type="text"
                        keyName="developmentTools"
                        labelName="Development Tools"
                        placeholder="Development Tools"
                        updateParentSection={updateTechnicalSkillSection}
                    />

                    <Input
                        type="text"
                        keyName="testingFramework"
                        labelName="Testing Framework"
                        placeholder="Testing Framework"
                        updateParentSection={updateTechnicalSkillSection}
                    />
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkillSection;
