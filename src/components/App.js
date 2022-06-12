import React, { Component, Fragment } from 'react'
//import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
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
            <Nav />
            {this.props.loading === true
              ? null
              :<div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/Dashboard' exact component={Dashboard} />
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
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
