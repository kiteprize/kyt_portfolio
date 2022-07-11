import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_02.css';


function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        SKILLS
                    </div>
                    <div className="Browser-Skillbox">
                        <div className="Browser-Skillbox-Header">
                            TOOLS
                        </div>
                        <div className="Browser-Skillbox-Header-UnderLine"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/Adobe_XD.png" alt="adobe_xd"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/figma.png" alt="figma"/>
                    </div>
                    <div className="Browser-Skillbox">
                        <div className="Browser-Skillbox-Header">
                            COMMUNICATION
                        </div>
                        <div className="Browser-Skillbox-Header-UnderLine"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        SKILLS
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            TOOLS
                        </div>
                        <div className="Mobile-Skillbox-Header-UnderLine"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/Adobe_XD.png" alt="adobe_xd"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/figma.png" alt="figma"/>
                    </div>
                    <div className="Mobile-Skillbox">
                        <div className="Mobile-Skillbox-Header">
                            COMMUNICATION
                        </div>
                        <div className="Mobile-Skillbox-Header-UnderLine"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                    </div>
                </div>
            </MobileView>
        </div>
    );
}
export default App;