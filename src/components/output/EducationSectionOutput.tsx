import formatDate from "../../utils/formatDate";

interface EducationSection {
    [key: string]: any;
}

interface EducationSectionProps {
    educationSection: EducationSection;
}

const EducationSection: React.FC<EducationSectionProps> = ({
    educationSection,
}) => {
    return (
        <div>
            <h2>Education</h2>
            <hr />

            <div className="section-container">
                {(educationSection.instituteName ||
                    educationSection.instituteAddress) && (
                    <div className="container">
                        {educationSection.instituteName && (
                            <h3>{educationSection.instituteName}</h3>
                        )}

                        {educationSection.instituteAddress && (
                            <span>{educationSection.instituteAddress}</span>
                        )}
                    </div>
                )}

                {(educationSection.course ||
                    educationSection.cgpa ||
                    educationSection.startDate ||
                    educationSection.endDate) && (
                    <div className="container italic-text">
                        {(educationSection.course || educationSection.cgpa) && (
                            <span>
                                {educationSection.course}-
                                {educationSection.cgpa}
                            </span>
                        )}

                        {(educationSection.startDate ||
                            educationSection.endDate) && (
                            <span>
                                {educationSection.startDate &&
                                    formatDate(educationSection.startDate)}
                                -
                                {educationSection.endDate &&
                                    formatDate(educationSection.endDate)}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EducationSection;
