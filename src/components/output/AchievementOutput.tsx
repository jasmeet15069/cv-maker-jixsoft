interface AchievementSection {
    [key: string]: any;
}

interface AchievementSectionProps {
    achievementSection: AchievementSection;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
    achievementSection,
}) => {
    return (
        <div>
            <h2>Achievements</h2>
            <hr />
            <div className="section-container">
                <ul>
                    {achievementSection.achievement1 && (
                        <li>{achievementSection.achievement1}</li>
                    )}
                    {achievementSection.achievement2 && (
                        <li>{achievementSection.achievement2}</li>
                    )}
                    {achievementSection.achievement3 && (
                        <li>{achievementSection.achievement3}</li>
                    )}
                    {achievementSection.achievement4 && (
                        <li>{achievementSection.achievement4}</li>
                    )}
                    {achievementSection.achievement5 && (
                        <li>{achievementSection.achievement5}</li>
                    )}
                    {achievementSection.achievement6 && (
                        <li>{achievementSection.achievement6}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AchievementSection;
