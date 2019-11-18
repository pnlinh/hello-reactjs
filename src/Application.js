import React, {Component} from 'react';

export default class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false,
        };
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.count > 10 && this.state.count !== prevState.count) {
            this.setState({
                overTen: true,
            });
        }
    }

    render() {
        let {count, overTen} = this.state;

        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                {
                    overTen ? <h3>Beat high score of 10</h3>: null
                }

                <span>
                    <button onClick={this.handleClick}>Click Me</button>
                </span>
            </div>
        );
    }
}