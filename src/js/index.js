import React from 'react';
import { render } from 'react-dom';

var root = document.getElementById('root');

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            // <svg width="400" height="180">
            //   <rect x="50" y="20" width="150" height="150"
            //   style="fill:blue;stroke:pink;stroke-width:5;opacity:0.5" />
            // </svg>  
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


render(
    <Clock />,
    root
);