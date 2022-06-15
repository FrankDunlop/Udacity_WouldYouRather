import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AnsweredQuestion from './AnsweredQuestion'

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
    const { user, users, questions, answeredQuestions, unansweredQuestions } = this.props

    return (
        <div>
            <img  alt='pic' src={user.avatarURL}/>
            <div>Welcome {user ? user.name : '' }</div>
            <div><input type="submit" value={this.state.toggleText} onClick={this.toggleQuestions} /></div>

            {this.state.showUnanswered && (
                <div id='unanswered'>
                    {unansweredQuestions && unansweredQuestions.map((id) => (
                        <li key={id}>
                            <div>
                                <Link to={{pathname: `/question/${id}`}}>
                                    <img  alt='pic' width="50" height="50" src={users[questions[id].author].avatarURL}/>
                                    <div>{users[questions[id].author].name} asked would you rather { questions[id].optionOne.text } or { questions[id].optionTwo.text }?</div>
                                </Link>
                            </div>

                        </li>
                    ))}
                </div>
            )}

            {!this.state.showUnanswered && (
                <div id='answered'>
                    {answeredQuestions && answeredQuestions.map((id) => (
                        <li key={id}>
                            <AnsweredQuestion questionId={questions[id].id}/>
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