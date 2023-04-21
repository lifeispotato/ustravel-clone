import '/Users/ssun/Desktop/ustravel/src/css/MainGallery.css';
import '/Users/ssun/Desktop/ustravel/src/css/MainPage.css';

const MainGallery = () =>{
    return(
        <article className="main-gallery">
            <div className="main-gallery-txt">
                <div>
                    <p className="article-title">GALLERY</p>
                    <p className="article-txt">유에스 여행의 활동 내용을 이곳에서 확인하세요.</p>
                </div>
                <div className="gallery-article-ch">
                    <button><img src="icon/left-btn.png" /></button>
                    <div>
                        <span>1</span>
                        <span>/</span>
                        <span>12</span>
                    </div>
                    <button><img src="icon/right-btn.png" /></button>
                </div>
            </div>
            <div className="main-gallery-boxarea">
                <div className="main-gallery-boxarea-top">
                    <div className="gallery-box gallery-box-1">
                        <img src="img/한탄 1.png"/>
                        <div className="gallery-box-txtarea">
                            <p>민서투어</p>
                            <p>2022-10-21</p>
                            <p>2022년도 민서투어 행사입니다. 10월 21일에 진행된</p>
                        </div>
                    </div>
                    <div className="gallery-box gallery-box-2">
                        <img src="img/한탄 1-1.png"/>
                        <div className="gallery-box-txtarea">
                            <p>KTO 뷰티 팸투어 4회차</p>
                            <p>2022-10-20</p>
                            <p>2022년도 KTO 뷰티 팸투어 4회차 입니다. </p>
                        </div>
                    </div>
                    <div className="gallery-box gallery-box-3">
                        <img src="img/한탄 1-2.png" />
                        <div className="gallery-box-txtarea">
                            <p>Kanji</p>
                            <p>2022-10-21</p>
                            <p>2022년도 10월 K-shuttle을 진행하였습니다.</p>
                        </div>
                    </div>
                </div>
                <div className="main-gallery-boxarea-down">
                    <div className="gallery-box gallery-box-4">
                        <img src="img/한탄 1-3.png" />
                        <div className="gallery-box-txtarea">
                            <p>K-shuttle</p>
                            <p>2022-10-16</p>
                            <p>2022년도 민서투어 행사입니다. 10월 21일에 진행된</p>
                        </div>
                    </div>
                    <div className="gallery-box gallery-box-5">
                        <img src="img/한탄 1-4.png"/>
                        <div className="gallery-box-txtarea">
                            <p>KTO 뷰티 팸투어 3회차</p>
                            <p>2022-10-13</p>
                            <p>2022년도 KTO 뷰티 팸투어 3회차 입니다. </p>
                        </div>
                    </div>
                    <div className="gallery-box gallery-box-6">
                        <img src="img/한탄 1-5.png"/>
                        <div className="gallery-box-txtarea">
                            <p>민서 DMZ 유네스코</p>
                            <p>2022-10-21</p>
                            <p>2022년도 민서투어 행사입니다. 10월 21일에 진행된</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MainGallery;