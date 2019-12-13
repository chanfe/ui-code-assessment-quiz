import * as React from 'react'
import Multiple from './Multiple'
import Boolean from './Boolean'
import Text from './Text'
import Summery from './Summery'
import he from 'he'

class Start extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            correct_answered:0,
            wrong_answered:0,
            total_number_question_provided:5,
            question_answered:0,
            random_number:parseInt(Math.random() * 50),
            array_of_questions:[]
        }
    }

    shuffle(arr) {
        var i,j,temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    handleFormSubmit = (event) =>{
        if(event == true){
            let answer = this.state.correct_answered + 1
            this.setState({
                correct_answered: answer
            })
        }
        else{
            let answer = this.state.wrong_answered + 1
            this.setState({
                wrong_answered: answer
            })
        }

        let counter = this.state.question_answered + 1
        this.setState({
            question_answered: counter
        })
        
        console.log(this.state.question_answered)
        const max = 50;
        const rand = parseInt(Math.random() * max);
        this.setState({ 
            random_number: rand
        });
    }

    componentDidMount(){
        this.handleFetch();
      }
    
    handleFetch = () =>{
        fetch(`http://localhost:4000/api/questions`).then(res => res.json()).then(res => {
            this.setState({
                array_of_questions:res.results
            })
        })
    }

    handleClick = (event) => {
        const max = 50;
        const rand = parseInt(Math.random() * max);
        this.setState({ 
            random_number: rand,
            question_answered:0,
            correct_answered:0,
            wrong_answered:0
        });
    }

    render(){
        let question = "";

        if(this.state.array_of_questions.length > 0 && this.state.total_number_question_provided > this.state.question_answered){
            let data = this.state.array_of_questions[this.state.random_number]
            let type = data.type
            if(type == "multiple"){
                question = <Multiple handleFormSubmit={this.handleFormSubmit} shuffled={this.shuffle([data.correct_answer, ...data.incorrect_answers])} data={data}/>;
            }
            else if(type == "boolean"){
                question = <Boolean handleFormSubmit={this.handleFormSubmit} data={data}/>;
            }
            else if(type == "text"){
                question = <Text handleFormSubmit={this.handleFormSubmit} data={data} />;
            }
            console.log(question)
        }
        else{
            console.log(this.state)
            let data = {
                correct_answered:this.state.correct_answered,
                wrong_answered:this.state.wrong_answered,
                total_number_question_provided:this.state.total_number_question_provided
            }
            question = <Summery handleClick={this.handleClick} data={data}/>
        }

        return (
            <div>
                {question}
            </div>
        )
    }
}

export default Start
