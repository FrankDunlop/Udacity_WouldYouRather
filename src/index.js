import React from 'react'
import ReactDOM from 'react-dom'
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </React.StrictMode>);