import React, { Component, Fragment } from 'react'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionList from './QuestionList'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'

class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

   render() {
     return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {
              this.props.authedUser === null
               ? <Login />
               : 
              <div>
                  <Nav />
                  <Route path='/' exact component={Login} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/questions' component={QuestionList} />
                  <Route path='/questions/:id' component={Question} />
                  <Route path='/new' component={NewQuestion} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
     )
   }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
