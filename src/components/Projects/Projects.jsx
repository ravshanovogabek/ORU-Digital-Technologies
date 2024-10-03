import React from 'react';
import './projects.css';

// Import local images
import abBuildImage from '../../assets/images/admin.jpg';
import avtozoomWebsiteImage from '../../assets/images/bnp.jpg';
import desinfectionImage from '../../assets/images/kinolar.jpg';
import homekitImage from '../../assets/images/lux-tour.jpg';
import loyalWebsiteImage from '../../assets/images/oru-tour.jpg';
import noitsImage from '../../assets/images/topik.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Admin Panel',
    imageUrl: abBuildImage, // use imported image
  },
  {
    id: 2,
    title: 'Bed Fabrics',
    imageUrl: avtozoomWebsiteImage, // use imported image
  },
  {
    id: 3,
    title: 'Kinoteatr',
    imageUrl: desinfectionImage, // use imported image
  },
  {
    id: 4,
    title: 'Uzbek-Tour',
    imageUrl: homekitImage, // use imported image
  },
  {
    id: 5,
    title: 'ORU-Tour',
    imageUrl: loyalWebsiteImage, // use imported image
  },
  {
    id: 6,
    title: 'Topik Study Center',
    imageUrl: noitsImage, // use imported image
  },
];

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className="projects-container">
        <h2 className="projects-title">Loyihalar va Dizaynlar</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-inner">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
