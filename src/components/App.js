import React, { Component, Fragment } from 'react'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Logout from './Logout'
import QuestionList from './QuestionList'
import UnansweredQuestion from './UnansweredQuestion'
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
                  <Route path='/' exact component={Login} />
                  <Route path='/logout' exact component={Logout} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/questions' component={QuestionList} />
                  <Route path='/question/:id' component={UnansweredQuestion} />
                  <Route path='/new' component={NewQuestion} />
                  {/* <Route path="/404" component={Error} />
                  <Redirect to="/404" />  */}
                  {/* <Route path='*' component={Error} /> */}

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
