import React from 'react'
import "./projectCard.css"

function projectCard({ project }) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <a href='http://www.carlosdaniel.xyz' className='project-title'>{project.title}</a>
                <p className='about-project'>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map((tag) =>{
                        return(
                            <label className='tag'>{tag}</label>
                        )
                    })}
                </div>
                <div className="project-links">
                    {project.demo&& 
                    <a href="project.demo">
                        <svg className='project-link' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></g>
                        </svg>
                   </a>}
                   {project.github&& 
                    <a href="project.github">
                       <svg className='project-link' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                           <g stroke-width="1.5" fill="none"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M9 20.027c-3 .973-5.5 0-7-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g>
                        </svg>
                   </a>}
                </div>
               
            </div>
            <img src={project.image} className='project-picture' alt='carlos daniel personal website' />
        </div>
    )
}

export default projectCard
