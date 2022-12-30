const createNewProjectImgesArr = (clonedProject, filename) => {
  return {
    ...clonedProject,
    desktop: clonedProject.desktop.filter((img) => img !== filename),
    tablet: clonedProject.tablet.filter((img) => img !== filename),
    mobile: clonedProject.mobile.filter((img) => img !== filename),
  };
};

export { createNewProjectImgesArr };
