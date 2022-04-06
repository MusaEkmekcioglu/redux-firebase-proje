import './App.css'

import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store/indexStore'
import MainRouter from './router/MainRouter'

function App() {
  return (
    <div className="app">
      <StoreProvider store={store}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </StoreProvider>
    </div>
  )
}

export default App
