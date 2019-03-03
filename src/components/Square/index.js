import React from "react";
import './index.css';


class Square extends React.Component {

    render() {
        return (<div value={this.props.value} className="square" onClick={() => this.props.onClick()} style={this.props.style} >{this.props.value}
        </div>
        )
    }
}

export default Square;