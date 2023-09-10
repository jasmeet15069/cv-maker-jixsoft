import { useEffect, useState } from "react";
import ProjectInput from "./ProjectInput";

type updateProjectSectionFunction = (key: string, value: any) => void;

interface ProjectSectionProps {
    updateProjectSection: updateProjectSectionFunction;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    updateProjectSection,
}) => {
    const [projects, setProjects] = useState([{}, {}, {}]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        updateProjectSection("projects", projects);
    }, [projects]);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    const updateProjects = (index: number, newValue: any) => {
        const newProjects = projects.map((value, idx) =>
            idx === index ? newValue : value
        );
        setProjects(newProjects);
    };

    return (
        <div className="input-section-container">
            <div className="section-header-container">
                <h2>Projects Section</h2>
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
                    <ProjectInput
                        projectId={0}
                        updateProjectSection={updateProjects}
                    />

                    <ProjectInput
                        projectId={1}
                        updateProjectSection={updateProjects}
                    />

                    <ProjectInput
                        projectId={2}
                        updateProjectSection={updateProjects}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
