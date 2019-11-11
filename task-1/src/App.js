import React, {Component} from 'react';
import Circle from "./Components/circle/circle";


class App extends Component {

    state = {
        numbers: []
    };

    generateNumbers = () => {
       const randomNumbers = [];
        while (randomNumbers.length < 5) {
          let number = Math.floor(Math.random()*32 + 5);
          if (randomNumbers.indexOf(number) === -1) {
            randomNumbers.push(number);
          };
        }
        const numbers = randomNumbers.sort(function(a, b) {
          return a - b;
        });
      this.setState({numbers});
    };

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div>
                        <button onClick={this.generateNumbers}>New numbers</button>
                    </div>
                    <Circle number={this.state.numbers[0]}/>
                    <Circle number={this.state.numbers[1]}/>
                    <Circle number={this.state.numbers[2]}/>
                    <Circle number={this.state.numbers[3]}/>
                    <Circle number={this.state.numbers[4]}/>
                </div>
            </div>
        );
    }
}

export default App;
