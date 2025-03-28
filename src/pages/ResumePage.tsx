import React from 'react';

const ResumePage: React.FC = () => {
    return (
        <div>
            <h1>Resume Page</h1>
            <a href="#" download onClick={(e) => e.preventDefault()}>
                Download My Resume (N/A)
            </a>
            <h2>Proficiencies</h2>
            <div className="proficiencies-box">
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
            </div>
        </div>
    );
};

export default ResumePage;
