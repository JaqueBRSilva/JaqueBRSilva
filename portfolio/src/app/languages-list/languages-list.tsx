import { FRONTEND_LANGUAGES } from '../../data/Frontend-Languages'
import './languages-list.sass'

export default function LanguagesList() {

    return (
        <>
            <h1>Linguagens</h1>
            <div className="languages_list">
                {FRONTEND_LANGUAGES.map((item) => (
                    <span className="language_name" >
                        <img src={item.url_icon} className="lang_icons" alt={`logo ${item.lang_name}`} />
                        {item.lang_name}
                    </span>
                ))}
            </div>
        </>
    )
}