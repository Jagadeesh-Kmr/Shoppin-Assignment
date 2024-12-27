import React from 'react'

const watchContext = React.createContext({
  toggleWatchSaveBtn: () => {},
  toggleWatchViewBtn: () => {},
  toggleWatchSizeBtn: () => {},
})

export default watchContext
