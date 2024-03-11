import SocialMedia from '../../components/SocialMedia/SocialMedia'
import './presentation.sass'

export default function Presentation() {

    const PHOTO_URL = "https://avatars.githubusercontent.com/u/23319453?v=4"

    return (
        <div className="background_layer">
            <div className="container_profile">

                <div className="photo_area">
                    <img className="github_photo" src={PHOTO_URL} alt="Foto do GitHub" />
                </div>

                <div className="profile_area">
                    <h1>JAQUELINE SILVA BROCCOLO</h1>
                    <h2>Desenvolvedora Front-end</h2>

                    <SocialMedia />
                </div>

            </div>
        </div>
    )
}