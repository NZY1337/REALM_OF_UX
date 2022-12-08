import React from "react";
import { skills } from "../../utils/helpers/constants";
import PropTypes from "prop-types";

const Skills = ({ type }) => {
  const { techSkills, designSkills } = skills;

  const renderSkils = () => {
    if (type === "tech") {
      return (
        <>
          {techSkills.map((skill) => (
            <div className="tech-holder">
              <p className="mb-0">{skill.title}</p>
              {skill.icon}
            </div>
          ))}
        </>
      );
    }

    return (
      <>
        {designSkills.map((skill) => (
          <div className="tech-holder">
            <p className="mb-0">{skill.title}</p>
            {skill.icon}
          </div>
        ))}
      </>
    );
  };

  return <>{renderSkils()}</>;
};

Skills.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Skills;
