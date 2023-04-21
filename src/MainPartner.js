import '/Users/ssun/Desktop/ustravel/src/css/MainPartner.css';
import '/Users/ssun/Desktop/ustravel/src/css/MainPage.css';

const MainPartner = () => {
    return(
        <article className="main-partner">
            <div className="main-partner-txt">
                <p className="article-title">PARTNERS</p>
                <p className="article-txt">유에스 여행은 수많은 파트너와 함께하고 있습니다.</p>
            </div>
            <div className="main-partner-logo">
                <img width="210px" height="86.67px" src="img/국민건강보험.png"/>
                <img width="210px" height="86.67px" src="img/건강보험심사평가원.png"/>
                <img width="210px" height="86.67px" src="img/수협.png"/>
                <img width="210px" height="86.67px" src="img/유진로봇.png"/>
                <img width="210px" height="86.67px" src="img/전라남도관광재단.png"/>
            </div>
            <div className="main-partner-logo">
                <img width="210px" height="86.67px" src="img/hifil.png"/>
                <img width="210px" height="86.67px" src="img/한국관광공사.png"/>
                <img width="210px" height="86.67px" src="img/kofice.png"/>
                <img width="210px" height="86.67px" src="img/한국불교문화사업단.png"/>
                <img width="210px" height="86.67px" src="img/BYU.png"/>
            </div>
        </article>
    )
}

export default MainPartner;