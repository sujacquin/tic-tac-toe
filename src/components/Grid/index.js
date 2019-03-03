import React from "react";
import Square from "../Square";

import "./index.css";

class Grid extends React.Component {
    render() {
        return (<div className="grid"> <div className="row">
            <Square style={{ borderRight: "solid 5px #14B6A6", borderBottom: "solid 5px #14B6A6", color: this.props.grid[0] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[0]} onClick={() => this.props.handleClick(0)} />
            <Square style={{ borderBottom: "solid 5px #14B6A6", color: this.props.grid[1] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[1]} onClick={() => this.props.handleClick(1)} />
            <Square style={{ borderLeft: "solid 5px #14B6A6", borderBottom: "solid 5px #14B6A6", color: this.props.grid[2] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[2]} onClick={() => this.props.handleClick(2)} />
        </div>
            <div className="row">
                <Square style={{ borderRight: "solid 5px #14B6A6", borderBottom: "solid 5px #14B6A6", color: this.props.grid[3] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[3]} onClick={() => this.props.handleClick(3)} />
                <Square style={{ borderRight: "solid 5px #14B6A6", borderBottom: "solid 5px #14B6A6", color: this.props.grid[4] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[4]} onClick={() => this.props.handleClick(4)} />
                <Square style={{ borderBottom: "solid 5px #14B6A6", color: this.props.grid[5] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[5]} onClick={() => this.props.handleClick(5)} />
            </div>
            <div className="row">
                <Square style={{ borderRight: "solid 5px #14B6A6", color: this.props.grid[6] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[6]} onClick={() => this.props.handleClick(6)} />
                <Square style={{ borderRight: "solid 5px #14B6A6", color: this.props.grid[7] === "X" ? "#807F80" : "#EFE9D3" }} value={this.props.grid[7]} onClick={() => this.props.handleClick(7)} />
                <Square value={this.props.grid[8]} style={{ color: this.props.grid[8] === "X" ? "#807F80" : "#EFE9D3" }} onClick={() => this.props.handleClick(8)} />
            </div></div>);
    }
}

export default Grid;