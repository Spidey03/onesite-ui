import React from 'react'
import ProjectCard from './../../components/project_card/ProjectCard';
import './projects.css';
import india from './../../assets/india.jpg'

const projectInfo = {
  'street': '103/143 West Street',
  'imgURL': india,
  'village': 'Crows Nest',
  'feature1': '10 Bedroom(s)',
  'feature2': '150 M',
  'feature3': '2 Garage',
  'owner_name': 'Peter Parker',
  'price': '$45, 545'
}

const Projects = () => {
  return (
    <div className='onesite__projects' id="properties">
      {/* <div className='onesite__projects-header'>
        <h1>Recently Added</h1>
        <p>See all</p>
      </div> */}
      <div className='onesite__projects-container'>      
        <ProjectCard projectInfo={projectInfo}/>
        <ProjectCard projectInfo={projectInfo}/>
        <ProjectCard projectInfo={projectInfo}/>
        <ProjectCard projectInfo={projectInfo}/>
        <ProjectCard projectInfo={projectInfo}/>
      </div>
    </div>
  )
}

export default Projects