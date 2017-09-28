import React, { Component } from 'react';

class Dream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldValue: '',
            dreamValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({fieldValue: event.target.value});
    }

    handleClick() {
        this.setState({dreamValue: this.state.fieldValue});
    }

    render() {
        return (
            <div className="Dream">
                <h2>Your personal Ded Moroz</h2>
                <span>Write your dream</span>
                <input type="text" value={this.state.fieldValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Make it real</button>
                <span>
                    {this.state.dreamValue ? 'Your dream is ': ''}
                    <b>{this.state.dreamValue}</b>
                    {this.state.dreamValue ? '. Soon it will come true!': ''}
                </span>
            </div>
        );
    }
}

export default Dream;