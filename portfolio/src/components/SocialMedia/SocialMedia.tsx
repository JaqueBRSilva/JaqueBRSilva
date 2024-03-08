import React from 'react'
import './SocialMedia.sass'

const SocialMedia: React.FC = () => {

    const CURRICULUM_URL = 'https://drive.google.com/file/d/1f-M1jWZnygiDvMhnElIhPGT2Uhf8Oi7a/view?usp=sharing'
    const GITHUB_URL = "https://github.com/JaqueBRSilva"
    const LINKEDIN_URL = "https://www.linkedin.com/in/jaqueline-silva-broccolo/"
    const EMAIL_URL = "mailto:j.silvabroccolo@gmail.com"
    const BIOLINK_URL = "https://bio.link/jaquebrsilva"

    return (
        <div className='social_media_icons'>

            <a href={CURRICULUM_URL} target="_blank" rel='noopener noreferrer'>
                <img className="socials" src="https://i.ibb.co/W5mqKz9/download-resume-96.png" alt="visualizar currículo" />
            </a>

            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <img className="socials" src="https://i.ibb.co/t3x3BFY/github-96.png" alt="github" />
            </a>

            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <img className="socials" src="https://i.ibb.co/JmkWkwK/linkedin-96.png" alt="linkedin" />
            </a>

            <a href={EMAIL_URL} target="_blank" rel='noopener noreferrer'>
                <img className="socials" src="https://i.ibb.co/DWpTftZ/email-96.png" alt="e-mail" />
            </a>

            <a href={BIOLINK_URL} target="_blank" rel='noopener noreferrer'>
                <img className="socials" src="https://i.ibb.co/QP2VGxx/link-96.png" alt="bio.link" />
            </a>

        </div >
    )
}

export default SocialMedia