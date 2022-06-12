import React, { Component, Fragment } from 'react'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import Question from './Question'
import NewQuestion from './NewQuestion'
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
              this.props.authedUser === ''
              ? <Login />
              : <div>
                  <Nav />
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/Questions' exact component={Dashboard} />
                  <Route path='/question' component={Question} />
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
