import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionLink extends Component {
  render() {
    const {  id, users, questions, answered } = this.props

    return (
      <div>
        <Link to={{ pathname: `/question/${id}`, answered: answered}}>
            <img  alt='pic' width="50" height="50" src={users[questions[id].author].avatarURL}/>
            <div>{users[questions[id].author].name} asked would you rather { questions[id].optionOne.text } or { questions[id].optionTwo.text }?</div>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions, users },{ id, answered }) {
    return {
        questions,
        users,
        id,
        answered
  }
}

export default connect(mapStateToProps)(QuestionLink)