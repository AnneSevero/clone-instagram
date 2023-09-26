import ItemMenu from "./ItemMenu";
import logoInstagram from '../assets/logoInstagram.png'
export default function ConteudoEsquerdo () {
    return(
        <div className="ConteudoEsquerdo">
            <div className="wrapLogo">
                <img src={logoInstagram} className="img-logo"/>
            </div>
            <div className="wrapMenu">
                <ul>
                    <li>
                        <ItemMenu icone="Casa" texto="Home"/>
                        <ItemMenu icone="Lupa" texto="Busca"/>
                        <ItemMenu icone="Compass" texto="Explorar"/>
                        <ItemMenu/>
                        <ItemMenu/>
                    </li>
                </ul>
            </div>
        </div>
    )
}