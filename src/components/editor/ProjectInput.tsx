import { useEffect, useState } from "react";
import Input from "./Input";

type updateProjectInputFunction = (key: number, value: any) => void;

interface ProjectInputProps {
    updateProjectSection: updateProjectInputFunction;
    projectId: number;
}

const ProjectInput: React.FC<ProjectInputProps> = ({
    updateProjectSection,
    projectId,
}) => {
    const [project, setProject] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        updateProjectSection(projectId, project);
    }, [project]);

    const toggleDropdown = () => {
        setDropdownOpen((prevOpen) => !prevOpen);
    };

    const updateProject = (key: string, value: any) => {
        setProject((prevProject) => ({
            ...prevProject,
            [key]: value,
        }));
    };

    return (
        <div className="project-input-container">
            <div className="section-header-container">
                <h2>Project {projectId + 1}</h2>
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
                        keyName="title"
                        labelName="Project Title"
                        placeholder="Title"
                        updateParentSection={updateProject}
                    />

                    <Input
                        type="text"
                        keyName="technologies"
                        labelName="Technologies Used"
                        placeholder="Technologies Used"
                        updateParentSection={updateProject}
                    />

                    <Input
                        type="text"
                        keyName="demoURL"
                        labelName="Live Demo URL"
                        placeholder="https://www.demo.com"
                        updateParentSection={updateProject}
                    />

                    <Input
                        type="text"
                        keyName="repositoryURL"
                        labelName="Repository URL"
                        placeholder="https://www.github.com/username/projectName"
                        updateParentSection={updateProject}
                    />

                    <Input
                        type="text"
                        keyName="npmURL"
                        labelName="NPM URL"
                        placeholder="https://www.npm.com/username/packageName"
                        updateParentSection={updateProject}
                    />

                    <Input
                        type="text"
                        keyName="description1"
                        labelName="Description Line 1"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                    <Input
                        type="text"
                        keyName="description2"
                        labelName="Description Line 2"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                    <Input
                        type="text"
                        keyName="description3"
                        labelName="Description Line 3"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                    <Input
                        type="text"
                        keyName="description4"
                        labelName="Description Line 4"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                    <Input
                        type="text"
                        keyName="description5"
                        labelName="Description Line 5"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                    <Input
                        type="text"
                        keyName="description6"
                        labelName="Description Line 6"
                        placeholder="description"
                        updateParentSection={updateProject}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectInput;
