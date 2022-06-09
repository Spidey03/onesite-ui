import React from 'react'
import './project_card.css';

const ProjectCard = ({projectInfo}) => {
  return (
    <div className='onesite__project_card'>
      <div className='onesite__project_card-img'>
        <img src={projectInfo.imgURL} alt='project' />
      </div>
      <div className='onesite__project_card-details'>
        <h3>{projectInfo.street}, {projectInfo.village}</h3>
        <div className='onesite__project_card-details__features'>
          <p>{projectInfo.feature1}</p>
          <p>{projectInfo.feature2}</p>
          <p>{projectInfo.feature3}</p>
          <p>Posted by {projectInfo.owner_name}</p>
          <p className='onesite__project_card-details__features-price'>{projectInfo.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard