import React from 'react';

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="loader-card">
        <div className="hexagon-loader">
          <div className="hexagon-inner"></div>
        </div>
        <h3 className="loader-title">DZONE</h3>
        <p className="loader-text">Securing digital foundations...</p>
      </div>
    </div>
  );
}
