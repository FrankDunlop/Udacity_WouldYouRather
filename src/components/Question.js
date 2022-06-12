import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { questionIds, questions } = this.props;

    console.log(this.props)
    return (
        <div>
            <div>
                Question
            </div>
            {questionIds.map((id) => (
                <li key={id}>
                    <div>{ questions[id].author } </div>
                    <div>Would You Rather</div>
                    <h4>{ questions[id].optionOne.text } or { questions[id].optionTwo.text }</h4>
                </li>
            ))}
        </div>
    )}
}

function mapStateToProps({ authedUser, questions}, {id}) {
    const question = questions[id]
  
    return {
        authedUser,
        questionIds: Object.keys(questions),
        questions,
        question: question
  }
}

export default connect(mapStateToProps)(Question)