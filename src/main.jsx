import React from 'react'
import ReactDOM from 'react-dom/client'
import { insertCoin } from 'playroomkit'
import { GameEngineProvider } from './context/useGameEngine'
import App from './App'
import './index.css'
insertCoin().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GameEngineProvider>
        <App />
      </GameEngineProvider>
    </React.StrictMode>,
)
})
