import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAnswer } from '../actions/users'

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
    }

    render() {
        const { answered, questionId, user, questions} = this.props;

        return (
          <div>
                { !answered && (
                    <div>Would you rather
                        <div><button onClick={() => this.saveAnswer(user.id, questionId, 'optionOne')}>{ questions[questionId].optionOne.text }</button> or <button onClick={() => this.saveAnswer(user.id, questionId, 'optionTwo')}>{ questions[questionId].optionTwo.text }</button></div>
                    </div>
                )}

                { answered && (
                    <div>{user.name} would rather <span style={{ textDecorationLine: this.getAnsweredQuestion(1, user.answers[questionId]) }}>{ questions[questionId].optionOne.text }</span> <span style={{ textDecorationLine: this.getAnsweredQuestion(2, user.answers[questionId]) }}>{ questions[questionId].optionTwo.text }</span></div>
                )}
          </div>
        )
      }
}


function mapStateToProps({ authedUser, questions, users},{id}) {
    const user = users[authedUser]

    return {
        user,
        questions
  }
}

export default connect(mapStateToProps)(Question)