import React from 'react'
import MainNavigation from './src/Navigation/mainNavigation'
import { store } from './src/Store/index'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App
