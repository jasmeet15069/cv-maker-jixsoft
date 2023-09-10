type UpdateFontFunction = (fontName: string) => void;
type loadSampleCVFunction = () => void;

interface ToolSectionProps {
    updateFont: UpdateFontFunction;
    loadSampleCV: loadSampleCVFunction;
}

const ToolSection: React.FC<ToolSectionProps> = ({
    updateFont,
    loadSampleCV,
}) => {
    const fontList = [
        "classic-serif",
        "modern-sans-serif",
        "standard-sans-serif",
    ];

    const printResume = () => {
        window.print();
    };

    return (
        <div className="input-section-container tool-section">
            <div className="font-select-btn">
                <button type="button" onClick={() => updateFont(fontList[0])}>
                    serif
                </button>
                <button type="button" onClick={() => updateFont(fontList[1])}>
                    sans-serif 1
                </button>
                <button type="button" onClick={() => updateFont(fontList[2])}>
                    sans-serif 2
                </button>
            </div>

            <div className="resume-related-btn">
                <button
                    type="button"
                    className="load-sample-btn"
                    onClick={() => loadSampleCV()}
                >
                    Load Sample
                </button>
                <button
                    type="button"
                    className="download-pdf-btn"
                    onClick={printResume}
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default ToolSection;
