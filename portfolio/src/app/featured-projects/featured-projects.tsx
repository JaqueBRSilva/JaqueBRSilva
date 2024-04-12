import { useEffect, useState } from 'react'
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import { MY_FEATURED_PROJECTS } from '../../data/MyFeaturedProjects'
import { IFeaturedProjectsData } from '../../types/Featured-Projects'
import './featured-projects.sass'

export default function FeaturedProjects() {
    const [projectsList, setProjectsList] = useState<IFeaturedProjectsData | [] | any>([])

    useEffect(() => {
        return setProjectsList(MY_FEATURED_PROJECTS)
    }, [])

    return (
        <>
            <h1>Projetos</h1>

            <div className="featured-main-container">
                <div className="featured-cards-list">

                    <ProjectsList
                        list={projectsList}
                    />

                </div>
            </div>
        </>
    )
}