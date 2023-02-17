import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import SavedContext from './context/SavedContext'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedItems: [],
  }

  render() {
    const {savedItems} = this.state
    return (
      <SavedContext.Provider
        value={{
          savedItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
