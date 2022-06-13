import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    getAnsweredQuestion = (option, userSelection) => {
        if(option === 1){
            return userSelection === 'optionOne' ? 'none' : 'line-through' 
        }
        if(option === 2){
            return userSelection === 'optionTwo' ? 'none' : 'line-through' 
        }
    }

    render() {
        const { answered, questionId, user, questions} = this.props;

        return (
          <div>
                { !answered && (
                    <div>Would you rather { questions[questionId].optionOne.text } or { questions[questionId].optionTwo.text } ?</div>
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