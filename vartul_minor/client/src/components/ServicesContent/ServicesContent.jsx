import React from 'react';
import './ServicesContent.css';

const ServicesContent = () => {
    return (
        <>
            {/* Header Section */}
            <header className="header">
                <h1>Our Services</h1>
                <p>Expert solutions for all your vehicle spare parts needs</p>
            </header>

            {/* Services Section */}
            <section className="services">
                <div className="service-card">
                    <div className="icon">🔧</div>
                    <h3>Oil Filter Replacement</h3>
                    <p>Our oil filter replacement service ensures your engine runs smoothly with quality filters.</p>
                </div>

                <div className="service-card">
                    <div className="icon">⚡</div>
                    <h3>Spark Plug Installation</h3>
                    <p>We offer high-performance spark plug installation for better engine efficiency and fuel economy.</p>
                </div>

                <div className="service-card">
                    <div className="icon">⛽</div>
                    <h3>Fuel Injector Services</h3>
                    <p>Our fuel injector services improve engine performance by ensuring clean, efficient fuel delivery.</p>
                </div>

                <div className="service-card">
                    <div className="icon">🛠️</div>
                    <h3>Timing Belt Maintenance</h3>
                    <p>We provide professional timing belt checks and replacements to prevent costly engine damage.</p>
                </div>
            </section>
        </>
    );  
};

export default ServicesContent;

