import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

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

    render() {
    const { questions, answeredQuestions, unansweredQuestions } = this.props;

    return (
        <div>
            <input type="submit" value={this.state.toggleText} onClick={this.toggleQuestions} />

            {this.state.showUnanswered && (
                <div id='unanswered'>
                    {unansweredQuestions && unansweredQuestions.map((id) => (
                        <li key={id}>
                            {console.log('Q1' + questions[id].id)}
                            <Question answered={false} questionId={questions[id].id}/>
                        </li>
                    ))}
                </div>
            )}

            {!this.state.showUnanswered && (
                <div id='answered'>
                {answeredQuestions && answeredQuestions.map((id) => (
                    <li key={id}>
                        {console.log('Q2' + questions[id].id)}
                        <Question answered={true} questionId={questions[id].id}/>
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
        questions,
        answeredQuestions,
        unansweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)