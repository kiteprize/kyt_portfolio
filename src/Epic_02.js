import React from "react";
import Drawer from "react-bottom-drawer";
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from "react-slick";
import Epic03 from "./Epic_03"
import { Link, useNavigate} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Epic_02.css';

function BrowserCard(props){
    return(
        <div className="Browser-Card">
            <img className="Browser-Card-Image" src={props.img} alt="Card_thumbnail"/>
            <div className="Browser-Card-Title">
                {props.Tilte}
            </div>
            <div className="Browser-Card-SubTitle">
                {props.SubTitle}
            </div>
            <Link to={"/kyt_portfolio/detail"} style={{textDecoration:"none"}} className="Browser-Card-Detail" onClick={props.openDrawer}>
                자세히 보기
            </Link>
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
            <Link to={"/kyt_portfolio/detail"} style={{textDecoration:"none"}} className="Mobile-Card-Detail" onClick={props.openDrawer}>
                자세히 보기
            </Link>
        </div>
    );
}

function App(){
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = React.useState(false);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => {
        setIsVisible(false);
        navigate(-1);
    }, [navigate]);
    const settings ={
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dragable: true,
    };
    React.useEffect(() => {
        window.onpopstate = () =>{
            setIsVisible(false);
        }  
    }, []);
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
                                img = "Card_1_thumbnail/thumbnail.png" 
                                // img = {`Card_${tag}_thumbnail/thumbnail.png`}
                                Tilte = "개인 포트폴리오 사이트" 
                                SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                                openDrawer = {openDrawer}
                            />
                            <BrowserCard 
                                img = "Card_1_thumbnail/thumbnail.png" 
                                Tilte = "개인 포트폴리오 사이트" 
                                SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                                openDrawer = {openDrawer}
                            />
                            <BrowserCard 
                                img = "Card_1_thumbnail/thumbnail.png" 
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
                                className={"Browser__drawer"}
                            >
                            <Epic03 />
                        </Drawer>
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
                            img = "Card_1_thumbnail/thumbnail.png" 
                            Tilte = "개인 포트폴리오 사이트" 
                            SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            openDrawer = {openDrawer}
                            />
                            <MobileCard 
                            img = "Card_1_thumbnail/thumbnail.png" 
                            Tilte = "개인 포트폴리오 사이트" 
                            SubTitle = "React를 사용한 반응형 포트폴리오 페이지"
                            openDrawer = {openDrawer}
                            />
                            <MobileCard 
                            img = "Card_1_thumbnail/thumbnail.png" 
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
                            <Epic03 />
                        </Drawer>
                    </div>
                </div>
            </MobileView>
        </div>
    )
}
export default App;