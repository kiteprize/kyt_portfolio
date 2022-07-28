import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import './Epic_04.css';


function App(){
    return(
        <div>
            <BrowserView>
                <div className="background">
                    <div className="Browser-Maintext">
                        Profile
                    </div>
                    <img className="Browser-Represent-Image" src="Icons/represent_image.png" alt="represent"/>
                    <div className="Browser-Name">
                        김용태
                    </div>
                    <div className="Browser-Job">
                        designer
                    </div>
                    <div className="Browser-Icon-Area">
                        <div className="Browser-Icon-Area-Name">
                            USED TOOLS
                        </div>
                        <div className="Browser-Icon-Area-Splitline"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/Adobe_XD.png" alt="Adobe_XD"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/figma.png" alt="figma"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                        <img className="Browser-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                    </div>
                    <div className="Browser-Icon-Area">
                        <div className="Browser-Icon-Area-Name">
                            CONTACT
                        </div>
                        <div className="Browser-Icon-Area-Splitline"/>
                        <a href="mailto:kyt01030069291@gmail.com">
                            <img className="Browser-Contact-icon" src="Icons/Email.png" alt="Email"/>
                        </a>
                    </div>
                    <a href="https://kiteprize.github.io/hys_portfoilo/" className="Browser-Hyperlink-Text">
                        개발은 누가 했는지 궁금하신가요? &gt;
                    </a>
                </div>
            </BrowserView>
            <MobileView>
                <div className="background">
                    <div className="Mobile-Maintext">
                        Profile
                    </div>
                    <img className="Mobile-Represent-Image" src="Icons/represent_image.png" alt="represent"/>
                    <div className="Mobile-Name">
                        김용태
                    </div>
                    <div className="Mobile-Job">
                        designer
                    </div>
                    <div className="Mobile-Icon-Area">
                        <div className="Mobile-Icon-Area-Name">
                            USED TOOLS
                        </div>
                        <div className="Mobile-Icon-Area-Splitline"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/Adobe_XD.png" alt="Adobe_XD"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/figma.png" alt="figma"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/jira.png" alt="jira"/>
                        <img className="Mobile-Skillbox-icon" src="Skill_icon/slack.png" alt="slack"/>
                    </div>
                    <div className="Mobile-Icon-Area">
                        <div className="Mobile-Icon-Area-Name">
                            CONTACT
                        </div>
                        <div className="Mobile-Icon-Area-Splitline"/>
                        <a href="mailto:kyt01030069291@gmail.com">
                            <img className="Mobile-Contact-icon" src="Icons/Email.png" alt="Email"/>
                        </a>
                    </div>
                    <a href="https://kiteprize.github.io/hys_portfoilo/" className="Mobile-Hyperlink-Text">
                        개발은 누가 했는지 궁금하신가요? &gt;
                    </a>
                </div>
            </MobileView>
        </div>
    );
}
export default App;