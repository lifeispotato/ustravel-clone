import '/Users/ssun/Desktop/ustravel/src/css/MainBusiness.css';

const MainBusiness = () => {
    return(
        <article className="main-business">
            <div className="main-business-txt">
                <p className="article-title">BUSINESS AREA</p>
                <p className="article-txt">유에스 여행의 사업분야를 확인하세요.</p>
            </div>
            <div className="main-business-boxarea">
                <div className="business-box tourbox">
                    <img src="icon/tour.png" />
                    <p>투어 서비스</p>
                </div>
                <div className="business-box guidebox">
                    <img src="icon/guide.png"/>
                    <p>가이드 서비스</p>
                </div>
                <div className="business-box vehiclebox">
                    <img src="icon/vehicle.png"/>
                    <p>차량 서비스</p>
                </div>
                <div className="business-box vipbox">
                    <img src="icon/vip.png"/>
                    <p>VIP 서비스</p>
                </div>
            </div>
            <div className="main-business-ch">
                <a>
                    <img src="icon/left-btn.png"/>
                </a>
                <a>
                    <img src="icon/right-btn.png"/>
                </a>
            </div>
        </article>
    )
}

export default MainBusiness;