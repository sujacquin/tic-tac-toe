import React from "react";
import "./index.css";



class SelectOpponent extends React.Component {
    render() {
        return (<div class="selectdiv">
            <select onChange={this.props.onChange}>
                <option value="computer">Computer</option>
                <option value="friend">Friend</option>
            </select></div>);
    }
}

export default SelectOpponent;