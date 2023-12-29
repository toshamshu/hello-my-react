import { Component } from "react";
import User from "./User";
import UserClasss from "./UserClass";

class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log("Parent constructor");
    }
    componentDidMount() {
        console.log('Parent componentDidMount');
    }
    render() {
             
        console.log("Parent render");
        return (<div>
            <h1>About</h1>
            <h2>This is about my first react app</h2>
    
            <UserClasss  name={"First"} />
            <h3><button onClick={()=> {
                    const {counter} = this.state.counter;
                    this.setState({counter: this.state.counter+1});
                    
                }}>Parent Increment Me !!</button></h3>
                <h3>Parent counter: {this.state.counter}</h3>
        </div>)
        console.log("Parent render after return");
    }
}

export default About;