import React from "react";
class UserClasss extends React.Component {

    constructor(props) {
        super(props);  
       
        this.state = {
            userInfo: {
                name: 'Default'                              
            },
            counter: 0
        };
        console.log("Child first constructor");      
    }
    async componentDidMount() {
        console.log('Childs componentDidMount');
        const data = await fetch("https://api.github.com/users/toshamshu");

        this.setState({
            userInfo: await data.json()
        });            
    }

    render() {
        console.log("Child first render");      
        const {name, avatar_url} = this.state.userInfo;
        return (
            <div>
                <h2>Name: {name}</h2>
                <img src={avatar_url}></img>
                <h3>Location: Hyd</h3>
                <h3> Skills: Java, Spring, React</h3>
                <h3><button onClick={()=> {
                    const {counter} = this.state.counter;
                    this.setState({counter: this.state.counter+1});
                    
                }}>Child Increment Me !!</button></h3>
                <h3>Child counter: {this.state.counter}</h3>
            </div>
        );
    }
}

export default UserClasss;