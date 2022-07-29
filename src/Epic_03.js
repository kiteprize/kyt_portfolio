import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_03.css';

function App(){
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
                <div className="Browser-MainTitle">
                    디자인
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_1_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic2.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-TextLine">
                    전체적으로 심플플랫과 다크모드를 사용해 유저가 편하게 볼 수 있는 디자인을 기준으로 삼고 디자인하였습니다
                    첫 소갯말에서는 유저에게 우리가 무엇을 추구하고 무슨 일을 하는지 인식할 수 있게 소갯말과 문구만을 띄어 몰입도를 높였습니다
                    <br/>
                    <br/>
                    그 다음으로는 작업했던 프로젝트들을 볼 수 있게 사진과 카드를 만들어 간략한 설명이 들어가 무슨 프로젝트인지 알 수 있게 했습니다.
                    그리고 자세히 보기를 눌르면 디자인과 기획을 어떻게 진행했는지 내용을 볼 수 있는 블로깅을 볼 수 있게 하였습니다.
                    <br/>
                    <br/>
                    마지막으로 프로필부분에서 사용한 툴들은 무엇이 있는지와 유저와 연락할 수 있는 컨택 포인트를 집어넣어 유저와 연결점을 만들었습니다.
                </div>
                <div className="Browser-SplitLine"/>
                <div className="Browser-MainTitle">
                    기획
                </div>
                <div className="Browser-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_2_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_2_pics/pic2.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Browser-TextLine">
                    개발자와 같이 기획을 하여 프로덕트를 선정하고 유저에게 어떤 가치를 전달할 수 있을지에 대해 고민하여
                    유저에게 디자인뿐 아닌 기획의 영역까지 할 수 있음을 알려주어야 한다라는 가치를 정하였습니다
                    <br/>
                    <br/>
                    그래서 남들과 다른 순서 일반적인 자신의 프로필이 먼저 나오는 것이 아닌 
                    에픽선정 - 스토리 - 정책 - 테스크 순으로 가치에 부합하는지 검토하면서 어떻게 만들어나갈지를 기획하였으며
                    그렇게 소갯말 - 포트폴리오 - 내용 - 프로필 순서로 유저가 더 몰입할 수 있을만한 순서를 정하였습니다
                </div>
            </BrowserView>
            <MobileView>
                <div className="Mobile-MainTitle">
                    디자인
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_1_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic2.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                        <img src="Card_1/Card_1_1_pics/pic4.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-TextLine">
                    전체적으로 심플플랫과 다크모드를 사용해 유저가 편하게 볼 수 있는 디자인을 기준으로 삼고 디자인하였습니다
                    첫 소갯말에서는 유저에게 우리가 무엇을 추구하고 무슨 일을 하는지 인식할 수 있게 소갯말과 문구만을 띄어 몰입도를 높였습니다
                    <br/>
                    <br/>
                    그 다음으로는 작업했던 프로젝트들을 볼 수 있게 사진과 카드를 만들어 간략한 설명이 들어가 무슨 프로젝트인지 알 수 있게 했습니다.
                    그리고 자세히 보기를 눌르면 디자인과 기획을 어떻게 진행했는지 내용을 볼 수 있는 블로깅을 볼 수 있게 하였습니다.
                    <br/>
                    <br/>
                    마지막으로 프로필부분에서 사용한 툴들은 무엇이 있는지와 유저와 연락할 수 있는 컨택 포인트를 집어넣어 유저와 연결점을 만들었습니다.
                </div>
                <div className="Mobile-SplitLine"/>
                <div className="Mobile-MainTitle">
                    기획
                </div>
                <div className="Mobile-container">
                    <Slider {...settings}>
                        <img src="Card_1/Card_1_2_pics/pic1.png" alt="pics"/>
                        <img src="Card_1/Card_1_2_pics/pic2.png" alt="pics"/>
                    </Slider>
                </div>
                <div className="Mobile-TextLine">
                    개발자와 같이 기획을 하여 프로덕트를 선정하고 유저에게 어떤 가치를 전달할 수 있을지에 대해 고민하여
                    유저에게 디자인뿐 아닌 기획의 영역까지 할 수 있음을 알려주어야 한다라는 가치를 정하였습니다
                    <br/>
                    <br/>
                    그래서 남들과 다른 순서 일반적인 자신의 프로필이 먼저 나오는 것이 아닌 
                    에픽선정 - 스토리 - 정책 - 테스크 순으로 가치에 부합하는지 검토하면서 어떻게 만들어나갈지를 기획하였으며
                    그렇게 소갯말 - 포트폴리오 - 내용 - 프로필 순서로 유저가 더 몰입할 수 있을만한 순서를 정하였습니다
                </div>
            </MobileView>
        </div>
    );
}
export default App;