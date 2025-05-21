// File: GetLogisticsInsight.jsx

import React from 'react';

const GetLogisticsInsight = () => {
  return (
    <section
      className="w-100 flex justify-center items-center pv6 ph4"
      style={{
        background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
        minHeight: '300px', // Increase height of the section
      }}
    >
      <div className="flex flex-column flex-row-ns items-center w-100 mw8">
        {/* Left Content (Text + Button) */}
        <div className="w-100 w-60-ns white tc tl-ns">
          <h2 className="f2 fw7 mb3">
            Get Logistics Insights by Email
          </h2>
          <p className="f5 mb4">
            Subscribe to our monthly market updates and get invited to exclusive webinars where our
            Freight Forwarding Experts answer all your questions on global trade.
          </p>
          <button
  className="pv3 ph4 f5 b pointer rounded-lg transition-colors duration-300"
  style={{
    backgroundColor: "#1E40AF", // deep blue
    color: "white",
  }}
  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3B82F6")} // light blue hover
  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1E40AF")} // deep blue default
>
  Subscribe
</button>

        </div>
      </div>
    </section>
  );
};

export default GetLogisticsInsight;
