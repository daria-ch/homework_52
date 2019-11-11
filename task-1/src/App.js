import React, {Component} from 'react';
import Circle from "./Components/circle/circle";


class App extends Component {

  state = {
    
  };

    generateNumbers = () => {
        const numbers = [];
        for (let i = 0; i < 5; i++) {
            let number = (Math.floor(Math.random() * 32) + 5);
            if (numbers.includes(number)){
                continue;
            } else {
                numbers.push(number);
            }
        }
    };

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div>
                        <button onClick={this.generateNumbers}>New numbers</button>
                    </div>
                  <Circle number={this.state.numbers[0].number}/>
                  <Circle number={this.state.numbers[0].number}/>
                  <Circle number={this.state.numbers[0].number}/>
                  <Circle number={this.state.numbers[0].number}/>
                  <Circle number={this.state.numbers[0].number}/>
                </div>
            </div>
        );
    }
}

export default App;
