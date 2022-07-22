import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_04.css';

function App(props){
    const settings ={
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragable: true,
    };
    return(
        <div>
            <BrowserView>
            
            </BrowserView>
            <MobileView>
                <div className="Mobile-MainTitle">
                    디자인
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1_1_pics/portfolio1.png" alt="pics"/>
                        <img src="Card_1_1_pics/portfolio2.png" alt="pics"/>
                        <img src="Card_1_1_pics/portfolio3.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-SubTitle">
                    부제목
                </div>
                <div className="Mobile-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
                </div>
                <div className="Mobile-SplitLine"/>
                <div className="Mobile-MainTitle">
                    기획
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1_1_pics/portfolio1.png" alt="pics"/>
                        <img src="Card_1_1_pics/portfolio2.png" alt="pics"/>
                        <img src="Card_1_1_pics/portfolio3.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-SubTitle">
                    부제목
                </div>
                <div className="Mobile-TextLine">
                    이곳은 해당 프로젝트의 개발 과정과 프로젝트를 마무리하며 느꼈던 감정들을 적어놓은 공간입니다.
                    <br/>
                    <br/>
                    현재 프로젝트가 미완성 된 상태이고 들어갈 내용을 생각하지 않아 더미데이터 형식으로 이와 같은 내용이 첨부되었습니다.
                </div>
                <div className="Mobile-SplitLine" style={{width:"93.684vw"}}/>
                <div className="Mobile-Navigator">
                    <div className="Mobile-Navigator-Area">
                        <img className="Mobile-Navigator-Arrow" src="Icons/Arrow.png" alt="Arrow"/>
                        <div className="Mobile-Navigator-TextLine">
                            <div className="Mobile-Navigator-TextLine-label">
                                이전 글
                            </div>
                            <div className="Mobile-Navigator-TextLine-Title">
                                개인 포트폴리오...
                            </div>
                        </div>
                    </div>
                    <div className="Mobile-Navigator-Middlebar"/>
                    <div className="Mobile-Navigator-Area">
                        <div className="Mobile-Navigator-TextLine">
                            <div className="Mobile-Navigator-TextLine-label" style={{textAlign: "right"}}>
                                다음 글
                            </div>
                            <div className="Mobile-Navigator-TextLine-Title" style={{textAlign: "right"}}>
                                개인 포트폴리오...
                            </div>
                        </div>
                        <img className="Mobile-Navigator-Arrow" src="Icons/Arrow.png" alt="Arrow" style={{transform: "scaleX(-1)"}}/>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
export default App;