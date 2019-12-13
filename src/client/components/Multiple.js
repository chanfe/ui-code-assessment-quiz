import React, { Component } from 'react';
import he from 'he'
import './all.css'

class Multiple extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: ''
    }
  }


  handleOptionChange = (event) =>{
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    if(this.state.selectedOption == this.props.data.correct_answer){
      this.props.handleFormSubmit(true)
    }
    else{
      this.props.handleFormSubmit(false)
    }
    this.setState({
      selectedOption: ''
    })
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{he.decode(this.props.data.question)}</h3>
        <div className="radio">
          <label>
            <input type="radio" value={this.props.shuffled[0]} 
                          checked={this.state.selectedOption === this.props.shuffled[0]} 
                          onChange={this.handleOptionChange} />
            {he.decode(this.props.shuffled[0])}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={this.props.shuffled[1]} 
                          checked={this.state.selectedOption === this.props.shuffled[1]} 
                          onChange={this.handleOptionChange} />
            {he.decode(this.props.shuffled[1])}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={this.props.shuffled[2]} 
                          checked={this.state.selectedOption === this.props.shuffled[2]} 
                          onChange={this.handleOptionChange} />
            {he.decode(this.props.shuffled[2])}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={this.props.shuffled[3]} 
                          checked={this.state.selectedOption === this.props.shuffled[3]} 
                          onChange={this.handleOptionChange} />
            {he.decode(this.props.shuffled[3])}
          </label>
        </div>
        <button className="button" type="submit">Next</button>
      </form>
    );
  }
}

export default Multiple
