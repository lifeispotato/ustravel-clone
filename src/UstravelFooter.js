import '/Users/ssun/Desktop/ustravel/src/css/UstravelFooter.css';

const UstravelFooter = () => {
    return(
        <footer>
        <div className="footer-left">
            <div className="footer-link">
                <img width="166px" height="42.85px" src="img/ustravel-logo-white.png" />
                <a href="#">회사소개</a>
                <a href="#">서비스</a>
                <a href="#">커뮤니티</a>
                <a href="#">온라인 문의</a>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
            </div>
            <div className="footer-information">
                <p>(주)유에스 여행 | 대표자: 황두연 | 개인정보보호자: 황두연 | 사업자등록번호: 104-81-45593 | 통신판매업(커머스오픈시): 2014-서울종로-8026</p>
                <p>주소: 서울시 종로구 새문안로 92, 1110호(우: 03186) | 이메일: master@ustravel.kr</p>
                <p>호스팅서비스제공자(커머스오픈시): Ⓒ1999. (주)유에스여행 Inc. All right reserved.</p>
            </div>
        </div>
        <div className="footer-right">
            <div>
                <img width="29.4px" height="24.32px" src="icon/고객센터.png"/>
                <span>고객센터</span>
            </div>
            <div>02-720-1515</div>
            <div>평일 오전 09:00 - 오후 06:00<br/>주말, 공휴일 휴무</div>
        </div>
    </footer>
    )
}

export default UstravelFooter;