import React from 'react'
import './projects.css'
import { ProjectData } from '../../data/projects';
import ProjectCard from './projectCard';

function Projects() {
    const data= ProjectData;
    return (
        <div className='projects'>
            <label className='section-title'>Projects</label>
            <div className='project'>
                {data.map((project) => {
                    return < ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
