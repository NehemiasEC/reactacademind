import React from "react";
import PropTypes from "prop-types";


export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            age:this.props.persona.age,
            status:0,
            homeLink:"HomePrincipal"
        };
        console.log("Contructor")
    }

    componentWillMount(){
       console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component did mount")
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("Component will update",nextProps, nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component did update", prevProps,prevState)
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }

    onChangeLink(){
        console.log("at onChangeLink in Home Component");
        console.log(this.state.homeLink);
        this.props.changeLink(this.state.homeLink);
    }
    onMakeOlder(){
        console.log("It Works");
        this.setState({age:this.state.age+3})
    }

    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        });
    }

    render(){
        return(
            <div>

                <p>{this.props.persona.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.status}</p>
                {this.props.persona.hobbies.map((hobby,i)=><li key={i}>{i+1} - {hobby}</li>)}
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                <button className="btn btn-alert" onClick={this.props.greet}>Hello</button>
                <input type="text"  onChange={this.onHandleChange.bind(this)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change hader link</button>
            </div>
        )
    }
}


export default Home;