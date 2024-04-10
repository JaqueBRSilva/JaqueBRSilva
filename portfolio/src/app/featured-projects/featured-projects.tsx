import { useEffect, useState } from 'react'
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

                    {projectsList.map((proj: IFeaturedProjectsData) => (

                        <div id={proj.id} className="featured-repository-cards">
                            <img className="featured-preview-image"
                                src={proj.url_preview_img}
                                alt={proj.project_name}
                            />

                            <div className="featured-project-name-container">
                                <a href={proj.url_demo_link} target="blank" rel="noopener noreferrer">
                                    <div className="featured-new-window-icon">
                                        <p className="featured-project-name">
                                            {proj.project_name}
                                        </p>

                                        <img
                                            className="open-in-new-window-icon"
                                            src="https://img.icons8.com/material-outlined/48/16b0e4/open-in-window.png"
                                            alt="open-in-window"
                                        />
                                    </div>
                                </a>
                                <p className='featured-project-type'>
                                    {proj.project_type}
                                </p>
                            </div>

                            <p className="featured-repo-description">
                                {proj.description}
                            </p>

                            <div className='featured-repo-main-languages-container'>
                                {proj.used_languages.map(lang => (
                                    <p className="featured-repo-main-languages">
                                        {lang}
                                    </p>
                                ))}
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}