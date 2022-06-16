import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAnswer } from '../actions/users'
import { addQuestionVote } from '../actions/questions'

class Question extends Component {
    state = { saved: false }

    getAnsweredQuestion = (option, userSelection) => {
        if(option === 1){
            return userSelection === 'optionOne' ? '' : 'none' 
        }
        if(option === 2){
            return userSelection === 'optionTwo' ? '' : 'none' 
        }
    }

    saveAnswer(user, id, answer){
        this.props.dispatch(addUserAnswer(user, id, answer))
        this.props.dispatch(addQuestionVote(user, id, answer))
        this.setState(() => ({ saved: true }))
    }

    render() {
        const { answered, id, user, users, questions } = this.props

        return (
          <div>
                { id && !answered && !this.state.saved && (
                    <div>
                        <img  alt='pic' src={'/images/' + users[questions[id].author].avatarURL}/>
                        <div>{users[questions[id].author].name} asked would you rather?</div>
                        <div><button onClick={() => this.saveAnswer(user.id, id, 'optionOne')}>{ questions[id].optionOne.text }</button> or <button onClick={() => this.saveAnswer(user.id, id, 'optionTwo')}>{ questions[id].optionTwo.text }</button></div>
                    </div>
                )}

                { id && (answered || this.state.saved) && (
                    <div>
                        <img  alt='pic' src={'/images/' + users[questions[id].author].avatarURL}/>
                        <div>{users[questions[id].author].name} asked would you rather { questions[id].optionOne.text } or { questions[id].optionTwo.text }?</div>
                        <div>{user.name} would rather <span style={{ display: this.getAnsweredQuestion(1, user.answers[id]) }}>{ questions[id].optionOne.text }</span> <span style={{ display: this.getAnsweredQuestion(2, user.answers[id]) }}>{ questions[id].optionTwo.text }</span></div>
                        <div>{ questions[id].optionOne.text } has {questions[id].optionOne.votes.length} Votes, {Math.round(questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length) * 100)}% of people voted for this option</div>
                        <div>{ questions[id].optionTwo.text } has {questions[id].optionTwo.votes.length} Votes, {Math.round(questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length) * 100)}% of people voted for this option</div>
                    </div>
                )}
          </div>
        )
      }
}

function mapStateToProps({ authedUser, questions, users}, props) {
    const user = users[authedUser]

    return {
        user,
        questions,
        users,
        id: props.match.params.id,
        answered: props.location.answered
  }
}

export default connect(mapStateToProps)(Question)