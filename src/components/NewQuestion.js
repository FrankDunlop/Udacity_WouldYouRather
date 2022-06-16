import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Avatar from './Avatar'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component{        
    state = { 
        optionOne: '',
        optionTwo: '',
        Saved: false
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            saved: true
        }))

        this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
    }

    render() {    
    
        if (this.state.saved) {
            return <Redirect to={'/'} />
        }

        return (
            <div id='newQuestion'>
                <Avatar/>
                <br/>
                <h2>New Question</h2>
                <div>Would You Rather?</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Option 1" onChange={(e) => this.setState({ optionOne: e.target.value})}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Option 2" onChange={(e) => this.setState({ optionTwo: e.target.value})}/>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value="Save" disabled={this.state.optionOne.trim().length === 0 || this.state.optionTwo.trim().length === 0} />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)