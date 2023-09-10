import { useEffect, useState } from "react";
import HeaderSection from "./editor/HeaderSectionInput";
import IntroductionSection from "./editor/IntroductionSectionInput";
import EducationSection from "./editor/EducationSectionInput";
import ProjectSection from "./editor/ProjectSectionInput";
import TechnicalSkillSection from "./editor/TechnicalSkillSectionInput";
import AchievementSection from "./editor/AchievementInput";
import ToolSection from "./ToolSection";

type UpdateCVFunction = (key: string, value: any) => void;
type UpdateFontFunction = (fontName: string) => void;
type loadSampleCVFunction = () => void;

interface EditorProps {
    updateCV: UpdateCVFunction;
    updateFont: UpdateFontFunction;
    loadSampleCV: loadSampleCVFunction;
}

const Editor: React.FC<EditorProps> = ({
    updateCV,
    updateFont,
    loadSampleCV,
}) => {
    const [headerSection, setHeaderSection] = useState({});
    const [introductionSection, setIntroductionSection] = useState({});
    const [educationSection, setEducationSection] = useState({});
    const [projectSection, setProjectSection] = useState({});
    const [technicalSkillSection, setTechnicalSkillSection] = useState({});
    const [achievementSection, setAchievementSection] = useState({});

    useEffect(() => {
        updateCV("headerSection", headerSection);
        updateCV("introductionSection", introductionSection);
        updateCV("educationSection", educationSection);
        updateCV("projectSection", projectSection);
        updateCV("technicalSkillSection", technicalSkillSection);
        updateCV("achievementSection", achievementSection);
    }, [
        headerSection,
        introductionSection,
        educationSection,
        projectSection,
        technicalSkillSection,
        achievementSection,
    ]);

    const updateHeaderSection = (key: string, value: any) => {
        setHeaderSection((prevHeaderSection) => ({
            ...prevHeaderSection,
            [key]: value,
        }));
    };

    const updateIntroductionSection = (key: string, value: any) => {
        setIntroductionSection((prevIntroductionSection) => ({
            ...prevIntroductionSection,
            [key]: value,
        }));
    };

    const updateEducationSection = (key: string, value: any) => {
        setEducationSection((prevEducationSection) => ({
            ...prevEducationSection,
            [key]: value,
        }));
    };

    const updateProjectSection = (key: string, value: any) => {
        setProjectSection((prevProjectSection) => ({
            ...prevProjectSection,
            [key]: value,
        }));
    };

    const updateTechnicalSkillSection = (key: string, value: any) => {
        setTechnicalSkillSection((prevTechnicalSkillSection) => ({
            ...prevTechnicalSkillSection,
            [key]: value,
        }));
    };

    const updateAchievementSection = (key: string, value: any) => {
        setAchievementSection((prevAchievementSection) => ({
            ...prevAchievementSection,
            [key]: value,
        }));
    };

    return (
        <div className="editor">
            <ToolSection updateFont={updateFont} loadSampleCV={loadSampleCV} />

            <HeaderSection updateHeaderSection={updateHeaderSection} />

            <IntroductionSection
                updateIntroductionSection={updateIntroductionSection}
            />

            <EducationSection updateEducationSection={updateEducationSection} />

            <ProjectSection updateProjectSection={updateProjectSection} />

            <TechnicalSkillSection
                updateTechnicalSkillSection={updateTechnicalSkillSection}
            />

            <AchievementSection
                updateAchievementSection={updateAchievementSection}
            />
        </div>
    );
};

export default Editor;
