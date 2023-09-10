import { useState } from "react";
import Input from "./Input";

type updateEducationSectionFunction = (key: string, value: any) => void;

interface EducationSectionProps {
    updateEducationSection: updateEducationSectionFunction;
}

const EducationSection: React.FC<EducationSectionProps> = ({
    updateEducationSection,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Education Section</h2>
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
                        keyName="instituteName"
                        labelName="Institute Name"
                        placeholder="Institute Name"
                        updateParentSection={updateEducationSection}
                    />

                    <Input
                        type="text"
                        keyName="instituteAddress"
                        labelName="Institute Address"
                        placeholder="Institute Address"
                        updateParentSection={updateEducationSection}
                    />

                    <Input
                        type="text"
                        keyName="course"
                        labelName="Course"
                        placeholder="Course"
                        updateParentSection={updateEducationSection}
                    />

                    <Input
                        type="number"
                        keyName="cgpa"
                        labelName="CGPA"
                        placeholder="CGPA"
                        updateParentSection={updateEducationSection}
                    />

                    <Input
                        type="date"
                        keyName="startDate"
                        labelName="Start Date"
                        updateParentSection={updateEducationSection}
                    />

                    <Input
                        type="date"
                        keyName="endDate"
                        labelName="End Date (or expected)"
                        updateParentSection={updateEducationSection}
                    />
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
