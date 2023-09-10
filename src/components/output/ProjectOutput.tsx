interface ProjectOutput {
    [key: string]: any;
}

interface ProjectOutputProps {
    project: ProjectOutput;
}

const ProjectOutput: React.FC<ProjectOutputProps> = ({ project }) => {
    return (
        <div>
            {(project.title ||
                project.technologies ||
                project.demoURL ||
                project.repositoryURL ||
                project.npmURL) && (
                <div className="container">
                    {project.title && <h3>{project.title}</h3>}

                    {project.technologies && (
                        <span className="italic-text">
                            {project.technologies}
                        </span>
                    )}

                    <div>
                        {project.demoURL && (
                            <span>
                                <a href={project.demoURL} target="_blank">
                                    Live Demo
                                </a>
                            </span>
                        )}

                        {project.demoURL && project.repositoryURL && " | "}

                        {project.repositoryURL && (
                            <span>
                                <a href={project.repositoryURL} target="_blank">
                                    Repository
                                </a>
                            </span>
                        )}

                        {project.repositoryURL && project.npmURL && " | "}

                        {project.npmURL && (
                            <span>
                                <a href={project.npmURL} target="_blank">
                                    NPM
                                </a>
                            </span>
                        )}
                    </div>
                </div>
            )}

            <ul className="project-description-list">
                {project.description1 && <li>{project.description1}</li>}
                {project.description2 && <li>{project.description2}</li>}
                {project.description3 && <li>{project.description3}</li>}
                {project.description4 && <li>{project.description4}</li>}
                {project.description5 && <li>{project.description5}</li>}
                {project.description6 && <li>{project.description6}</li>}
            </ul>
        </div>
    );
};

export default ProjectOutput;
