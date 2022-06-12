import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    Question
                </div>
                {<ul>
                    Question ID: {this.props.Id}
                </ul>}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions}, {id}) {
    const question = questions[id]
  
    return {
        authedUser,
        question: question
  }
}

export default connect(mapStateToProps)(Question)