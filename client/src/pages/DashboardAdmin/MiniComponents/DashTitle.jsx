import React from "react";

 const DashTitle = ({ title }) => {
  return (
    <div className="main-dash-title d-flex justify-content-between align-items-center">
      <h5 className="mb-0">
        <span className="badge text-white bg-dark bg-secondary">{title}</span>
      </h5>
    </div>
  );
};

const DashTitleSection = ({title, children}) => {
    return (
        <div className="d-flex align-items-start">
            <h6 className="mb-4 me-2">{title}</h6>
            {children}
        </div>
    )
}

export  { DashTitle, DashTitleSection }