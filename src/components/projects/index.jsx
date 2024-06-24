import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = ({projects}) => {
  return (
    <div className='w-full h-full'>
        <div className='my-10'>
            <h1 className='text-center text-4xl text-sky-500 brightness-200 font-bold mb-3'>PROJECTS</h1>
            <p className='text-center text-2xl text-white brightness-200 font-semibold'>Check Out Some of My Works</p>
        </div>

        <div className='flex flex-wrap gap-10 justify-center items-center'>
            {projects.map((project,index)=> {
                return <ProjectCard key={index} project={project}/>
            })}
        </div>
    </div>
  )
}

export default ProjectsList