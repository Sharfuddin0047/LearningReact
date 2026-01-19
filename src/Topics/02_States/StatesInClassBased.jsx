import { Component } from "react";

class StatesInClassBased extends Component {

    constructor() {
        super();
        this.state = {text: "Hello class based"}
    }

    btnHandle=() => {
        this.setState({text: "Hiii"})
    }
    render() {

        console.log(this);
        return (
            <div>
                <h1>Learn components in class based</h1>
                <h2>{this.state.text}</h2>
                <button onClick={this.btnHandle}>Update</button>
            </div>
        );
    }
}

export default StatesInClassBased;
