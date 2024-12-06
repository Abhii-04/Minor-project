import React, { useState } from 'react';
import './AboutContent.css';

const AboutContent = () => {
    const [theme, setTheme] = useState({
        '--background-color': '#f7f7f7',
        '--text-color': '#333333',
        '--accent-color': '#fca311',
        '--card-bg': '#ffffff',
        '--card-border': '#eaeaea',
        '--hover-bg': '#333333',
        '--hover-text-color': '#ffffff',
    });

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        Object.keys(newTheme).forEach((key) => {
            document.documentElement.style.setProperty(key, newTheme[key]);
        });
    };

    return (
        <div>
            <header className="search-section">
                <h1>Dynamic Styling Example</h1>
                <input type="text" placeholder="Search..." />
                <button onClick={() => handleThemeChange({
                    '--background-color': '#000000',
                    '--text-color': '#ffffff',
                    '--accent-color': '#ff0000',
                    '--card-bg': '#333333',
                    '--card-border': '#444444',
                    '--hover-bg': '#ff0000',
                    '--hover-text-color': '#000000',
                })}>
                    Dark Theme
                </button>
                <button onClick={() => handleThemeChange({
                    '--background-color': '#f7f7f7',
                    '--text-color': '#333333',
                    '--accent-color': '#fca311',
                    '--card-bg': '#ffffff',
                    '--card-border': '#eaeaea',
                    '--hover-bg': '#333333',
                    '--hover-text-color': '#ffffff',
                })}>
                    Light Theme
                </button>
            </header>
            <main className="categories">
                <div className="category">Category 1</div>
                <div className="category">Category 2</div>
                <div className="category">Category 3</div>
            </main>
        </div>
    );
};

export default AboutContent;
