import React, { Component, Fragment } from 'react'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Logout from './Logout'
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
              this.props.authedUser === null ? <Login /> : 
              <div>
                  <Nav />
                  <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/logout' exact component={Logout} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/questions' exact component={QuestionList} />
                    <Route path='/question/:id' exact component={Question} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/error' exact component={Error} />
                    <Redirect to="/error"/>
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </Router>
     )
   }
}

const Error = () => (
  <div>
    <h3>This Page Does Not Exist</h3>
  </div>
)

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
