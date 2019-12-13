import React, { Component } from 'react';

class Summery extends Component {
  

  render(){
    let {correct_answered, wrong_answered, total_number_question_provided} = this.props.data
    let final_score = correct_answered/total_number_question_provided * 100
    return (
      <form>
        <h2>Summery</h2>

        <div>Correct: <span style={{ fontWeight: 'bold' }}>{correct_answered}</span></div>
        <div>Wrong: <span style={{ fontWeight: 'bold' }}>{wrong_answered}</span></div>
        <div>Question answered: <span style={{ fontWeight: 'bold' }}>{total_number_question_provided}</span></div>
        <div>Final Score: <span style={{ fontWeight: 'bold' }}>{final_score}%</span></div>
        <button className="button" type="button" onClick={this.props.handleClick}>Restart</button>
      </form>
    )
  }
}

export default Summery
