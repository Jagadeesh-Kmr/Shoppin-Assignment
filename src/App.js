import {useState} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Collections from './components/Collections'

import WatchContext from './context/WatchContext'

import './App.css'

const App = () => {
  const [saveBtn, toggleSaveBtn] = useState(false)
  const [viewBtn, toggleViewBtn] = useState(false)
  const [sizeBtn, toggleSizeBtn] = useState(true)

  const toggleWatchBtn = () => {
    toggleSaveBtn(!saveBtn)
  }

  const toggleWatchView = () => {
    toggleViewBtn(!viewBtn)
  }

  const toggleWatchSize = () => {
    toggleSizeBtn(!sizeBtn)
  }

  return (
    <WatchContext.Provider
      value={{
        saveBtn,
        viewBtn,
        sizeBtn,
        toggleWatchSaveBtn: toggleWatchBtn,
        toggleWatchViewBtn: toggleWatchView,
        toggleWatchSizeBtn: toggleWatchSize,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/collections" component={Collections} />
        <Redirect to="not-found" />
      </Switch>
    </WatchContext.Provider>
  )
}

export default App
