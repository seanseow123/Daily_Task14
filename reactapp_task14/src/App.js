import React from "react";
import { LoggedIn } from "./stories/Header.stories";
import { DisplayData } from "./DisplayData";
import { RecoilRoot } from "recoil";
import { FooterDis } from "./stories/Footer.stories";
import './App.css';

const App = () => {

    return (
        <div className="mainpage">
            <LoggedIn/>
            <br></br><br></br>
            <h3>Add Things Into To-Do Application Here</h3>
            <br></br><br></br>
            <RecoilRoot>
            <DisplayData />
            </RecoilRoot>
            
            <FooterDis label="© 2022 To-Do Application All rights reserved."/>
        </div>
    )

};

export default App;