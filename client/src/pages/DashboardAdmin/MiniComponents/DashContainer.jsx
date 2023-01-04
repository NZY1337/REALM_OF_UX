import React from "react";
// components
import SideBar from "../SideBar";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Row from "react-bootstrap/Row";
import { DashTitle } from "./DashTitle";
import DashboardWrapper from "../../../assets/wrappers/Dashboard/DashboardWrapper";

const DashContainer = ({ children, settings, klassName }) => {
    return (
        <DashboardAdminWrapper>
          <SideBar />
    
          <DashboardWrapper>
            <DashTitle title="Profile" />
                <div className="dash-container">
                    <Row className={`${klassName} dash-container-section`} style={{...settings}}>
                        {children}
                    </Row>
                 </div>
          </DashboardWrapper>
        </DashboardAdminWrapper>
      );
};

export default DashContainer;
