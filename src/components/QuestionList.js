import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import QuestionLink from './QuestionLink'

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
    const { user, answeredQuestions, unansweredQuestions } = this.props

    return (
        <div>
            <Avatar/>
            <br/>
            <div id='questions'>
                <input type="submit" value={this.state.toggleText} onClick={this.toggleQuestions} /></div>
            <div/>
            <br/>

            {this.state.showUnanswered && (
                <div id='question'>
                    <h2>Unanswered Questions</h2>
                    {unansweredQuestions && unansweredQuestions.map((id) => (
                        <li key={id}>
                            <div>
                                <QuestionLink id={id} answered={false}/>
                            </div>
                            <br/>
                        </li>
                    ))}
                </div>
            )}

            {!this.state.showUnanswered && (
                <div id='question'>
                    <h2>Answered Questions</h2>
                    {answeredQuestions && answeredQuestions.map((id) => (
                        <li key={id}>
                            <div>
                                <QuestionLink id={id} answered={true}/>
                            </div>
                            <br/>
                        </li>
                    ))}
                </div>
            )}
        </div>
    )}
}

function mapStateToProps({ authedUser, questions, users }) {
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
        users,
        questions,
        answeredQuestions,
        unansweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)