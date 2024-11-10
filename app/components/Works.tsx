import React from 'react';
import { projectsData } from './WorkData';
import { projectsNav } from './WorkData';
import { StaticImageData } from 'next/image';
import WorkItems from "./WorkItems";

interface portfolioProjects {
    id : number,
    image : StaticImageData ,
    title : string ,
    category : string 
}
interface projects {
    name:string
}

function Works() {
  return (
   <div>
     <div className="work__filters">
        {projectsNav.map((item, index) => {
            return (
                <span className="work__item" key={index}>{item.name}</span>
            )
        })}
    </div>
    <div className="work__container container grid">
        {projectsData.map((item) => {
            return (
                <WorkItems item={item} key={item.id}/>
            )
        })}
    </div>
   </div>
  )
}

export default Works