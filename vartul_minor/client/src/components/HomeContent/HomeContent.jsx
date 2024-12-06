import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
    return (
        <>
            {/* Categories Section */}
            <section className="categories">
                <div className="category">Oil Filters</div>
                <div className="category">Air Filters</div>
                <div className="category">Spark Plugs</div>
                <div className="category">Timing Belts</div>
                <div className="category">Fuel Injectors</div>
                <div className="category">Other Accessories</div>
                <div className="category">Fuel Pump</div>
                <div className="category">Exhaust Muffler</div>
                <div className="category">Wiper Blades</div>
                <div className="category">Brake Pads</div>
                <div className="category">Battery</div>
                <div className="category">Headlight Bulb</div>
                <div className="category">Alternator</div>
            </section>

            {/* Product Listings Section */}
            <main className="product-listings">
                <div className="product-card">
                    <img src="assets/oilfilter.jpg" alt="Oil Filter" />
                    <h3>Premium Oil Filter</h3>
                    <p className="price">₹1,200</p>
                </div>
                <div className="product-card">
                    <img src="assets/air-filter.jpg" alt="Air Filter" />
                    <h3>Durable Air Filter</h3>
                    <p className="price">₹950</p>
                </div>
                <div className="product-card">
                    <img src="assets/spark-plug.jpg" alt="Spark Plug" />
                    <h3>High-Performance Spark Plug</h3>
                    <p className="price">₹700</p>
                </div>
                <div className="product-card">
                    <img src="assets/fuel-pump.jpg" alt="Fuel Pump" />
                    <h3>Reliable Fuel Pump</h3>
                    <p className="price">₹1,800</p>
                </div>
                <div className="product-card">
                    <img src="assets/exhaust-muffler.jpg" alt="Exhaust Muffler" />
                    <h3>Stainless Steel Exhaust Muffler</h3>
                    <p className="price">₹3,500</p>
                </div>
                <div className="product-card">
                    <img src="assets/wiper-blade.jpg" alt="Wiper Blade" />
                    <h3>High-Durability Wiper Blade</h3>
                    <p className="price">₹400</p>
                </div>
                <div className="product-card">
                    <img src="assets/brake-pad.jpg" alt="Brake Pad" />
                    <h3>Premium Brake Pad</h3>
                    <p className="price">₹1,200</p>
                </div>
                <div className="product-card">
                    <img src="assets/battery.jpg" alt="Battery" />
                    <h3>Long-Life Car Battery</h3>
                    <p className="price">₹5,000</p>
                </div>
                <div className="product-card">
                    <img src="assets/headlight-bulb.jpg" alt="Headlight Bulb" />
                    <h3>Bright Headlight Bulb</h3>
                    <p className="price">₹300</p>
                </div>
                <div className="product-card">
                    <img src="assets/alternator.jpg" alt="Alternator" />
                    <h3>High-Output Alternator</h3>
                    <p className="price">₹4,000</p>
                </div>
            </main>
        </>
    );
};

export default HomeContent;
