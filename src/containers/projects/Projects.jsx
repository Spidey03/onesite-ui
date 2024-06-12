import React, { useState, useEffect } from 'react';
import ProjectCard from './../../components/project_card/ProjectCard';
import './projects.css';
import india from './../../assets/india.jpg'
import axios from 'axios';

// TODO: Update the access token
localStorage.setItem('accessToken', "zRW6L3Yfzns2UbBuhVCal9gIecv2QG");

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
  const [projectCards, setProjectCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get_projects() {
      console.log("Base URL of Backend: ", process.env.REACT_APP_ONESITE_BASEURL);
      const accessToken = localStorage.getItem('accessToken');
      var config = {
        method: 'get',
        url: process.env.REACT_APP_ONESITE_BASEURL + '/onesite/get_sites',
        headers: { 
          'Authorization': `Bearer ${accessToken}`
        }
      };
      await axios(config)
      .then(function (response) {
        if (response.status === 200) {
          let responseJson = response.data;
          responseJson.forEach(siteDetails => {
            projectInfo = {
              "id": siteDetails.id,
              'street': siteDetails.street_name,
              'imgURL': india,
              'village': siteDetails.village,
              'feature1': siteDetails.ft1,
              'feature2': siteDetails.ft2,
              'feature3': siteDetails.ft3,
              'owner_name': siteDetails.owner.first_name,
              'price': siteDetails.price
            }
            projectCards.push(<ProjectCard projectInfo={projectInfo}/>);
          });
          setProjectCards(projectCards);
          setIsLoading(false);
        } else {
          console.log("Got ", response.status, "while calling Get Sites API");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    get_projects();
  }, []);
  if (isLoading) {
    (
      <div className='onesite__projects' id="properties">
        <div className='onesite__projects-header'>
          <h1>Recently Added</h1>
          <p>See all</p>
        </div>
        <div className='onesite__projects-container'>
          <p>Still Loading....</p>
        </div>
      </div>
    )
  }
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

export default Projects