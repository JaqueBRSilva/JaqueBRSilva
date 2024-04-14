import { IFeaturedProjectsData } from "../../types/Featured-Projects"
import './ProjectsList.sass'

interface SelectedProjectsProps {
    list: []
}

const ProjectsList = ({ ...props }: SelectedProjectsProps) => {

    const OPEN_IN_WINDOW_ICON = 'https://img.icons8.com/material-outlined/48/16B0E4/open-in-window.png'
    const GITHUB_ICON = "https://img.icons8.com/material-outlined/48/16B0E4/github.png"

    return (
        <div className="featured-cards-list">
            {
                props.list.map((proj: IFeaturedProjectsData) => (

                    <div id={proj.id} className="featured-repository-cards">
                        <img className="featured-preview-image"
                            src={proj.url_preview_img}
                            alt={proj.project_name}
                        />

                        <div className="featured-project-name-container">
                            <p className="featured-project-name">
                                {proj.project_name}
                            </p>

                            <div className="featured-icons-container">
                                <a target="_blank" rel="noopener noreferrer"
                                    href={proj.url_demo_link}
                                >
                                    <img className="open-in-new-window-icon"
                                        src={OPEN_IN_WINDOW_ICON}
                                        alt="open-in-window"
                                    />
                                </a>

                                <a target="_blank" rel="noopener noreferrer"
                                    href={proj.url_github_link}
                                >
                                    <img className="featured-github-logo"
                                        src={GITHUB_ICON}
                                        alt="github logo"
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
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
    )
}

export default ProjectsList