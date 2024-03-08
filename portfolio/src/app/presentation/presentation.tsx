import SocialMedia from '../../components/SocialMedia/SocialMedia'
import './presentation.sass'

export default function Presentation() {

    return (
        <div className="background_layer">
            <div className="container_profile">

                <div className="photo_area">
                    <img className="github_photo" src="https://avatars.githubusercontent.com/u/23319453?v=4" alt="Foto do GitHub" />
                </div>

                <div className="profile_area">
                    <h1>JAQUELINE SILVA BROCCOLO</h1>
                    <h2>Desenvolvedora Front-end</h2>
                </div>

                <SocialMedia />

            </div>
        </div>
    )
}