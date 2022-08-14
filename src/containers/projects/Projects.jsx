import React from 'react'
import ProjectCard from './../../components/project_card/ProjectCard';
import './projects.css';
import india from './../../assets/india.jpg'
import axios from 'axios';

let projectInfo = {
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
  console.log(get_proejcts());
  let projectCards = <>
    <ProjectCard projectInfo={projectInfo}/>
    <ProjectCard projectInfo={projectInfo}/>
    <ProjectCard projectInfo={projectInfo}/>
    <ProjectCard projectInfo={projectInfo}/>
    <ProjectCard projectInfo={projectInfo}/>
  </>
  return (
    <div className='onesite__projects' id="properties">
      <div className='onesite__projects-header'>
        <h1>Recently Added</h1>
        <p>See all</p>
      </div>
      <div className='onesite__projects-container'>
        {projectCards}
      </div>
    </div>
  )
}

function get_proejcts() {
  console.log("Base URL of Backend: ", process.env.REACT_APP_ONESITE_BASEURL);

  
  var config = {
    method: 'get',
    url: process.env.REACT_APP_ONESITE_BASEURL + '/onesite/get_sites',
    headers: { 
      'Authorization': 'Bearer tTULiD0VEw1eF92u5HTZdklp09UbHN'
    }
  };
  console.log(config);

  axios(config)
  .then(function (response) {
    if (response.status === 200) {
      let responseJson = response.data;
      console.log(responseJson);
      for(let item in responseJson){
        console.log(item);
      }
      {responseJson.values().map(function(siteDetails, i){
        projectInfo = {
          'street': siteDetails.street,
          'imgURL': india,
          'village': siteDetails.village,
          'feature1': siteDetails.ft1,
          'feature2': siteDetails.ft2,
          'feature3': siteDetails.ft3,
          'owner_name': siteDetails.owner.first_name,
          'price': siteDetails.price
        }
        console.log(projectInfo);
        return <ProjectCard projectInfo={projectInfo}/>;
      })}
    } else {
      console.log("Got ", response.status, "while calling Get Sites API");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};
export default Projects