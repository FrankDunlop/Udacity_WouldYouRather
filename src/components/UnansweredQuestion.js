import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAnswer } from '../actions/users'
import { addQuestionVote } from '../actions/questions'

class UnansweredQuestion extends Component {
    saveAnswer(user, questionId, answer){
        this.props.dispatch(addUserAnswer(user, questionId, answer))
        this.props.dispatch(addQuestionVote(user, questionId, answer))
    }

    render() {
        const { questionId, users, questions, user } = this.props

        return (
          <div>
            <div>
              {/* <img alt='pic' width="50" height="50" src={users[questions[questionId].author].avatarURL}/> */}
                <img alt='pic' width="50" height="50" src={users[questions[questionId].author].avatarURL}/>
                <div><button onClick={() => this.saveAnswer(user.id, questionId, 'optionOne')}>{ questions[questionId].optionOne.text }</button> or <button onClick={() => this.saveAnswer(user.id, questionId, 'optionTwo')}>{ questions[questionId].optionTwo.text }</button></div>
            </div>
          </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users },{Id}) {
    const user = users[authedUser]

    let questionId = 'xj352vofupe1dqz9emx13r'
    console.log('qid1: ' + users[questions[questionId].author].avatarURL)
    
    return {
        user,
        questions,
        users,
        questionId
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)