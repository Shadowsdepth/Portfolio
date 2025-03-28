import React from 'react';

const PortfolioPage: React.FC = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'PLACEHOLDER_IMAGE_1',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_1',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_1',
        },
        {
            title: 'Project 2',
            image: 'PLACEHOLDER_IMAGE_2',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_2',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_2',
        },
        {
            title: 'Project 3',
            image: 'PLACEHOLDER_IMAGE_3',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_3',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_3',
        },
        {
            title: 'Project 4',
            image: 'PLACEHOLDER_IMAGE_4',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_4',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_4',
        },
        {
            title: 'Project 5',
            image: 'PLACEHOLDER_IMAGE_5',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_5',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_5',
        },
        {
            title: 'Project 6',
            image: 'PLACEHOLDER_IMAGE_6',
            deployedLink: 'PLACEHOLDER_DEPLOYED_LINK_6',
            githubLink: 'PLACEHOLDER_GITHUB_LINK_6',
        },
    ];

    return (
        <div>
            <h1>Portfolio Page</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                        <h2>{project.title}</h2>
                        <p>
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                                Deployed Application
                            </a>
                        </p>
                        <p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;