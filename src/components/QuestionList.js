import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
  render() {
    const { questionIds, questions, answeredQuestions, unansweredQuestions } = this.props;

    console.log(this.props)
    return (
        <div>
            <div id='unanswered'>
                {unansweredQuestions.map((id) => (
                    <li key={id}>
                        <div>Unanswered {questions[id].timestamp}</div>
                        <div>{ questions[id].author } </div>
                        <div>Would You Rather</div>
                        <button>{ questions[id].optionOne.text } </button> or <button>{ questions[id].optionTwo.text }</button>
                    </li>
                ))}
            </div>
            <div id='answered'>
                {answeredQuestions.map((id) => (
                    <li key={id}>
                        <div>Answered {questions[id].timestamp}</div>
                        <div>{ questions[id].author } </div>
                        <div>Would You Rather</div>
                        <button>{ questions[id].optionOne.text } </button> or <button>{ questions[id].optionTwo.text }</button>
                    </li>
                ))}
            </div>
        </div>
    )}
}

function mapStateToProps({ authedUser, questions, users}, {id}) {
    const question = questions[id]
    const user = users[authedUser]
    var answeredQuestions = []
    var unansweredQuestions = []

    if(user)
    {   
        const questionsId = Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp
        )
        answeredQuestions = Object.keys(user.answers)
        unansweredQuestions = questionsId.filter(id => !answeredQuestions.includes(id)).map(id => questions[id].id)
    }   

    return {
        authedUser,
        questionIds: Object.keys(questions),
        questions,
        answeredQuestions,
        unansweredQuestions,
        question: question
  }
}

export default connect(mapStateToProps)(QuestionList)