import React from 'react';
import './App.css';
// import Example1 from './example1/FilterProductTable.component';
import LearnUseState from './hook/LearnUseState.component';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>First app (đồng hồ)</h1>
                <h1>Bây giờ là: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}




function App() {
    return ( <
        div className = "App" >
            <Clock />
            <LearnUseState />
        </div>
    );
}

export default App;