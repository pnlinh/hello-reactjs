import React, {Component} from "react";

export default class HighScore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {overTen} = this.props;

        if (overTen) {
            return (
                <h3>
                    Beat high score of 10

                    <button onClick={this.props.onReset}>Reset</button>
                </h3>
            );
        }

        return null;
    }
}