import React, { Component } from 'react';
import he from 'he'
import './all.css'

class Boolean extends Component {

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
            <input type="radio" value="True" 
                          checked={this.state.selectedOption === 'True'} 
                          onChange={this.handleOptionChange} />
            True
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="False" 
                          checked={this.state.selectedOption === 'False'} 
                          onChange={this.handleOptionChange} />
            False
          </label>
        </div>
        <button className="button" type="submit">Next</button>
      </form>
    );
  }
}

export default Boolean
