import HeaderSection from "./output/HeaderSectionOutput";
import IntroductionSection from "./output/IntroductionSectionOutput";
import EducationSection from "./output/EducationSectionOutput";
import ProjectSection from "./output/ProjectSectionOutput";
import TechnicalSkillSection from "./output/TechnicalSkillSectionOutput";
import AchievementSection from "./output/AchievementOutput";

interface CV {
    [key: string]: any;
}

interface OutputProps {
    cv: CV;
    font: string;
}

const Output: React.FC<OutputProps> = ({ cv, font }) => {
    return (
        <div className={`output ${font}`}>
            {cv.headerSection && (
                <HeaderSection headerSection={cv.headerSection} />
            )}

            {cv.introductionSection && (
                <IntroductionSection
                    introductionSection={cv.introductionSection}
                />
            )}

            {cv.educationSection && (
                <EducationSection educationSection={cv.educationSection} />
            )}

            {cv.projectSection && (
                <ProjectSection projectSection={cv.projectSection} />
            )}

            {cv.technicalSkillSection && (
                <TechnicalSkillSection
                    technicalSkillSection={cv.technicalSkillSection}
                />
            )}

            {cv.achievementSection && (
                <AchievementSection
                    achievementSection={cv.achievementSection}
                />
            )}
        </div>
    );
};

export default Output;
