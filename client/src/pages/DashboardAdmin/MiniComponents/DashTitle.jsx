import React from "react";

const DashTitle = ({ title }) => {
  return (
    <div className="main-dash-title d-flex justify-content-between align-items-center">
      <h5 className="mb-0">
        <span className=" badge text-white bg-dark bg-secondary">{title}</span>
      </h5>
    </div>
  );
};

export default DashTitle;
