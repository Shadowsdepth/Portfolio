import React from 'react';

const AboutMePage: React.FC = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-container-box">
                <div>
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="My Photo/Avatar" 
                    />
                </div>
                <div>
                    <h3>Jade Peterson</h3>
                    <p>
                        Hello! My name is Jade Peterson. I am a developer creating possibly
                        beautiful and functional web applications *wink. Welcome to my portfolio!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;
