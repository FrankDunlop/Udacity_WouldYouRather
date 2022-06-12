import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render() {
        const { questionIds } = this.props;

        return (
            <div>
                <h3> Questions</h3>
                <ul>
                    {questionIds.map((id) => (
                        <li key={id}>
                            <div>
                                <Question Id={id} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Dashboard)