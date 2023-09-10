import TrimURL from "../../utils/TrimURL";

interface HeaderSection {
    [key: string]: any;
}

interface HeaderSectionProps {
    headerSection: HeaderSection;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ headerSection }) => {
    return (
        <div>
            <div className="container header-section-container">
                <div className="left-container">
                    {headerSection.name && <h1>{headerSection.name}</h1>}
                    {headerSection.email && (
                        <span>
                            Email:
                            <a href={"mailto:" + headerSection.email}>
                                {headerSection.email}
                            </a>
                        </span>
                    )}

                    {(headerSection.countryCode ||
                        headerSection.phoneNumber) && (
                        <span>
                            Mobile:
                            {headerSection.countryCode && (
                                <span>(+{headerSection.countryCode})</span>
                            )}
                            {headerSection.phoneNumber && (
                                <span>{headerSection.phoneNumber}</span>
                            )}
                        </span>
                    )}
                </div>

                <div className="right-container">
                    {headerSection.portfolioURL && (
                        <span>
                            Portfolio:
                            <a
                                href={headerSection.portfolioURL}
                                target="_blank"
                            >
                                {TrimURL(headerSection.portfolioURL)}
                            </a>
                        </span>
                    )}
                    {headerSection.githubURL && (
                        <span>
                            Github:
                            <a href={headerSection.githubURL} target="_blank">
                                {TrimURL(headerSection.githubURL)}
                            </a>
                        </span>
                    )}
                    {headerSection.linkedInURL && (
                        <span>
                            LinkedIn:
                            <a href={headerSection.linkedInURL} target="_blank">
                                {TrimURL(headerSection.linkedInURL)}
                            </a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
