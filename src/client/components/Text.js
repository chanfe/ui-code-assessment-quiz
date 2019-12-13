import React, { Component } from 'react';
import he from 'he'

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    if(this.state.value == this.props.data.correct_answer){
      this.props.handleFormSubmit(true)
    }
    else{
      this.props.handleFormSubmit(false)
    }
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{he.decode(this.props.data.question)}</h3>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br />
        <button className="button" type="submit">Next</button>
      </form>
    );
  }
}

export default Text
