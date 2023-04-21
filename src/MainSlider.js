import '/Users/ssun/Desktop/ustravel/src/css/MainSlider.css';
import '/Users/ssun/Desktop/ustravel/src/css/MainPage.css';

const MainSlider = () => {
    return(
        <article className="main-slider">
            <div className="slider-text">
                <p>한국 출장 서비스</p>
                <p>출장의 처음부터 끝까지<br />최상의 맞춤 서비스를 제공합니다.</p>
            </div>
            <div className="slider-ellipse">
                <img src="icon/Ellipse 2.png" />
                <img src="icon/Ellipse 2.png" />
                <img src="icon/Ellipse 2.png" />
            </div>
        </article>
    );
};

export default MainSlider;