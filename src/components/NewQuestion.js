import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component{        
    state = { 
        optionOne: '',
        optionTwo: ''
    }

    render() {    
        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))

            this.setState(() => ({
                optionOne: '',
                optionTwo: ''
            }))
        }

        return (
            <div>
                <div>Would You Rather?</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Option 1" onChange={(e) => this.setState({ optionOne: e.target.value})}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Option 2" onChange={(e) => this.setState({ optionTwo: e.target.value})}/>
                    </div>
                    <div>
                        <input type="submit" value="Save" disabled={this.state.optionOne.trim().length === 0 || this.state.optionTwo.trim().length === 0} />
                    </div>
                </form>
                </div>
        )
    }
}

export default connect()(NewQuestion)