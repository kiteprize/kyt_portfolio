import React from "react";
import Drawer from "react-bottom-drawer";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import Epic04 from "./Epic_04"
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_03.css';

function BrowserCard(props){
    return(
        <div className="Browser-Card">
            <img className="Browser-Card-Image" src={props.img} alt="PortFolio_MainPage"/>
            <div className="Browser-Card-Title">
                {props.Tilte}
            </div>
            <div className="Browser-Card-SubTitle">
                {props.SubTitle}
            </div>
            <div className="Browser-Card-Detail" onClick={props.openDrawer}>
                자세히 보기
            </div>
        </div>
    );
}

function MobileCard(props){
    return(
        <div className="Mobile-Card">
            <img className="Mobile-Card-Image" src={props.img} alt="Thumbnail"/>
            <div className="Mobile-Card-Title">
                {props.Tilte}
            </div>
            <div className="Mobile-Card-SubTitle">
                {props.SubTitle}
            </div>
            <div className="Mobile-Card-Detail" onClick={props.openDrawer}>
                자세히 보기
            </div>
        </div>
    );
}

function App(){
    const [isVisible, setIsVisible] = React.useState(false);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => setIsVisible(false), []);  
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
                <div className="background">
                    <div className="Browser-Maintext">
                        PROJECTS
                    </div>
                    <div className="browser-container">
                        <Slider {...settings}>
                            <BrowserCard 
                                img = "Card_1_thumbnail/portfolio.png" 
                                Tilte = "개인 포트폴리오 사이트" 
                                SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            />
                            <BrowserCard 
                                img = "Card_1_thumbnail/portfolio.png" 
                                Tilte = "개인 포트폴리오 사이트" 
                                SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            />
                            <BrowserCard 
                                img = "Card_1_thumbnail/portfolio.png" 
                                Tilte = "개인 포트폴리오 사이트" 
                                SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            />
                        </Slider>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        PROJECTS
                    </div>
                    <div className="mobile-container">
                        <Slider {...settings}>
                            <MobileCard 
                            img = "Card_1_thumbnail/portfolio.png" 
                            Tilte = "개인 포트폴리오 사이트" 
                            SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            openDrawer = {openDrawer}
                            />
                            <MobileCard 
                            img = "Card_1_thumbnail/portfolio.png" 
                            Tilte = "개인 포트폴리오 사이트" 
                            SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            openDrawer = {openDrawer}
                            />
                            <MobileCard 
                            img = "Card_1_thumbnail/portfolio.png" 
                            Tilte = "개인 포트폴리오 사이트" 
                            SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            openDrawer = {openDrawer}
                            />
                        </Slider>
                        <Drawer
                                duration={400}
                                hideScrollbars={true}
                                onClose={closeDrawer}
                                isVisible={isVisible}
                                className={"drawer"}
                            >
                            <Epic04 />
                        </Drawer>
                    </div>
                </div>
            </MobileView>
        </div>
    )
}
export default App;