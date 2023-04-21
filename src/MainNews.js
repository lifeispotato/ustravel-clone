import '/Users/ssun/Desktop/ustravel/src/css/MainNews.css';

const MainNews = ()=>{
    return(
        <article className="main-news">
            <div className="news-title">
                <span>유에스 소식</span>
            </div>
            <div className="news-text">
                <div className="news-detail">
                    <span>2022 유에스 여행 방역 완료 공지</span>
                    <span>2022-10-21</span>
                </div>
                <div className="news-more">
                    <a href="#">더보기 +</a>
                </div>
            </div>
        </article>
    )
}

export default MainNews;