import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAnswer } from '../actions/users'
import { addQuestionVote } from '../actions/questions'

class Question extends Component {
    getAnsweredQuestion = (option, userSelection) => {
        if(option === 1){
            return userSelection === 'optionOne' ? 'none' : 'line-through' 
        }
        if(option === 2){
            return userSelection === 'optionTwo' ? 'none' : 'line-through' 
        }
    }

    saveAnswer(user, questionId, answer){
        this.props.dispatch(addUserAnswer(user, questionId, answer))
        this.props.dispatch(addQuestionVote(user, questionId, answer))
    }

    render() {
        const { answered, questionId, user, users, questions} = this.props;

        const totalVotes = questions[questionId].optionOne.votes.length + questions[questionId].optionTwo.votes.length
        const option1Precentage = Math.round(questions[questionId].optionOne.votes.length / totalVotes * 100)
        const option2Precentage = Math.round(questions[questionId].optionTwo.votes.length / totalVotes * 100)

        return (
          <div>
                { !answered && (
                    <div>
                        <img  alt='pic' width="50" height="50" src={users[questions[questionId].author].avatarURL}/>
                        <div>{users[questions[questionId].author].name} asked would you rather?</div>
                        <div><button onClick={() => this.saveAnswer(user.id, questionId, 'optionOne')}>{ questions[questionId].optionOne.text }</button> or <button onClick={() => this.saveAnswer(user.id, questionId, 'optionTwo')}>{ questions[questionId].optionTwo.text }</button></div>
                    </div>
                )}

                { answered && (
                    <div>
                        <div>{user.name} would rather <span style={{ textDecorationLine: this.getAnsweredQuestion(1, user.answers[questionId]) }}>{ questions[questionId].optionOne.text }</span> <span style={{ textDecorationLine: this.getAnsweredQuestion(2, user.answers[questionId]) }}>{ questions[questionId].optionTwo.text }</span></div>
                        <div>Option 1 has {questions[questionId].optionOne.votes.length} Votes, {option1Precentage}% of people voted for '{ questions[questionId].optionOne.text }'</div>
                        <div>Option 2 has {questions[questionId].optionTwo.votes.length} Votes, {option2Precentage}% of people voted for '{ questions[questionId].optionTwo.text }' </div>
                    </div>
                )}
          </div>
        )
      }
}


function mapStateToProps({ authedUser, questions, users},{id}) {
    const user = users[authedUser]

    return {
        user,
        questions,
        users
  }
}

export default connect(mapStateToProps)(Question)