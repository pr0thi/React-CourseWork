import ProjectCard from "./projectCard.component";
import {PROJECTS} from '../projectData'

const Projects = () => {
    return(
        <section className="h-screen flex items-center flex-col text-white snap-center" id='projects'>
            <h2 className="text-grey text-xl tracking-[8px]  pt-14 mb-[80px]">PROJECTS</h2>
            <div className="w-[80%] md:w-full flex overflow-x-auto  snap-x snap-mandatory">
                {
                    PROJECTS.map((project)=>{
                        return <ProjectCard project={project} key={project.title}/>
                    })
                }
            </div>
        </section>
    )
}

export default Projects;