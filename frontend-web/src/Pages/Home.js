import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the projects from the backend API
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Community Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
