import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
