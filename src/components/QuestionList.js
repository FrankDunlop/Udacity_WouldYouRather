import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
    state = { 
        showUnanswered: true,
        toggleText: 'Show Answered Questions' 
    }

    toggleQuestions = () => {
        this.setState({ 
            showUnanswered: !this.state.showUnanswered,
            toggleText: this.state.showUnanswered ? 'Show Unanswered Questions' : 'Show Answered Questions'
        })
    }

    getAnsweredQuestion = (option, userSelection) => {
        console.log(option + ' ' + userSelection)
        if(option === 1){
            return userSelection === 'optionOne' ? 'none' : 'line-through' 
        }
        if(option === 2){
            return userSelection === 'optionTwo' ? 'none' : 'line-through' 
        }
    }

    render() {
    const { user, authedUser, questions, answeredQuestions, unansweredQuestions } = this.props;

    return (
        <div>
            <input type="submit" value={this.state.toggleText} onClick={this.toggleQuestions} />

            {this.state.showUnanswered && (
                <div id='unanswered'>
                    {unansweredQuestions && unansweredQuestions.map((id) => (
                        <li key={id}>
                            <div>Would you rather { questions[id].optionOne.text } or { questions[id].optionTwo.text } ?</div>
                        </li>
                    ))}
                </div>
            )}

            {!this.state.showUnanswered && (
                <div id='answered'>
                {answeredQuestions && answeredQuestions.map((id) => (
                    <li key={id}>
                        <div>Would rather <span style={{ textDecorationLine: this.getAnsweredQuestion(1, user.answers[id]) }}>{ questions[id].optionOne.text }</span> <span style={{ textDecorationLine: this.getAnsweredQuestion(2, user.answers[id]) }}>{ questions[id].optionTwo.text }</span></div>
                    </li>
                ))}
            </div>
            )}
        </div>
    )}
}

function mapStateToProps({ authedUser, questions, users},{id}) {
    const user = users[authedUser]

    var answeredQuestions = []
    var unansweredQuestions = []

    if(user)
    {   
        const userAnsweredQuestions = Object.keys(user.answers)
        const questionsId = Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp
        )
        answeredQuestions = questionsId.filter(id => userAnsweredQuestions.includes(id)).map(id => questions[id].id)
        unansweredQuestions = questionsId.filter(id => !userAnsweredQuestions.includes(id)).map(id => questions[id].id)
    }   

    return {
        user,
        authedUser,
        questionIds: Object.keys(questions),
        questions,
        answeredQuestions,
        unansweredQuestions,
  }
}

export default connect(mapStateToProps)(QuestionList)