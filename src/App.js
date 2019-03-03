import React, { Component } from 'react';


import './App.css';

import Grid from "./components/Grid";
import Players from "./components/Players";
import SelectOpponent from "./components/SelectOpponent";


class App extends Component {
  state = {
    player: "X",
    grid: ["", "", "", "", "", "", "", "", ""],
    clickNum: 0,
    winsX: 0,
    wins0: 0,
    winner: "",
    gameEnded: false,
    opponent: "computer",
    draw: false
  }
  handleClick = async (index) => {

    const newGrid = [...this.state.grid];
    if (newGrid[index] === "" && this.state.gameEnded === false) {
      newGrid[index] = this.state.player;
      if (this.state.player === "X") {
        await this.setState(({ player: "0", grid: newGrid, clickNum: this.state.clickNum + 1, winner: "X" }));
      } else {
        await this.setState(({ player: "X", grid: newGrid, clickNum: this.state.clickNum + 1, winner: "0" }));
      }

      this.endGame();
      if (this.state.gameEnded === true) {
        await this.setState({ winsX: this.state.winner === "X" ? this.state.winsX + 1 : this.state.winsX, wins0: this.state.winner === "0" ? this.state.wins0 + 1 : this.state.wins0 })

      }

      if (this.state.gameEnded === false && this.state.opponent === "computer") {
        setTimeout(() => this.computerPlay(), 500);
      }
    }

  }

  endGame = async () => {

    const newGrid = [...this.state.grid]

    for (let i = 1; i <= newGrid.length; i++) {
      if (newGrid[i - 1] === "") {
        newGrid[i - 1] = i;
      }
    }

    if ((newGrid[0] === newGrid[1] && newGrid[2] === newGrid[1]) || (newGrid[0] === newGrid[4] && newGrid[4] === newGrid[8]) || (newGrid[0] === newGrid[3] && newGrid[3] === newGrid[6]) || (newGrid[3] === newGrid[4] && newGrid[4] === newGrid[5]) || (newGrid[6] === newGrid[7] && newGrid[7] === newGrid[8]) || (newGrid[1] === newGrid[4] && newGrid[4] === newGrid[7]) || (newGrid[2] === newGrid[5] && newGrid[5] === newGrid[8]) || (newGrid[2] === newGrid[4] && newGrid[4] === newGrid[6])) {
      await this.setState({ gameEnded: true })
    }
    if (this.state.clickNum === 9 && this.state.gameEnded === false) {
      await this.setState({ draw: true, gameEnded: true })

    }
  }

  playAgain = async () => {
    const newGrid = ["", "", "", "", "", "", "", "", ""]
    await this.setState({ player: "X", grid: newGrid, clickNum: 0, winner: "", gameEnded: false })
  }

  chooseOpponent = async (event) => {
    await this.setState({ opponent: event.target.value, winsX: 0, wins0: 0 })
    this.playAgain();
  }

  computerPlay = async () => {
    const newGrid = [...this.state.grid];
    let computer = ""

    for (let i = 0; i < newGrid.length; i++) {
      if (newGrid[i] === "") {
        computer = computer + i
      }
    }

    let index = computer.charAt(Math.floor(Math.random() * computer.length))
    newGrid[index] = "0"
    await this.setState(({ player: "X", grid: newGrid, clickNum: this.state.clickNum + 1, winner: "0" }));
    this.endGame();

  }


  render() {

    if (this.state.gameEnded === false) {
      return (<>

        <div className="container">
          <SelectOpponent onChange={this.chooseOpponent} />
          <Players player1="X" player2="0" currentPlayer={this.state.player} winsX={this.state.winsX} wins0={this.state.wins0} />
          <p>{this.state.clickNum > 0 ? `Next player: ${this.state.player}` : "Start game"} </p>
          <Grid grid={this.state.grid} handleClick={this.handleClick} />
          <button variant="light" onClick={() => { this.playAgain() }}>Play again</button>
        </div>
      </>
      );
    } else if (this.state.gameEnded === true) {

      if (this.state.draw === false) {
        return (<>
          <div className="container">
            <SelectOpponent onChange={this.chooseOpponent} />
            <Players player1="X" player2="0" currentPlayer={this.state.player} winsX={this.state.winsX} wins0={this.state.wins0} />
            <p>Winner: {this.state.winner}</p>
            <Grid grid={this.state.grid} handleClick={this.handleClick} />
            <button variant="light" label="Play again" onClick={() => { this.playAgain() }}>Play Again</button>
          </div>
        </>
        )
      } else if (this.state.draw === true) {
        return (<>
          <div className="container">
            <SelectOpponent onChange={this.chooseOpponent} />
            <Players player1="X" player2="0" currentPlayer={this.state.player} winsX={this.state.winsX} wins0={this.state.wins0} />
            <p>Draw</p>
            <Grid grid={this.state.grid} handleClick={this.handleClick} />
            <button variant="light" label="Play again" onClick={() => { this.playAgain() }}>Play Again</button>
          </div>
        </>
        )
      }

    }
  }
}


export default App;
