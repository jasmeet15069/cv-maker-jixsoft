import ProjectOutput from "./ProjectOutput";

interface ProjectSection {
    [key: string]: any;
}

interface ProjectSectionProps {
    projectSection: ProjectSection;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectSection }) => {
    return (
        <div>
            {projectSection.projects && (
                <>
                    <h2>Projects</h2>
                    <hr />
                    <div className="section-container">
                        {projectSection.projects[0] && (
                            <ProjectOutput
                                project={projectSection.projects[0]}
                            />
                        )}

                        {projectSection.projects[1] && (
                            <ProjectOutput
                                project={projectSection.projects[1]}
                            />
                        )}

                        {projectSection.projects[2] && (
                            <ProjectOutput
                                project={projectSection.projects[2]}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectSection;
