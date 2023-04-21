import '/Users/ssun/Desktop/ustravel/src/css/MainPage.css';
import '/Users/ssun/Desktop/ustravel/src/css/MainYoutube.css';

const MainYoutube = () => {
    return(
        <article className="main-youtube">
            <div className="main-youtube-txt">
                <p className="article-title">YOUTUBE</p>
                <p className="article-txt">유에스 여행의 더 많은 이야기를 이곳에서 확인하세요.</p>
            </div>
            <div className="main-youtube-boxarea">
                <div className="main-youtube-box">
                    <iframe width="736" height="403" src="https://www.youtube.com/embed/x7zvCHdaSqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="main-youtube-more">
                    <p>K-shuttle UStravel</p>
                    <p>k shuttle tour program<br />(3minute)</p>
                    <p>K shuttle tour program에 대해 소개하는 영상입니다.</p>
                    <button>유튜브 보러가기 +</button>
                </div>
            </div>
        </article>
    )
}

export default MainYoutube;