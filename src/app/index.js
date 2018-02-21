import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink:"HomeMain",
            homeMounted:true
        };
        console.log("at state in app construcyor");
        console.log(this.state.homeLink)
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted:!this.state.homeMounted
        });
    }

    onGreet(){
        alert("Hello world")
    }
    onChangeLinkName(newname){
        console.log("at OnChangeLinkName in App component");
        console.log(newname);
        console.log(typeof(newname));
        this.setState({
            homeLink:newname
        });
    }
    render(){
        let persona={
            name:"ELiseo",
            age:25,
            hobbies:[
                "FootBall","American FootBall","BoleyBall"
            ]
        };
        let homeCmp = "";
        if (this.state.homeMounted){
            homeCmp=<Home persona={persona} greet={this.onGreet} homeLink={this.state.homeLink} changeLink={this.onChangeLinkName.bind(this)}/>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">UnMount Home Component</button>
                    </div>
                </div>

            </div>
        )
    }
}

render(<App/>,window.document.getElementById("app"));


