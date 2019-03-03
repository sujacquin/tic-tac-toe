import React from "react";

import "./index.css";

class Players extends React.Component {
    render() {
        return (<div className="players"><div className="player" style={{ borderBottom: this.props.currentPlayer === "X" ? "solid 3px #14B6A6" : "none" }}><div>{this.props.player1}</div><div>{this.props.winsX}</div></div>
            <div className="player" style={{ borderBottom: this.props.currentPlayer === "0" ? "solid 3px #14B6A6" : "none" }}><div>{this.props.player2}</div><div>{this.props.wins0}</div></div>
        </div>);
    }
}

export default Players;