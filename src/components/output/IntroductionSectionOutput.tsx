interface IntroductionSection {
    [key: string]: any;
}

interface IntroductionSectionProps {
    introductionSection: IntroductionSection;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    introductionSection,
}) => {
    return (
        <div>
            <h2>Career Objective</h2>
            <hr />
            <div className="section-container">
                {introductionSection.careerObjective && (
                    <p>{introductionSection.careerObjective}</p>
                )}
            </div>
        </div>
    );
};

export default IntroductionSection;
