import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../../data/SocialMedia'
import './SocialMedia.sass'

const SocialMedia: React.FC = () => {

    return (
        <div className='social_media_icons'>

            {SOCIAL_MEDIA_LINKS.map((item) => (
                <a href={item.url} target="_blank" rel='noopener noreferrer'>
                    <img className="socials" src={item.icon_source} alt={item.link_name} />
                </a>
            ))}

        </div>
    )
}

export default SocialMedia