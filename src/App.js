import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(preState => ({
      showContent: !preState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(preState => ({
      showLeftNavbar: !preState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(preState => ({
      showRightNavbar: !preState.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          onToggleShowContent: this.onToggleShowContent,
          showLeftNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          showRightNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
