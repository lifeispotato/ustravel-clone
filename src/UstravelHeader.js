import '/Users/ssun/Desktop/ustravel/src/css/UstravelHeader.css';

const UstravelHeader = () => {
    return(
        <header>
            <img className="main-logo" src="img/ustravel-logo.png" />
            <nav>
                <ul className="main-nav">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">서비스</a></li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">온라인 문의</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default UstravelHeader;